import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateFlow } from "@/src/graphql/mutations";
import { listFlows } from "@/src/graphql/queries";
import { HOUSES } from "@/constants/places";
import UpdateCard from "@/components/UpdateCard/UpdateCard";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";

const UpdateFlow = () => {
  const [hidden, setHidden] = useState(true);
  const [flows, setFlows] = useState();
  const updateFlowRate = async (id, value) => {
    const input = {
      id,
      houseId: id,
      value,
    };
    try {
      await API.graphql(graphqlOperation(updateFlow, { input }));
    } catch (error) {
      console.warn(error);
    }
  };

  const getFlowRate = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listFlows));
      console.log(data);
      setFlows(data.listFlows.items);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getFlowRate();
  }, []);

  if (hidden) {
    return <Box></Box>;
  }

  if (flows && !hidden) {
    return (
      <div>
        {HOUSES.map((house, index) => (
          <UpdateCard
            flows={flows}
            key={index}
            item={house}
            onConfirm={(id, value) => updateFlowRate(id, value)}
          />
        ))}
      </div>
    );
  }
};

export default UpdateFlow;
