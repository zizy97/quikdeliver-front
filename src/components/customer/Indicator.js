import React, { useState, useEffect } from "react"; //react
//======MUI=======
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
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
            ml: 5,
            width: { lg: 500, md: 500, sm: 400, xs: 250 },
            borderRadius: 2,
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

export default Indicator;
//=========Prograss Bar end==========
