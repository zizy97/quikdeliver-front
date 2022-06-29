import * as React from "react";
import { Grid } from "@mui/material";
import vision from "../../images/vision.jpg";
import Aboutusvision from "../../components/about/Aboutus_vision";
function Visioncontainer() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        style={{
          background: `url(${vision})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Aboutusvision
            name1="VISION"
            description1="Now we have made it easy to order from different shops
            at a time. Just order what you need through us.We will bring it
            to your door step quickly and safely from Quik. Now we have made
            it easy to order from different shops at a time. Just order what
          "
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Aboutusvision
            name1="MISSION"
            description1="Now we have made it easy to order from different shops
            at a time. Just order what you need through us.We will bring it
            to your door step quickly and safely from Quik. Now we have made
            it easy to order from different shops at a time. Just order what."
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Visioncontainer;
