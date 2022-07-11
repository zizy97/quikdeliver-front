import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
//====Import Components=======
import { useGlobalContext } from "../userContext";
//====Import 3rd party Library
import { motion } from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      style={{ transitionDelay: 2000 }}
    />
  );
});

//=======Rating==========

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
//=======Rating ending==========

const AlertDialogSlide1 = () => {
  const [open, setOpen] = React.useState(true);
  // ------rating------
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  // ------rating------
  const { appRating, setAppRating } = useGlobalContext();

  const handleClose = () => {
    setOpen(false);
    setAppRating(true);
    console.log(appRating);
  };

  const AppRatingVarients = {
    hidden: {
      opacity: 0,
      y: "100vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        dumping: 8,
        delay: 4,
      },
    },
  };
  //---framer-motion---

  return (
    <motion.div variants={AppRatingVarients} initial="hidden" animate="visible">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <DialogTitle>
          {"Do you satisfy with the Deliver's delivery prrocess?? Rate him..."}
        </DialogTitle>
        <DialogContent
          sx={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 25,
            }}
          >
            <Rating
              size="large"
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
};

export default AlertDialogSlide1;
