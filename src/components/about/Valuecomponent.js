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
          bgcolor: "#7594D3",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            mt: 7,
            width: 180,
            height: 25,
            backgroundColor: "white",
            color: "black",
            fontSize: 16,
            mb: 3,
          }}
        >
          {props.name}
        </Button>

        <Typography
          component="h1"
          gutterBottom
          sx={{
            fontSize: 18,
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
