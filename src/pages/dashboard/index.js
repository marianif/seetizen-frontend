import { Layout, Spinner } from "@/src/components";
import styles from "@/styles/pages/Dashboard.module.css";
import { DashboardAction, DashboardHelper } from "@/src/components/Dashboard";
import actions from "@/data/dashboardActions";
import helpers from "@/data/dashboardHelpers";
import { withSSRContext, graphqlOperation } from "aws-amplify";
import { getUser, listGroups } from "@/src/graphql/queries";
import { useState, useEffect } from "react";
import { fetchMultipleAvatars, fetchAvatar } from "helpers/storage";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setPermission } from "@/src/store/userSlice";
import { isGroupVerified } from "helpers/user";
import { CustomAlert } from "@/src/components";
import { MdTipsAndUpdates } from "react-icons/md";

const USER_NOT_VERIFIED_MSG =
  "Devi verificare il tuo numero di telefono per poter pubblicare";
const GROUP_NOT_VERIFIED_MSG =
  "Almeno uno degli admin deve aver verificato il numero di telefono per poter pubblicare";

const DashboardPage = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { isReady, currentGroup, isUsingAs, hasPermission } = useSelector(
    (state) => state.user
  );
  const [alert, setAlert] = useState({
    show: false,
    message: null,
  });

  const prepareUser = async () => {
    const { avatarKey, userGroups, name } = currentUser;
    let avatarUrl = null;
    let groups = [];
    try {
      if (avatarKey) {
        const avatar_url = await fetchAvatar(avatarKey);
        avatarUrl = avatar_url;
      }
      if (userGroups.length !== 0) {
        groups = await fetchMultipleAvatars(userGroups);
      }
      dispatch(setCurrentUser({ name, avatarUrl, groups, usingAs: "user" }));
    } catch (error) {
      console.warn(error);
    }
  };

  // Verifica se almeno un admin del gruppo selezionato
  // ha verificato il numero di telefono

  useEffect(() => {
    if (isUsingAs === "group") {
      const adminsIDS = JSON.parse(currentGroup.adminsIDS);
      isGroupVerified(adminsIDS).then((hasPermission) => {
        dispatch(setPermission(hasPermission));
        !hasPermission &&
          setAlert({ show: true, message: GROUP_NOT_VERIFIED_MSG });
      });
      return;
    }
    if (!currentUser.isVerified) {
      dispatch(setPermission(false));
      setAlert({ show: true, message: USER_NOT_VERIFIED_MSG });
    } else {
      dispatch(setPermission(true));
    }
    return;
  }, [isUsingAs]);

  useEffect(() => {
    isReady &&
      setTimeout(() => {
        setLoading(false);
      }, 500);
  }, [isReady]);

  useEffect(() => {
    !isReady && prepareUser();
    return;
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout headerType="app" title="Dashboard | Seetizen" hiddenFooter>
          <CustomAlert
            message={alert.message}
            type="warning"
            show={alert.show}
            onClose={() => setAlert({ ...alert, show: false })}
          />
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.innerWrapper}>
                <div className={styles.overview}>
                  <h4>Overview</h4>
                  <p>
                    Questa è la dashboard, da qui puoi creare i tuoi articoli e
                    gli eventi. Puoi pubblicare con il tuo account personale o
                    con gli account dei gruppi di cui sei admin o editor. Questa
                    sezione è ancora in beta, aggiungeremo nuove funzionalità
                    nella prossima release. Divertiti!
                  </p>
                </div>
                <div className={styles.actions}>
                  {actions.map((action, index) => (
                    <DashboardAction
                      item={action}
                      key={index}
                      disabled={!hasPermission}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.helpers}>
                <div className={styles.helpersHeading}>
                  <MdTipsAndUpdates size={28} color="yellow" />
                  <p>Consigli per iniziare</p>
                </div>
                {helpers.map((helper, index) => (
                  <DashboardHelper
                    key={index}
                    item={helper}
                    preview={index === 2}
                  />
                ))}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { Auth, API } = withSSRContext({ req });

  try {
    const { attributes } = await Auth.currentAuthenticatedUser();

    const {
      data: { getUser: user },
    } = await API.graphql({
      query: getUser,
      variables: {
        id: attributes.sub,
      },
      authMode: "API_KEY",
    });

    const { data } = await API.graphql(
      graphqlOperation(listGroups, {
        filter: {
          or: [
            { adminsIDS: { contains: user.id } },
            { editorsIDS: { contains: user.id } },
          ],
        },
      })
    );
    const { items: groups } = await data.listGroups;

    return {
      props: {
        currentUser: {
          avatarKey: user.avatarKey,
          name: user.name,
          userGroups: groups,
          isVerified: user.isVerified,
        },
      },
    };
  } catch (error) {
    console.warn(error);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default DashboardPage;
