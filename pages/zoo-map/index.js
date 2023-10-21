import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MAP_STYLE } from "@/constants/map";
import { MarkerF, InfoWindow } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

import zoo from "@/data/zoo-history.json";
import { Container } from "@mui/material";
import Link from "next/link";

const PIERGIORGIO = process.env.GOOGLE_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const _center = {
  lat: 45.06573830851288,
  lng: 7.702802739241693,
};

function ZooMap() {
  const [user, setUser] = useState();
  const [center, setCenter] = useState(_center);

  const router = useRouter();
  const { data } = router.query;

  // Parse the string back to an object
  const item = data ? JSON.parse(data) : null;

  useEffect(() => {
    if (item) {
      setCenter({
        lat: item.lat,
        lng: item.lng,
      });
    }
  }, [item]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setUser({
        lat: coords.latitude,
        lng: coords.longitude,
      })
    );
  }, []);

  const handleNavigation = (item) => {
    router.push({
      pathname: "/zoo-history",
      query: { data: JSON.stringify(item) },
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <LoadScript googleMapsApiKey={PIERGIORGIO}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          options={{
            scrollwheel: true,
            fullscreenControlOptions: false,
            zoomControl: false,
            panControl: false,
            mapTypeControl: true,
            // styles: MAP_STYLE,
            mapTypeId: "satellite",
            center: center,
          }}
        >
          {item && (
            <MarkerF
              label={{
                color: "white",
                fontWeight: "bold",
                text: item.name,
              }}
              icon={{
                url: "",
                // url: require("../../../public/aprile-logo.ico"),
                scale: 7,
                size: 10,
                // fillColor: "#EB00FF",
              }}
              position={{
                lat: item.lat,
                lng: item.lng,
              }}
              onClick={() => handleNavigation(item)}
            >
              <InfoWindow
                options={{
                  disableAutoPan: true,
                }}
                position={user}
              >
                <div>
                  <p>{item.name}</p>
                </div>
              </InfoWindow>
            </MarkerF>
          )}
          {user && (
            <MarkerF
              icon={{
                url: "",
                // url: require("../../../public/aprile-logo.ico"),
                scale: 7,
                size: 10,
                // fillColor: "#EB00FF",
              }}
              position={user}
              onClick={(evt) => console.log(evt)}
            >
              <InfoWindow
                options={{
                  disableAutoPan: true,
                }}
                position={user}
              >
                <div>
                  <p>Tu sei qui</p>
                </div>
              </InfoWindow>
            </MarkerF>
          )}
          {!data &&
            zoo.map((item) => {
              return (
                <MarkerF
                  label={{
                    color: "white",
                    fontWeight: "bold",
                    text: item.name,
                  }}
                  icon={{
                    url: "",
                    // url: require("../../../public/aprile-logo.ico"),
                    scale: 2,
                    size: 5,
                    // fillColor: "#EB00FF",
                  }}
                  position={{ lat: item.lat, lng: item.lng }}
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                />
              );
            })}
        </GoogleMap>
      </LoadScript>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100vw",
          backgroundColor: "white",
          color: "#020202",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        {!item && (
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push("/zoo-history")}
          >
            {"Vai alla storia del parco"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ZooMap;
