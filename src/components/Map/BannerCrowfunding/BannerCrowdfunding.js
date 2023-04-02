import React from "react";
import { RiHandHeartFill } from "react-icons/ri";

const BannerCrowdfunding = () => {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: 12,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <RiHandHeartFill size={28} color={"black"} />

      <h5
        style={{
          color: "black",
          fontSize: 20,
          display: "inline-flex",
        }}
      >
        Partecipa Al Crowfunging
      </h5>
    </div>
  );
};

export default BannerCrowdfunding;
