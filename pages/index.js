import React from "react";
import ZooMap from "./zoo-map";
import ZooHistory from "./zoo-history";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <ZooHistory />
    </div>
  );
}

export default Home;
