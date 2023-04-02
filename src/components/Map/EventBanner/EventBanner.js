import React from "react";

const EventBanner = ({ item }) => {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: 12,
        borderWidth: 1,
        borderColor: "pink",
      }}
    >
      <h3>HouseName</h3>
      <h3>Address</h3>
      <h3>Hours</h3>
      <h3>Hours</h3>
      <h3>Title</h3>
    </div>
  );
};

export default EventBanner;
