import * as React from "react";
import {Grid, Typography } from "@mui/material";
import Vlist from "../Adddriver/Vlist";
import Dlist from "../Addvehicle/Dlist";
export default function Assigning() {
  return (
    <Grid container direction={"row"}>
      <Grid item lg={6} md={12} sm={12} xs={12} >
          <Typography variant="h5"  color="primary.main" sx={{ pb:2}}>
            DRIVER LIST
          </Typography>
          <Typography  sx={{ pb:2}}>
            Select sutaible drivers from Driver List.
          </Typography>
          <Dlist />
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12} >
          <Typography variant="h5"  color="primary.main"  sx={{pb:2}}>
           VEHICLE LIST
          </Typography>
          <Typography  sx={{pb:2}}>
            Select sutaible vehicles from Vehicle List.
          </Typography>
          <Vlist />
      </Grid>
    </Grid>
  );
}
