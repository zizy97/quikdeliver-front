import * as React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Servicecard() {
  return (
    <Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          component="div"
          variant="h5"
          sx={{ mt: 20, textAlign: "center", fontSize: { lg: 38 } }}
        >
          OUR SERVICES
        </Typography>
      </Grid>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <Box sx={{ display: "flex" }}></Box>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
    </Grid>
  );
}
