import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70%",
};

const center = {
  lat: 45.0677551,
  lng: 7.6824892,
};

const MapView = ({ places, onItemClick }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC6rY5Tc1ED5krXQ_pyhcdd9qVZGM0rcNs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Child components, such as places, info windows, etc. */}
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
