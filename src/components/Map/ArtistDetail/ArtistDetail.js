import React from "react";
import CloseButton from "../CloseButton/CloseButton";

const ArtistDetail = ({ onClose }) => {
  return (
    <div>
      <CloseButton onPress={onClose} />
    </div>
  );
};

export default ArtistDetail;
