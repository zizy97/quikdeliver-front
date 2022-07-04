import * as React from "react";
import { Grid, Typography, Button } from "@mui/material"; //==============Components==================================
function Aboutsignupcontent() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          bgcolor: "#FFA301",
        }}
      >
        <Grid
          item
          lg={8}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontSize: 18,
              color: "White",
              padding: { xs: 2 },
              textAlign: "center",
            }}
          >
            Sign up for quik today and maximize your delivery and revenue.Get a
            advanced chance with joining Quik. !
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              width: 130,
              height: 30,
              backgroundColor: "white",
              color: "black",
              fontSize: 16,
              mb: { xs: 2, sm: 2, md: 0 },
            }}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Aboutsignupcontent;
