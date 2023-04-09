import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import MapView from "@/components/Map/MapView";
import { PROGRAM } from "@/constants/places";
import styles from "@/styles/pages/Map.module.css";

import Details from "@/components/Map/Details/Details";
import Program from "@/components/Map/Program/Program";
import HousesFlows from "@/components/Map/HousesFlows/HousesFlows";

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
  HOUSE_FLOW: "HOUSE_FLOW",
  ARTIST_DETAIL: "ARTIST_DETAIL",
  HOUSE_DETAIL: "ARTIST_DETAIL",
  MAP: "MAP",
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
    <div className={styles.page}>
      <div style={{ flex: 1, height: "100%" }}>
        <div className={styles.page}>
          {show === SHOW.MAP && (
            <div
              style={{
                width: "70%",
                backgroundColor: "white",
                paddingLeft: 10,
                paddingTop: 5,
                borderRadius: 20,
                position: "absolute",
                bottom: "8%",
                left: 10,
                zIndex: 100,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                {[1, 2, 3].map((flow) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "33%",
                    }}
                    key={flow}
                  >
                    <span
                      style={{
                        width: 18,
                        aspectRatio: 1,
                        height: 18,
                        borderRadius: 100,
                        marginRight: 5,
                        backgroundColor:
                          flow === 1
                            ? "green"
                            : flow === 2
                            ? "yellow"
                            : flow === 3 && "red",
                      }}
                    />
                    <p className="p-dark" style={{ fontSize: 13 }}>
                      {flow === 1
                        ? "Libero"
                        : flow === 2
                        ? "Medio"
                        : flow === 3 && "Affollato"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <MapBar
            onProgramPress={() => setShow(SHOW.HOUSE_PROGRAM)}
            onMapPress={() => setShow(SHOW.MAP)}
            onHousePress={() => setShow(SHOW.HOUSE_FLOW)}
          />
          {show === SHOW.MAP && (
            <div
              style={{
                width: "100%",

                flex: 1,
                alignItems: "center",
              }}
            >
              <MapView
                houses={PROGRAM.houses}
                onItemClick={onItemClick}
                flows={flows}
              />
            </div>
          )}
          {show === SHOW.DETAILS && (
            <Details place={item} onCloseClick={() => setShowDetails(false)} />
          )}
          {show === SHOW.HOUSE_PROGRAM && (
            <Program
              onClose={() => setShow(SHOW.MAP)}
              onHousePress={onHousePress}
              onExhbitionPress={() => {}}
              flows={flows}
            />
          )}
          {show === SHOW.HOUSE_FLOW && (
            <HousesFlows onClose={() => setShow(SHOW.MAP)} flows={flows} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;

{
  /* {!showDetails && (
    <div className={styles.page}>
      <MapView places={PLACES} onItemClick={onItemClick} />
      <MapCards places={PLACES} onItemClick={onItemClick} />
    </div>
  )}
  {showDetails && (
    <Details place={item} onCloseClick={() => setShowDetails(false)} />
  )} */
}
// <div style={{ flex: 1, height: "100%" }}>
//   <div className={styles.page}>
//     <MapBar
//       onProgramPress={() => setShow(SHOW.HOUSE_PROGRAM)}
//       onMapPress={() => setShow(SHOW.MAP)}
//     />
//     {show === SHOW.MAP && (
//       <div
//         style={{
//           width: "100%",
//           //height: "100%",
//           flex: 1,
//           alignItems: "center",
//         }}
//       >
//         <MapView places={PLACES} onItemClick={onItemClick} />

//         {/* {HOME_BUTTONS.map((item, index) => (
//           <HomeButton
//             key={index}
//             item={item}
//             onClick={() => {
//               index === 0
//                 ? setShow(SHOW.HOUSE_PROGRAM)
//                 : index === 1 && setShow(SHOW.HOUSE_FLOW);
//             }}
//           />
//         ))} */}
//       </div>
//     )}
//     {show === SHOW.DETAILS && (
//       <Details place={item} onCloseClick={() => setShowDetails(false)} />
//     )}
//     {show === SHOW.HOUSE_PROGRAM && (
//       <HouseList
//         onClose={() => setShow(SHOW.MAP)}
//         onHousePress={onHousePress}
//         onExhbitionPress={() => {}}
//         flows={flows}
//       />
//     )}
//     {show === SHOW.HOUSE_FLOW && (
//       <HousesFlows onClose={() => setShow(SHOW.MAP)} />
//     )}
//     {show === SHOW.ARTIST_DETAIL && (
//       <ArtistDetail item={{}} onClose={() => setShow(SHOW.MAP)} />
//     )}
//     {show === SHOW.HOUSE_DETAIL && (
//       <HouseDetail item={{}} onClose={() => setShow(SHOW.MAP)} />
//     )}
//   </div>
// </div>
