import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import about from "../../images/about.png";
import Bookingserviceform from "../services/Bookingserviceform";
export default function Bookingservice() {
  return (
    <Grid container direction={"row"}>
      <div
        style={{
          background: `url(${about})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: 300,
          width: "100%",
        }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography
            component="h1"
            sx={{
              fontSize: { lg: 37, md: 25, sm: 30, xs: 25 },
              fontWeight: 700,
              m: { lg: 15, md: 15, sm: 10, xs: 5 },
              color: "white",
            }}
          >
            GET A FREE QUOTE
          </Typography>
        </Grid>
      </div>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Box
          sx={{
            backgroundColor: "white",
            p: 5,
            mt: 5,
            mb: 5,
          }}
        >
          <Bookingserviceform />
        </Box>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
    </Grid>
  );
}
