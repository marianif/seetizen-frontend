import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const filled = { backgroundColor: "white", color: "black" };
const outlined = { color: "white" };

const CustomButton = ({ label, onPress, variant, style }) => {
  return (
    <Button
      variant={variant}
      endIcon={<ReadMoreIcon />}
      style={variant === "filled" ? filled : outlined}
      onClick={onPress}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
