import React from "react";
import styles from "../../../styles/components/HomeButton.module.css";

const HomeButton = ({ item, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h3>{`// ${item.title}`}</h3>
    </div>
  );
};

export default HomeButton;
