import * as React from "react";
import { Grid, Typography, Box } from "@mui/material"; //==============Components==================================
function Aboutus_description() {
  return (
    <div>
      <Grid container direction={"row"}>
        <Grid item lg={12} xs={12} sm={12} md={12}>
          <Box
            sx={{
              marginTop: { lg: 8, xs: 5, md: 6, sm: 4 },
              marginLeft: { lg: 14, md: 6, sm: 3, xs: 1 },
              marginRight: { lg: 14, md: 6, sm: 3, xs: 1 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 37, md: 25, sm: 30, xs: 25 },
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              ABOUT QUIK
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { lg: 19, md: 17, sm: 18, xs: 17 },
                fontWeight: { lg: 500 },
                textAlign: "justify",
                pl: { lg: 10, xs: 2 },
                pr: { lg: 10, xs: 2 },
                pb: { lg: 10, xs: 4 },
                pt: { lg: 4, xs: 2 },
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.We will bring it to your door
              step quickly and safely from Quik. Now we have made it easy to
              order from different shops at a time. Just order what you need
              through us.We will bring it to your door step quickly and safely
              from Quik. Now we have made it easy to order from different shops
              at a time. Just order what you need through us.We will bring it to
              your door step quickly and safely from Quik. Now we have made it
              easy to order from different shops at a time. Just order what you
              need through us.We will bring it to your door step quickly and
              safely from Quik. Now we have made it easy to order from different
              shops at a time. Just order what you need through us.We will bring
              it to your door step quickly and safely from Quik. Now we have
              made it easy to order from different shops at a time. Just order
              what you need through us.We will bring it to your door step
              quickly and safely from Quik.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Aboutus_description;
