import { getUser } from "@/src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const isGroupVerified = async (adminsIDS) => {
  try {
    const list = await Promise.all(
      adminsIDS.map(async (id) => {
        const { data } = await API.graphql(graphqlOperation(getUser, { id }));
        return data.getUser.isVerified;
      })
    );

    const hasPermission = Object.values(list).some((item) => item === true);
    return hasPermission;
  } catch (error) {
    console.warn(error);
  }
};
