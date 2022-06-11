import React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackBar({
  isOpen,
  handleClose,
  severity,
  message,
}) {
  
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}!
      </Alert>
    </Snackbar>
  );
}

// eslint-disable-next-line no-lone-blocks
{
/* <Alert severity="error">This is an error message!</Alert>
    <Alert severity="warning">This is a warning message!</Alert>
    <Alert severity="info">This is an information message!</Alert>
    <Alert severity="success">This is a success message!</Alert> */
}

// const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
//   const [submitError, setSubmitError] = useState(null);

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setIsErrorMsgOpen(false);
//   };