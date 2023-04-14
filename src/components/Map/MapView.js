import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerF, Polyline, InfoWindow } from "@react-google-maps/api";
import BannerCrowdfunding from "./BannerCrowfunding/BannerCrowdfunding";
import { MAP_STYLE, BIKE_TOUR_COORDS } from "@/constants/map";
import iconSvg from "../../../public/aprile-logo.ico";
import Image from "next/image";
import logo from "../../../public/images/aprile-logo.png";
import styles from "../../../src/styles/components/HouseList.module.css";
import axios from "axios";

// const PIERGIORGIO = "AIzaSyC6rY5Tc1ED5krXQ_pyhcdd9qVZGM0rcNs";
const PIERGIORGIO = process.env.GOOGLE_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};

const MapView = ({ houses, onItemClick, flows }) => {
  return (
    <LoadScript googleMapsApiKey={PIERGIORGIO}>
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
          path={BIKE_TOUR_COORDS}
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
