import * as React from "react";
import { Typography, Box, Button } from "@mui/material"; //==============Components==================================

function Valuecomponent(props) {
  return (
    <div>
      <Box
        sx={{
          marginTop: { lg: 5, md: 4, sm: 3, xs: 3 },
          width: 270,
          height: 270,
          borderRadius: "50%",
          boxShadow: 3,
          textAlign: "center",
          // bgcolor: "#7594D3",
          background: " linear-gradient(124.76deg, #7594D3 18.52%, #C9E7F2 84.72%)",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            mt: 7,
            width: 180,
            height: 30,
            backgroundColor: "white",
            color: "black",
            fontSize: 20,
            mb: 3,
          }}
        >
          {props.name}
        </Button>

        <Typography
          component="h1"
          gutterBottom
          sx={{
            fontSize: 15,
            padding: 1,
          }}
        >
          {props.description}
        </Typography>
      </Box>
    </div>
  );
}
export default Valuecomponent;
