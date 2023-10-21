import React from "react";
import ZooHistory from "./zoo-history";
import ZooMap from "./zoo-map";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <ZooMap />
    </div>
  );
}

export default Home;
