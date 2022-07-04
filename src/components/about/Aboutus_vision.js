import * as React from "react";
import { Box, Typography } from "@mui/material";

function Aboutusvision(props) {
  return (
    <div>
      <Box
        gutterBottom
        sx={{
          padding: { lg: 6, xs: 2, md: 4, sm: 6 },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { lg: 33, md: 25, sm: 32, xs: 25 },
            mt: 2,
            textAlign: "center",
            color: "white",
            fontWeight: 700,
            paddingTop: 2,
            bgcolor:
              " linear-gradient(124.76deg, #92CFE5 18.52%, #C9E7F2 84.72%)",
          }}
        >
          {props.name1}
        </Typography>

        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: 18,
            fontWeight: { lg: 300 },
            textAlign: "justify",
            padding: { xs: 2, sm: 0, lg: 2 },
          }}
        >
          {props.description1}
        </Typography>
      </Box>
    </div>
  );
}
export default Aboutusvision;
