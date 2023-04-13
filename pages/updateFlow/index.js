import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateFlow } from "@/src/graphql/mutations";
import { listFlows } from "@/src/graphql/queries";
import { HOUSES } from "@/constants/places";
import UpdateCard from "@/components/UpdateCard/UpdateCard";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { Button } from "react-form-elements";
import Image from "next/image";
import logo from "../../public/images/aprile-logo.png";

const CODE = process.env.AUTHORIZATION_CODE;

const UpdateFlow = () => {
  const [hidden, setHidden] = useState(true);
  const [code, setCode] = useState(null);
  const [flows, setFlows] = useState();

  const onClick = () => {
    if (code === CODE) {
      const key = "code";
      localStorage.setItem(key, "AUTHORIZED");
      setHidden(false);
      return;
    }
  };

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
      setFlows(data.listFlows.items);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getFlowRate();
    const stored = localStorage.getItem("code");
    if (stored) {
      setHidden(false);
    }
  }, []);

  if (hidden) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          padding: 2,
          alignItems: "center",
          borderRadius: 6,
          flexDirection: "column",
        }}
      >
        <Image
          src={logo}
          // layout="intrinsic"
          width={80}
          height={80}
          objectFit="contain"
          style={{
            backgroundColor: "white",
            borderRadius: 100,
            padding: 10,
          }}
        />
        <h2 className="text-light">La tana dei masdanieri</h2>

        <FormControl
          fullWidth
          size="xl"
          style={{
            backgroundColor: "#fff",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <h2 className="text-dark">Inserisci il codice</h2>
          <TextField
            id="outlined-basic"
            label="Codice"
            variant="outlined"
            style={{
              marginTop: 10,
              marginBottom: 10,
              borderColor: "white",
              border: "1px solid white",
              borderRadius: 3,
              color: "white",
            }}
            onChange={(e) => setCode(e.target.value)}
            required
            color="secondary"
            className="text-light"
          />
          <Button
            variant="filled"
            style={{ color: "white", backgroundColor: "black" }}
            onClick={onClick}
          >
            Accedi
          </Button>
        </FormControl>
      </Box>
    );
  }

  if (flows && !hidden) {
    return (
      <Box
        sx={{
          display: "flex",
          minWidth: 400,
          padding: 10,
          alignItems: "center",
          borderRadius: 6,
          flexDirection: "column",
        }}
      >
        <Image
          src={logo}
          // layout="intrinsic"
          width={80}
          height={80}
          objectFit="contain"
          style={{
            backgroundColor: "white",
            borderRadius: 100,
            padding: 10,
          }}
        />
        <h2 className="text-light">La tana dei masdanieri</h2>
        <p
          className="text-light p-md"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >{`Scorri lo slider per impostare l'affluenza e premi "modifica" per aggiornarla in tempo reale`}</p>
        <p
          className="text-light"
          style={{ textAlign: "center", width: "80%", fontStyle: "italic" }}
        >{`NB: Ricordati di non modificare per sbaglio quella altrui se hai bevuto come una mieticionfra`}</p>
        {HOUSES.map((house, index) => (
          <UpdateCard
            flows={flows}
            key={index}
            item={house}
            onConfirm={(id, value) => updateFlowRate(id, value)}
          />
        ))}
      </Box>
    );
  }
};

export default UpdateFlow;
