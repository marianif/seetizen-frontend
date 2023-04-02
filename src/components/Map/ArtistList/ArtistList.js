import React from "react";
import CloseButton from "../CloseButton/CloseButton";

const ArtistList = ({ onClose }) => {
  return (
    <div>
      <CloseButton onPress={onClose} />
    </div>
  );
};

export default ArtistList;
