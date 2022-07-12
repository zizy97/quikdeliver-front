import * as React from "react";
import { Grid, Box } from "@mui/material";
export default function Adddriver() {
  return (
    <Grid container direction={"row"}>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            mt: 5,
          }}
        >
          gkgkgkg
        </Box>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
    </Grid>
  );
}
