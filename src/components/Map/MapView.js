import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerF, Polyline, InfoWindow } from "@react-google-maps/api";
import BannerCrowdfunding from "./BannerCrowfunding/BannerCrowdfunding";
import { MAP_STYLE } from "@/constants/map";
import iconSvg from "../../../public/aprile-logo.ico";
import Image from "next/image";
import logo from "../../../public/images/aprile-logo.png";
import styles from "../../../src/styles/components/HouseList.module.css";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};
const API_KEY = "AIzaSyC6rY5Tc1ED5krXQ_pyhcdd9qVZGM0rcNs";

const array = [
  { lat: 45.06628016031804, lng: 7.698278147452736 },
  { lat: 45.06626942285922, lng: 7.698269515667217 },
  { lat: 45.06940956812749, lng: 7.695161695494189 },
  { lat: 45.06716666208206, lng: 7.693316335704866 },
  { lat: 45.06664623359672, lng: 7.692580839701095 },
  { lat: 45.066040022146744, lng: 7.692130228589749 },
  { lat: 45.069222560568896, lng: 7.683654448119883 },
  { lat: 45.06969234885904, lng: 7.682259699411479 },
  { lat: 45.07041975534718, lng: 7.6802104917384515 },
  { lat: 45.07242765233392, lng: 7.681594511585027 },
  { lat: 45.07455670377538, lng: 7.683064362124287 },
  { lat: 45.07460216308276, lng: 7.6829248872564895 },
  { lat: 45.07484461211138, lng: 7.682356258949315 },
  { lat: 45.075252522376495, lng: 7.682640365208038 },
  { lat: 45.07567073241803, lng: 7.683671812972074 },
  { lat: 45.076932314201244, lng: 7.685172100641476 },
  { lat: 45.07693278856416, lng: 7.685124503657979 },
  { lat: 45.07694085757459, lng: 7.685181628426564 },
  { lat: 45.077560232337504, lng: 7.682597794449274 },
  { lat: 45.08060697843332, lng: 7.67095756304504 },
  { lat: 45.07910036605375, lng: 7.66993815377746 },
  { lat: 45.08028393545708, lng: 7.666466400829966 },
  { lat: 45.08000192404083, lng: 7.665914481829458 },
  { lat: 45.07985835293816, lng: 7.666148971920799 },
  { lat: 45.08007504272521, lng: 7.666319457597009 },
  { lat: 45.078647626606404, lng: 7.668233768253089 },
  { lat: 45.07769688908922, lng: 7.666701942530568 },
  { lat: 45.077432034881284, lng: 7.666662974376007 },
  { lat: 45.077427842648554, lng: 7.666721957587138 },
  { lat: 45.07662184509709, lng: 7.666798050123792 },
  { lat: 45.07623345133021, lng: 7.657033609110232 },
  { lat: 45.07612109848993, lng: 7.6569090940502536 },
  { lat: 45.07611132866726, lng: 7.65657705389031 },
  { lat: 45.079873457393795, lng: 7.637839108864463 },
  { lat: 45.081031093525255, lng: 7.638385591627701 },
  { lat: 45.08127570057832, lng: 7.63244587255867 },
  { lat: 45.0816078435894, lng: 7.632515047591991 },
];

const MapView = ({ houses, onItemClick, flows }) => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        streetView
        options={{
          scrollwheel: true,
          fullscreenControlOptions: false,
          zoomControl: false,
          panControl: false,
          mapTypeControl: false,
          styles: MAP_STYLE,
        }}
      >
        {/* Child components, such as places, info windows, etc. */}
        <Polyline
          path={array}
          visible
          options={{
            strokeColor: "#4ea9cb",
            strokeWeight: 7,
          }}
        />
        {houses.map((house) => {
          const flow = flows.find((flow) => flow.id === house.id)?.value;
          return (
            <MarkerF
              icon={{
                url: iconSvg,
                // url: require("../../../public/aprile-logo.ico"),
                scale: 7,
                size: 10,
                fillColor: "#EB00FF",
              }}
              position={house.coords}
              key={house.id}
              onClick={() => onItemClick(house)}
            >
              <InfoWindow position={house.coords}>
                <div style={{ color: "black", width: 100 }}>
                  {flow && (
                    <div
                      className={styles.flowContainerMap}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 2,
                        right: 2,
                        zIndex: 100,
                      }}
                    >
                      {/* <p className="p-light p-sm">
                        {flow === 1
                          ? "Spazio Libero"
                          : flow === 2
                          ? "Sia sta affollando"
                          : flow === 3 && "Affollato"}
                      </p> */}
                      <span
                        className={styles.flowCircle}
                        style={{
                          backgroundColor:
                            flow === 1
                              ? "green"
                              : flow === 2
                              ? "yellow"
                              : flow === 3 && "red",
                        }}
                      />
                    </div>
                  )}
                  <Image
                    src={logo}
                    // layout="intrinsic"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                  <p>{house.houseName}</p>
                </div>
              </InfoWindow>
            </MarkerF>
          );
        })}
        <BannerCrowdfunding />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
