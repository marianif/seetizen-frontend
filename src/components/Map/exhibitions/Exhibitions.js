import React, { useState } from "react";
import { PROGRAM } from "@/constants/index";
import CloseButton from "../CloseButton/CloseButton";
import styles from "../../../styles/components/HouseList.module.css";
import { MdOutlineAccessTime } from "react-icons/md";

const Exhbitions = ({ onHousePress, onClose, perfomance }) => {
  const [current, setCurrent] = "dayOne";
  const [showDayOne, setShowDayOne] = useState(true);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
      className={styles.screen}
    >
      <CloseButton onPress={onClose} />
      <div>
        <button className={styles.button} onClick={() => setShowDayOne(true)}>
          14 Aprile
        </button>
        <button className={styles.button} onClick={() => setShowDayOne(false)}>
          15 Aprile
        </button>
      </div>

      {showDayOne && (
        <div style={{ flexDirection: "row", flexWrap: "no-wrap" }}>
          <h1 className={styles.heading}>Esposizioni - H 16 alle 21</h1>
          {PROGRAM.dayOne.exhibitions.map((item) => (
            <div
              className={styles.container}
              key={item.id}
              onClick={() => onHousePress(item.id)}
            >
              <h3>{item.title}</h3>

              <div className={styles.inner}>
                <h3>{item.address}</h3>
              </div>
              <h4>{item.houseName}</h4>
            </div>
          ))}
        </div>
      )}

      {showDayOne && perfomance && (
        <div style={{ flexDirection: "row", flexWrap: "no-wrap" }}>
          <h1 className={styles.heading}>Performance</h1>
          {PROGRAM.dayOne.performance.map((item) => (
            <div
              className={styles.container}
              key={item.id}
              onClick={() => onHousePress(item.id)}
            >
              <h3>{item.title}</h3>

              <div className={styles.inner}>
                <h3>{item.timeRange}</h3>
              </div>
              <div className={styles.inner}>
                <h3>{item.address}</h3>
              </div>
              <h4>{item.houseName}</h4>
            </div>
          ))}
        </div>
      )}

      {!showDayOne && (
        <div style={{ flexDirection: "row", flexWrap: "no-wrap" }}>
          <h1 className={styles.heading}>Esposizioni - H 16 alle 21</h1>
          {PROGRAM.dayTwo.exhibitions.map((item) => (
            <div
              className={styles.container}
              key={item.id}
              onClick={() => onHousePress(item.id)}
            >
              <h3>{item.title}</h3>

              <div className={styles.inner}>
                <h3>{item.timeRange}</h3>
              </div>
              <div className={styles.inner}>
                <h3>{item.address}</h3>
              </div>
              <h4>{item.houseName}</h4>
            </div>
          ))}
        </div>
      )}

      {!showDayOne && performance && (
        <div style={{ flexDirection: "row", flexWrap: "no-wrap" }}>
          <h1 className={styles.heading}>Performance</h1>

          {PROGRAM.dayOne.performance.map((item) => (
            <div
              className={styles.container}
              key={item.id}
              onClick={() => onHousePress(item.id)}
            >
              <h3>{item.title}</h3>

              <div className={styles.inner}>
                <h3>{item.timeRange}</h3>
              </div>
              <div className={styles.inner}>
                <h3>{item.address}</h3>
              </div>
              <h4>{item.houseName}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exhbitions;
