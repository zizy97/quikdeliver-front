import React, { useState, useEffect } from "react"; //react
//======MUI=======
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
//======MUI=======

//=========Prograss Bar==========

function CircularIndicator({ indicator }) {
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(indicator);
    // const timer = setInterval(() => {
    //    setProgress((prevProgress) =>
    //      prevProgress >= 100 ? 1 : prevProgress + 1
    //    );
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
  }, [indicator]);

  return (
    <>
      <CircularProgressWithLabel
        value={progress}
        component="div"
        sx={{
          px: 10,
        }}
      />
    </>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box
      style={{ zIndex: 1 }}
      sx={{
        position: "fixed",

        top: { lg: "80%", md: "80%", sm: "80%", xs: "80%" },
        left: { lg: "5%", md: "5%", sm: "5%", xs: "2%" },
      }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        color="success"
        thickness={7}
        size={70}
        sx={{
          color: "#12C919",
          // [`& .${circularProgressClasses.circle}`]: {
          //   strokeLinecap: "round",
          // },
          bgcolor: "white",
          borderRadius: 50,
          border: 1,
          borderColor: "grey.500",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="green">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularIndicator;
//=========Prograss Bar end==========
