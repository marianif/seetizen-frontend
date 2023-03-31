import React from "react";
import styles from "../../../../styles/components/MapCard.module.css";
import Image from "next/image";

const image = require("../../../../../public/houses_images/apt-gallery.jpeg");

const Card = ({ place, onItemClick }) => {
  return (
    <div
      style={{
        display: "inline-block",
        flex: 1,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        marginTop: 10,
      }}
      onClick={onItemClick}
    >
      <div
        style={{
          width: 100,
          height: "100%",
          borderRadius: 10,
          overflow: "hidden",
          marginRight: 10,
        }}
      >
        <Image
          src={place.image_url}
          layout="responsive"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h1>{place.house_name}</h1>
    </div>
  );
};

export default Card;
