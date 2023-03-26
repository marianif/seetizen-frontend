import React from "react";

const Details = ({ place, onCloseClick }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        position: "absolute",
      }}
    >
      <div
        onClick={onCloseClick}
        style={{
          width: "100%",
          height: "10%",
          alignSelf: "flex-end",
          justifyContent: "flex-end",
          display: "flex",
          paddingRight: 20,
        }}
      >
        <h6 style={{ color: "white", fontSize: 20 }}>Chiudi</h6>
      </div>
      <div style={{ width: "100%", height: "90%" }}>
        <h1>{place.house_name}</h1>
        {place.program.events.map((event, index) => (
          <>
            <h2 key={index}>{event.hours}</h2>
            <h6 style={{ color: "red" }} key={index}>
              {event.theme}
            </h6>
          </>
        ))}
      </div>
    </div>
  );
};

export default Details;
