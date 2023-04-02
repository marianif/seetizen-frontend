import React, { useState } from "react";
import { PROGRAM } from "@/constants/places";
import CloseButton from "../CloseButton/CloseButton";
import styles from "../../../styles/components/HouseList.module.css";
import { MdOutlineAccessTime } from "react-icons/md";

const HouseList = ({ onHousePress, onClose, flows }) => {
  const [current, setCurrent] = "dayOne";
  const [showDayOne, setShowDayOne] = useState(true);

  const getHouseFlow = (houseId) => {
    return flows.find((flow) => flow.id === houseId).value;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
        <div
          style={{
            flexDirection: "row",
            flexWrap: "no-wrap",
          }}
        >
          <h1 className={styles.heading}>Esposizioni - H 16 alle 21</h1>
          {PROGRAM.dayOne.exhibitions.map((item) => {
            const houseFlow = getHouseFlow(item.id);
            return (
              <div
                className={styles.container}
                key={item.id}
                onClick={() => onHousePress(item.id)}
              >
                <h3>{item.title}</h3>

                <div className={styles.inner}>
                  <h3>{item.address}</h3>
                </div>
                <div className={styles.bottomContainer}>
                  <h4>{item.houseName}</h4>
                  <div className={styles.flowContainer}>
                    <p>
                      {houseFlow === 1
                        ? "Spazio Libero"
                        : houseFlow === 2
                        ? "Sia sta affollando"
                        : houseFlow === 3 && "Affollato"}
                    </p>
                    <span
                      className={styles.flowCircle}
                      style={{
                        backgroundColor:
                          houseFlow === 1
                            ? "green"
                            : houseFlow === 2
                            ? "yellow"
                            : houseFlow === 3 && "red",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showDayOne && (
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

      {!showDayOne && (
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

export default HouseList;
