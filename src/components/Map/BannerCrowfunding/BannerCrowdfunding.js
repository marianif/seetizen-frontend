import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const BannerCrowdfunding = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <RiArrowRightUpLine size={34} color={"black"} />

      <h5
        style={{
          color: "black",
          fontSize: 30,
          display: "inline-flex",
          fontFamily: "Bebas Neue",
          margin: 0,
          letterSpacing: 0.5,
        }}
      >
        Vai Al Crowdfunding
      </h5>
    </div>
  );
};

export default BannerCrowdfunding;
