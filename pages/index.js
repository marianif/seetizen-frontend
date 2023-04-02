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
import HouseList from "@/components/Map/HouseList/HouseList";
import ArtistList from "@/components/Map/ArtistList/ArtistList";
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

  return (
    <div style={{ flex: 1, height: "100%" }}>
      <div className={styles.page}>
        <MapBar
          onProgramPress={() => setShow(SHOW.HOUSE_PROGRAM)}
          onMapPress={() => setShow(SHOW.MAP)}
        />
        {show === SHOW.MAP && (
          <div
            style={{
              width: "100%",
              //height: "100%",
              flex: 1,
              alignItems: "center",
            }}
          >
            <MapView places={PLACES} onItemClick={onItemClick} />

            {/* {HOME_BUTTONS.map((item, index) => (
              <HomeButton
                key={index}
                item={item}
                onClick={() => {
                  index === 0
                    ? setShow(SHOW.HOUSE_PROGRAM)
                    : index === 1 && setShow(SHOW.ARTIST_LIST);
                }}
              />
            ))} */}
          </div>
        )}
        {show === SHOW.DETAILS && (
          <Details place={item} onCloseClick={() => setShowDetails(false)} />
        )}
        {show === SHOW.HOUSE_PROGRAM && (
          <HouseList
            onClose={() => setShow(SHOW.MAP)}
            onHousePress={onHousePress}
            onExhbitionPress={() => {}}
            flows={flows}
          />
        )}
        {show === SHOW.ARTIST_LIST && (
          <ArtistList onClose={() => setShow(SHOW.MAP)} />
        )}
        {show === SHOW.ARTIST_DETAIL && (
          <ArtistDetail item={{}} onClose={() => setShow(SHOW.MAP)} />
        )}
        {show === SHOW.HOUSE_DETAIL && (
          <HouseDetail item={{}} onClose={() => setShow(SHOW.MAP)} />
        )}
      </div>
    </div>
  );
};

export default Map;
