import React, { useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const UpdateCard = ({ item, flows, onConfirm }) => {
  const [value, setValue] = useState(1);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderWidth: 1,
        padding: "5%",
      }}
    >
      <h2 style={{ color: "white", fontFamily: "Bebas Neue", fontSize: 50 }}>
        {item.name}
      </h2>
      <Slider
        defaultValue={flows.find((flow) => flow.id === item.houseId).value}
        step={1}
        marks
        min={1}
        max={3}
        onChange={(e) => setValue(e.target.value)}
        color="secondary"
      />
      <button
        onClick={() => onConfirm(item.houseId, value)}
        style={{
          backgroundColor: "transparent",
          padding: 10,
          borderWidth: 1,
          borderRadius: 0,
          borderColor: "white",
          marginTop: 20,
        }}
      >
        Conferma e Aggiorna
      </button>
    </Box>
  );
};

export default UpdateCard;
