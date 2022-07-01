import React, { useState, useEffect } from "react"; //react
//======MUI=======
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//======MUI=======

//=========Prograss Bar==========

function Indicator({ indicator }) {
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
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
      <LinearProgressWithLabel
        value={progress}
        component="div"
        sx={{
          px: 10,
        }}
      />
    </>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#12C919",
            },
            width: 400,
            borderRadius: 0,
            border: 1,
            borderColor: "grey.500",
            height: 13,
          }}
        />
      </Box>

      <Box
        sx={{
          minWidth: 35,
        }}
      >
        <Typography variant="body2" color="green">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
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
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default Indicator;
//=========Prograss Bar end==========
