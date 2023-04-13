import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const UpdateCard = ({ item, flows, onConfirm }) => {
  const [value, setValue] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const onButtonPress = () => {
    onConfirm(item.houseId, value);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    const current = flows.find((flow) => flow.id === item.houseId).value;
    if (current === value) {
      return;
    }

    if (current !== value) {
      setValue(current);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderWidth: 1,
        padding: "5%",
        border: "1px solid",
        borderColor: "white",
        marginBottom: 5,
        borderRadius: 8,
      }}
    >
      <h2 style={{ color: "white", fontFamily: "Bebas Neue", fontSize: 50 }}>
        {item.name}
      </h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor:
              value === 1
                ? "green"
                : value === 2
                ? "yellow"
                : value === 3 && "red",
            width: 30,
            height: 30,
            aspectRatio: 1,
            borderRadius: 100,
            marginRight: 10,
          }}
        />
        <p style={{ color: "white", fontFamily: "Bebas Neue", fontSize: 20 }}>
          {value === 1
            ? "Spazio libero"
            : value === 2
            ? "Si sta riempiendo"
            : value === 3 && "Affollato"}
        </p>
      </Box>
      <Slider
        defaultValue={flows.find((flow) => flow.id === item.houseId).value}
        step={1}
        marks
        min={1}
        max={3}
        onChange={(e) => setValue(e.target.value)}
        color="secondary"
      />
      {showSuccess && (
        <h4
          className="text-light"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          Affluenza modificata con successo!
        </h4>
      )}
      <button
        onClick={onButtonPress}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderWidth: 2,
          borderRadius: 10,
          marginTop: 20,
          color: "black",
          fontFamily: "Bebas Neue",
          width: "100%",
        }}
      >
        Modifica Affluenza
      </button>
    </Box>
  );
};

export default UpdateCard;
