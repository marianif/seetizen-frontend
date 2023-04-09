import { Container } from "@mui/material";
import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import HouseCard from "../HouseCard/HouseCard";
import { PROGRAM } from "@/constants/places";

const HousesFlows = ({ onClose, flows }) => {
  return (
    <Container
      style={{
        flex: 1,
        flexDirection: "column",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        paddingTop: "2%",
        position: "absolute",
        top: 0,
      }}
      maxWidth="xl"
    >
      <h2 className="tex-white">Affluenza in Tempo Reale</h2>
      {PROGRAM.houses.map((house) => {
        return (
          <HouseCard
            house={house}
            flow={flows.find((flow) => flow.id === house.id).value}
            key={house.id}
          />
        );
      })}
    </Container>
  );
};

export default HousesFlows;
