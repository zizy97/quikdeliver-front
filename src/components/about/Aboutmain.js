import * as React from "react";
import { Grid } from "@mui/material"; //==============Components==================================
import about from "../../images/about.png";

function Aboutmain() {
  return (
    <div
      style={{
        background: `url(${about})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 516,
        width: "100%",
      }}
    >
      <Grid container direction={"row"}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Grid>
      </Grid>
    </div>
  );
}
export default Aboutmain;
