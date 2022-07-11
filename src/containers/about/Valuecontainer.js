import * as React from "react";
import { Grid, Typography } from "@mui/material"; //==============Components==================================
import Valuecomponent from "../../components/about/Valuecomponent";
function Valuecontainer() {
  return (
    <div>
      <Grid container direction={"row"} sx={{ mb: 5 }}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            component="h1"
            gutterBottom
            color="text.secondary"
            sx={{
              fontSize: { lg: 30, md: 35, sm: 30, xs: 28 },
              textAlign: "center",
              fontWeight: 500,
              paddingTop: 5,
            }}
          >
            Our Values
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Valuecomponent
            name="Realiable"
            description="Only the most trustworthy drivers can meet Quik’s standards."
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Valuecomponent
            name="Vehicle verity"
            description="From a 2-wheeler to the widest range of 4 wheelers, we have something for all."
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Valuecomponent
            name="Fast"
            description="On Demand delivery when you need it."
          />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Valuecomponent
            name="Efficient"
            description="We make deliveries available anywhere, at any time of the day."
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Valuecontainer;
