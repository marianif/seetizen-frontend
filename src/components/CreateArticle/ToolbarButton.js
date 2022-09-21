const buttonStyle = {
  padding: 10,
  backgroundColor: "whitesmoke",
  borderRadius: 5,
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  marginRight: 5,
  cursor: "pointer",
};

const ToolbarButton = ({ icon, label, onToggle, style }) => {
  return (
    <span onClick={() => onToggle({ label, style })} style={buttonStyle}>
      {icon}
    </span>
  );
};

export default ToolbarButton;
