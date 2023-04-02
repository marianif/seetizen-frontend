import React from "react";

const CloseButton = ({ onPress }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <button
        onClick={onPress}
        style={{
          backgroundColor: "transparent",
          borderRadius: 0,
          borderWidth: 0,
        }}
      >
        Chiudi
      </button>
    </div>
  );
};

export default CloseButton;
