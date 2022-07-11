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
            fontSize: { lg: 27, md: 23, sm: 27, xs: 23 },
            mt: 2,
            textAlign: "center",
            color: "white",
            fontWeight: 500,
            paddingTop: 0,
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
            fontSize: 15,
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
