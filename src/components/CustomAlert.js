import { Snackbar, Alert, AlertTitle } from "@mui/material";

const CustomAlert = ({ show, onClose, type, message }) => {
  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ marginTop: 5 }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: "80%" }}>
        <AlertTitle>Attenzione</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
