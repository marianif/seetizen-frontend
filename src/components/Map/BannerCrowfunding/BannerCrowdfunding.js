import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../../public/images/aprile-logo-full.png";
import CustomButton from "@/components/CustomButton";

const LINK =
  "https://www.produzionidalbasso.com/project/aprile-festival-delle-case-per-l-arte/";

const BannerCrowdfunding = () => {
  return (
    <div
      style={{
        width: "96%",
        height: "15%",
        marginRight: "2%",
        marginLeft: "2%",
        marginTop: "2%",

        alignItems: "flex-start",
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "column",
        display: "flex",
        position: "absolute",
        paddingLeft: 10,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "center",
          flexDirection: "row",
          display: "flex",
          paddingBottom: 35,
          paddingLeft: 10,
          paddingTop: 35,
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 5,
        }}
      >
        <Image
          src={logo}
          // layout="intrinsic"
          width={150}
          height={"100%"}
          objectFit="contain"
          alt="logo"
        />

        <a href={LINK}>
          <CustomButton label={"Vai al Crowdfunding!"} variant="filled" />
        </a>
      </div>
    </div>
  );
};

export default BannerCrowdfunding;
