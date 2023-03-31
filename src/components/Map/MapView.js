import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF, Polyline } from "@react-google-maps/api";

const API_KEY = "AIzaSyC6rY5Tc1ED5krXQ_pyhcdd9qVZGM0rcNs";

const containerStyle = {
  width: "100%",
  height: "70%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};

const array = [
  { lat: 45.0815745, lng: 7.6325702 },
  { lat: 45.075183, lng: 7.6826686 },
  { lat: 45.0795914, lng: 7.6838146 },
  { lat: 45.0672302, lng: 7.6993797 },
];

const MapView = ({ places, onItemClick }) => {
  const [direction, setDirection] = useState([]);

  // const fetchDirections = async () => {
  //   const res = await fetch(
  //     `https://maps.googleapis.com/maps/api/directions/json?origin=45.0815745,7.6325702&destination=45.075183,7.6826686&key=${API_KEY}`,
  //     {
  //       method: "GET",
  //     }
  //   );

  //   const data = await res.json();
  //   console.log(data);

  //   setDirection(res);
  // };

  // useEffect(() => {
  //   fetchDirections();
  // }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Child components, such as places, info windows, etc. */}
        <Polyline path={array} visible />
        {places.map((place) => (
          <MarkerF
            position={place.coords}
            key={place.id}
            onClick={() => onItemClick(place)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
