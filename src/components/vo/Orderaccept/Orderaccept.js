import * as React from "react";

import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Orderdetails from "../Orderaccept/Orderdetails";

export default function Adddriver() {
  return (
    <Grid container direction={"row"}>
      <Grid item lg={8} md={8} sm={12} xs={12}></Grid>
      <Grid
        item
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{
          textAlign: { xs: "center", sm: "center", lg: "left", md: "left" },
        }}
      ></Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            mt: 5,
          }}
        >
          <Typography variant="h6" sx={{ p: 3, textAlign: "center" }}>
            Order Details
          </Typography>{" "}
          <Orderdetails />
        </Box>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
    </Grid>
  );
}
