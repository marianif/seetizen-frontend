import React from "react";
import styles from "../../../styles/components/MapCard.module.css";
import Card from "./Card/Card";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const MapCards = ({ places, onItemClick }) => {
  return (
    <ScrollMenu
      style={{
        width: "100%",
        zIndex: 10,
        flexDirection: "row",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {places.map((place) => (
        <Card
          place={place}
          key={place.id}
          onItemClick={() => onItemClick(place)}
        />
      ))}
    </ScrollMenu>
  );
  // return <div className={styles.container}>MapCard</div>;
};

export default MapCards;
