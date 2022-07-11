import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

export default function SimpleSnackbars() {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "transparent",
          borderRadius: 1,
        }}
      >
        <Box>
          <Button onClick={handleClick("Guidance Notification!")}>
            Notification for the customer
          </Button>
        </Box>
        <Box>
          <Button
            onClick={handleClick(
              "Your request is accepted by the vehicle owner!"
            )}
          >
            Vehicle Owner Acceptance
          </Button>
        </Box>
        <Box>
          <Button
            onClick={handleClick("Your request is accepted by the Driver!")}
          >
            Driver Acceptance
          </Button>
        </Box>
      </Box>

      <Snackbar
        sx={{
          width: { xs: 350, sm: 600, md: 400, lg: 400 },
          // color: "secondary",
          //backgroundColor: "green", This doesn't work
          // "& .MuiSnackbarContent-root": { backgroundColor: "green" },
        }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        // autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
