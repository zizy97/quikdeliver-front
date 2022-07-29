import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        disableElevation
        size="large"
        sx={{
          width: "20%",
          borderRadius: 10,
          borderColor: "#FFBC39",
          hoverColor: "#FFBC39",
        }}
        endIcon={<AssignmentIcon sx={{ color: "#FFBC39", fontSize: 40 }} />}
      >
        Declration Form
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          backgroundColor: "white",
          zIndex: 100000,
        }}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ color: "black", bgcolor: "#FD8686", borderRadius: 30 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: "black", textAlign: "center" }}
              variant="h5"
              component="div"
            >
              Declaration Form
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              sx={{ color: "black", bgcolor: "#97ADFB", borderRadius: 30 }}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>{/* Content Goes Here */}</List>
      </Dialog>
    </div>
  );
}
