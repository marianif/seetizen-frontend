import styles from "@/styles/components/DashboardAction.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { useRouter } from "next/router";

const ICON_SIZE = 22;
const BUTTON_ICON_SIZE = "100%";

const DashboardAction = ({ item, disabled }) => {
  const router = useRouter();
  const { heading, paragraph, path } = item;

  return (
    <div className={`bg-dark-md ${styles.card}`}>
      <div className={styles.cardTop}>
        <div>
          <span className={styles.icon}>
            {path === "/event" ? (
              <MdEditCalendar size={ICON_SIZE} />
            ) : (
              <BsPencilSquare size={ICON_SIZE} />
            )}
          </span>
          <h6>{heading}</h6>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <p className="p-sm">{paragraph}</p>
        <button
          onClick={() => router.push(`/create/${path}`)}
          disabled={disabled}
        >
          <IoAddCircle
            size={BUTTON_ICON_SIZE}
            color={disabled ? "rgb(109, 109, 109)" : "#34d399cb"}
          />
        </button>
      </div>
    </div>
  );
};

export default DashboardAction;
