import React from "react";
import styles from "../../../src/styles/components/Typography.module.css";

const Paragraph = ({ text, black }) => {
  return <p className={[styles.paragraph, black && styles.black]}>{text}</p>;
};

export default Paragraph;
