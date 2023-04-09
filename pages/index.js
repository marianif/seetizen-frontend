import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import MapView from "@/components/Map/MapView";
import { PROGRAM, HOME_BUTTONS } from "@/constants/index";
import { PLACES } from "@/constants/places";
import styles from "@/styles/pages/Map.module.css";
import MapCards from "@/components/Map/MapCards/MapCards";
import CronoCalendar from "@/components/Map/CronoCalendar/CronoCalendar";
import Details from "@/components/Map/Details/Details";
import Image from "next/image";
import BannerCrowdfunding from "@/components/Map/BannerCrowfunding/BannerCrowdfunding";
import EventBanner from "@/components/Map/EventBanner/EventBanner";
import HomeButton from "@/components/Map/HomeButton/HomeButton";
import HouseList from "@/components/Map/Program/Program";
import ArtistList from "@/components/Map/HousesFlows/HousesFlows";
import ArtistDetail from "@/components/Map/ArtistDetail/ArtistDetail";
import HouseDetail from "@/components/Map/HouseDetail/HouseDetail";
import MapBar from "@/components/MapBar/MapBar";

import { API, graphqlOperation } from "aws-amplify";
import { updateFlow } from "@/src/graphql/mutations";
import { getFlow, listFlows } from "@/src/graphql/queries";
import { onUpdateFlow } from "@/src/graphql/subscriptions";
import { Api } from "@mui/icons-material";
import { subscribe } from "graphql";

const SHOW = {
  HOUSE_PROGRAM: "HOUSE PROGRAM",
  DETAILS: "DETAILS",
  ARTIST_LIST: "ARTIST_LIST",
  ARTIST_DETAIL: "ARTIST_DETAIL",
  HOUSE_DETAIL: "ARTIST_DETAIL",
  MAP: "MAP",
};

const containerStyle = {
  width: "100%",
  height: "80%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};

const Map = ({ markers }) => {
  const [show, setShow] = useState(SHOW.MAP);
  const [flows, setFlows] = useState([]);

  const [house, setHouse] = useState();
  const [artist, setArtist] = useState();

  const [item, setItem] = useState();

  const onItemClick = (item) => {
    setItem(item);
    setShowDetails(true);
  };

  const onHousePress = (item) => {
    setHouse(item.id);
    setShow(SHOW.HOUSE_DETAIL);
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
    // Subscribe to creation of Todo
    (async () => {
      const updateSub = await API.graphql(
        graphqlOperation(onUpdateFlow)
      ).subscribe({
        next: ({ provider, value }) => getFlowRate(), // Process incoming messages
      });
    })();
    //return () => updateSub.unsubscribe();
  }, []);

  useEffect(() => {
    getFlowRate();
  }, []);

  const image = require("../public/images/logo-aprile.png");

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
