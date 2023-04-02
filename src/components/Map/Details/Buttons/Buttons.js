import React from "react";

const buttonStyle = {
  color: "black",
};

const Buttons = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "cayn" }}>
      <button style={buttonStyle}>Programma</button>
      <button style={buttonStyle}>Cronoprogramma</button>
      <button style={buttonStyle}>Scheda Artisti</button>
    </div>
  );
};

export default Buttons;
