import * as React from "react";
import { Grid, Typography, Box } from "@mui/material"; //==============Components==================================
function Aboutus_description() {
  return (
    <div>
      <Grid container direction={"row"}>
        <Grid item lg={12} xs={12} sm={12} md={12}>
          <Box
            sx={{
              marginTop: { lg: 5, xs: 5, md: 6, sm: 4 },
              mx: { lg: 6, md: 5, sm: 3, xs: 1 },
            }}
          >
            <Typography
              component="h5"
              gutterBottom
              sx={{
                fontSize: { lg: 37, md: 25, sm: 30, xs: 25 },
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              ABOUT QUIK
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { lg: 15, md: 15, sm: 15, xs: 15 },
                fontWeight: { lg: 500 },
                textAlign: "justify",
                px: { lg: 7, xs: 2 },
                pb: { lg: 7, xs: 4 },
                pt: { lg: 3, xs: 2 },
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
