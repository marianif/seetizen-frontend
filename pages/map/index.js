import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import MapView from "@/components/Map/MapView";
import { PLACES } from "@/constants/places";
import styles from "@/styles/pages/Map.module.css";
import MapCards from "@/components/Map/MapCards/MapCards";
import Details from "@/components/Map/Details/Details";

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
    <>
      {!showDetails && (
        <div className={styles.page}>
          <MapView places={PLACES} onItemClick={onItemClick} />
          <MapCards places={PLACES} onItemClick={onItemClick} />
        </div>
      )}
      {showDetails && (
        <Details place={item} onCloseClick={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default Map;
