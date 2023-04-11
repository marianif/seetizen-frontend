import React from "react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const BikeTour = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DirectionsBikeIcon style={{ color: "white", width: 80, height: 80 }} />
      <h2 style={{ display: "inline", width: "70%", textAlign: "center" }}>
        Le prenotazioni per il bike tour saranno attive da mercoledì 12 aprile
      </h2>
    </div>
  );
};

export default BikeTour;
