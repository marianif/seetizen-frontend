import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import MapView from "@/components/Map/MapView";
import { PLACES } from "@/constants/places";
import styles from "@/styles/pages/Map.module.css";
import MapCards from "@/components/Map/MapCards/MapCards";
import Details from "@/components/Map/Details/Details";
import Image from "next/image";

const image = require("../../public/images/logo-aprile.png");

const containerStyle = {
  width: "100%",
  height: "80%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};

const Map = ({ markers }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [item, setItem] = useState();

  const onItemClick = (item) => {
    setItem(item);
    setShowDetails(true);
  };

  return (
    <div className={styles.page}>
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow: "hidden",
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={image} layout="responsive" width={"100%"} height={"100%"} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>15 - 16 Aprile</h1>
        <h2 className={styles.subheading}>
          Festival delle Case per l&apos; Arte
        </h2>
        <h2 className={styles.subheading}>
          Qui troverai la mappa con il programma, le indicazioni delle case e
          tanto altro!
        </h2>
      </div>
      {/* {!showDetails && (
        <div className={styles.page}>
          <MapView places={PLACES} onItemClick={onItemClick} />
          <MapCards places={PLACES} onItemClick={onItemClick} />
        </div>
      )}
      {showDetails && (
        <Details place={item} onCloseClick={() => setShowDetails(false)} />
      )} */}
    </div>
  );
};

export default Map;
