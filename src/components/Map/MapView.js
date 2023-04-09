import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerF, Polyline, InfoWindow } from "@react-google-maps/api";
import BannerCrowdfunding from "./BannerCrowfunding/BannerCrowdfunding";
import { MAP_STYLE } from "@/constants/map";
import iconSvg from "../../../public/aprile-logo.ico";
import Image from "next/image";
import logo from "../../../public/images/aprile-logo.png";
import styles from "../../../src/styles/components/HouseList.module.css";

const base64 =
  "PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTA4MC4wMDAwMDBwdCIgaGVpZ2h0PSIxMDgwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTA4MC4wMDAwMDAgMTA4MC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDEwODAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNTM3NyA3NDY2IGMtODQgLTIzIC0xMjAgLTc0IC0xNzUgLTI0NiAtNDggLTE1MSAtNjMgLTIzNSAtNjkgLTM5MAotNiAtMTU0IDEzIC0zMjQgNDQgLTQwMiAyMyAtNTcgOTQgLTExNCAxNTcgLTEyOSA0NSAtMTAgNjEgLTkgMTAzIDUgODQgMjgKMTUzIDExOCAxNTMgMjAxIDAgMTkgLTcgNzcgLTE2IDEyNyAtMjkgMTY1IC03IDM0NCA2NiA1NDMgMzAgODEgMjQgMTUwIC0xNgoyMDggLTUxIDczIC0xNTUgMTA4IC0yNDcgODN6Ii8+CjxwYXRoIGQ9Ik00MjEwIDcyMTEgYy00OSAtMTYgLTg4IC00MSAtMTIwIC03NyAtNzIgLTgyIC03NyAtMTQ5IC0yNCAtMjkyIDEwNgotMjg0IDI4OCAtNTcxIDUwNiAtNzk1IDEwOSAtMTEyIDE2MCAtMTQxIDI1MyAtMTQyIDE1MyAtMSAyNTggMTUxIDIxNCAzMDkgLTgKMjkgLTM5IDY4IC0xMTMgMTQ1IC01NiA1OCAtMTIwIDEyOSAtMTQyIDE1NiAtMTAxIDEyNSAtMjA0IDMwMiAtMjY5IDQ2NiAtMjUKNjIgLTU3IDEyOCAtNzEgMTQ2IC01MCA2NiAtMTY0IDEwNyAtMjM0IDg0eiBtMTIzIC01NSBjNTcgLTI0IDkzIC03NSAxNDIKLTE5NiAxMDAgLTI1MSAyNDQgLTQ2MiA0NjEgLTY3NSA4MyAtODMgOTEgLTE4NSAyMiAtMjcwIC01MyAtNjMgLTEzNiAtODMKLTIxNiAtNTAgLTc1IDMyIC0yODIgMjU4IC00MDUgNDQ1IC0xMzkgMjExIC0yNzcgNTI3IC0yNjMgNjAxIDIxIDExMyAxNTcgMTg5CjI1OSAxNDV6Ii8+CjxwYXRoIGQ9Ik01Njg2IDYwNzAgYy0zMzYgLTUzIC02MTEgLTI0MSAtODIzIC01NjIgLTEzOSAtMjExIC0yMjUgLTQ0NSAtMjY4Ci03MzMgLTMxIC0yMDYgLTI5IC02NDcgNSAtOTQ5IDIxIC0xODQgMTQ2IC0yODAgMzA1IC0yMzYgNjAgMTcgMTI5IDc5IDE1MQoxMzYgMTYgNDIgMTYgNTkgMyAyMzcgLTE5IDI1OSAtMTcgNjEwIDUgNzUyIDM1IDIzMiAxMTUgNDQyIDIyNCA1ODUgMTQ4IDE5NgozNDcgMzA5IDU0MyAzMTAgNzUgMCAxOTkgLTMzIDI2MyAtNzAgNjIgLTM1IDE0NSAtMTIwIDE3NCAtMTc2IDY2IC0xMzIgNzQKLTIwNCAxMTcgLTExNDQgMTcgLTM2NiAyMyAtNDE4IDYwIC00NzMgNzEgLTEwNCAyNDcgLTEyOSAzNTQgLTQ5IDUwIDM3IDcxIDkyCjcxIDE4OCAwIDE5NCAtNTIgMTE2NyAtNzEgMTMwOSAtNTkgNDUyIC0zMDkgNzQ0IC03MjggODUyIC0xMDkgMjcgLTI4OCAzOAotMzg1IDIzeiBtMzI1IC01NiBjMzE0IC01OSA1NjIgLTI1OCA2NjkgLTUzNiA3OCAtMjAyIDg4IC0yOTIgMTMxIC0xMjA2IGwyMQotNDQzIC0yNCAtNDcgYy01MSAtMTAxIC0yMDEgLTEyMiAtMjk1IC0zOSAtMjAgMTcgLTQyIDQ2IC00OSA2NCAtMTAgMjIgLTIyCjE4NSAtMzkgNTMwIC00MyA4NjIgLTQ3IDg5NCAtMTEyIDEwMzEgLTYzIDEzNCAtMTgzIDIyOCAtMzQzIDI2OCAtOTcgMjQgLTI2MwoxNSAtMzUzIC0xOSAtMjc5IC0xMDggLTUwMCAtNDA2IC01NzcgLTc4MCAtNDMgLTIxMCAtNTIgLTUxOCAtMjUgLTg3MCAxNQotMTk4IDEzIC0yMTMgLTI3IC0yNjkgLTI0IC0zNCAtMTA5IC03OCAtMTUxIC03OCAtNjQgMCAtMTM0IDQ3IC0xNjggMTEzIC00MAo3NyAtNjUgNzE4IC0zOCA5NjUgMzIgMzAyIDEyNCA1NjcgMjc2IDc5NyA3NiAxMTUgMjQzIDI4OCAzNDIgMzU1IDEyNSA4NCAyNzkKMTQ4IDQwOCAxNzAgODQgMTQgMjY2IDExIDM1NCAtNnoiLz4KPHBhdGggZD0iTTM4MzUgNTkwOCBjLTExNSAtMTMgLTI0MyAtNDUgLTI5MCAtNzMgLTc0IC00MyAtMTIyIC0xNDMgLTEwNiAtMjE4CjE5IC04MSA4MiAtMTUxIDE1OSAtMTczIDUwIC0xNSA1NyAtMTQgMTY1IDExIDEwMiAyNSAxMjUgMjcgMjU3IDIzIDEyMyAtNAoxNTkgLTkgMjM1IC0zMyAxNjYgLTUzIDI0MCAtNDMgMzE1IDQyIDYzIDcxIDY4IDE3NyAxNCAyNTYgLTg0IDEyMSAtNDQyIDIwMAotNzQ5IDE2NXoiLz4KPHBhdGggZD0iTTYwMjAgNDc5MiBjLTQwIC0xOSAtODAgLTg4IC04MCAtMTM3IDEgLTQ3IDM1IC0xMTIgNzIgLTEzNSA0NSAtMjcKMTMxIC0yNyAxNzYgMCA2OSA0MiA4OSAxNTAgNDMgMjI2IC0zNiA2MCAtMTM5IDgyIC0yMTEgNDZ6Ii8+CjwvZz4KPC9zdmc+Cg==";

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
  // 45.07693278856416, 7.685124503657979
];
const svg = `data:image/svg+xml;charset=UTF-8;base64,${base64}`;
const MapView = ({ houses, onItemClick, flows }) => {
  const [direction, setDirection] = useState([]);

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
        <Polyline path={array} visible />
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
