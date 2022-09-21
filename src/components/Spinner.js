import PropagateLoader from "react-spinners/PropagateLoader";

const Spinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        background: "#090909",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PropagateLoader color={"#10b981"} loading={true} size={10} />
    </div>
  );
};

export default Spinner;
