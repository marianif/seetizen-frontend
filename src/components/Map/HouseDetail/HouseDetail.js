import React from "react";
import CloseButton from "../CloseButton/CloseButton";

const HouseDetail = ({ onClose, item }) => {
  return (
    <div>
      <CloseButton onPress={onClose} />
      <h2>Title</h2>
      <h2>Artist</h2>
      <h3>Description</h3>
    </div>
  );
};

export default HouseDetail;
