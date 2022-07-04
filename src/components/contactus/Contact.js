import * as React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Background from "../../images/contactus.jpg";
export default function contact() {
  return (
    <Grid container direction={"row"}>
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { lg: 800 },
        }}
      ></Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{ bgcolor: "#ECF2FF", height: { lg: 800 } }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "blue",
              mt: { xs: 0, md: 2, lg: 20, sm: 2 },
              ml: { xs: 0, md: 2, lg: 20, sm: 0 },
            }}
          >
            Call Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { lg: 18, md: 16 },
              textAlign: "center",
              ml: { xs: 0, md: 2, lg: 35, sm: 0 },
            }}
          >
            +768412456
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "blue",
              mt: { xs: 0, md: 2, lg: 2, sm: 2 },
              ml: { xs: 0, md: 2, lg: 22, sm: 0 },
            }}
          >
            Email Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { lg: 18, md: 16 },
              textAlign: "center",
              ml: { xs: 0, md: 2, lg: 50, sm: 0 },
            }}
          >
            quikdelivery@gmail.com
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              textAlign: "center",
              mr: { xs: 0, md: 2, lg: 60, sm: 0 },
            }}
          >
            CONTACT US
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: { lg: "100ch", md: "50ch", sm: "60ch", xs: "45ch" },
            },
            ml: 10,
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Name"
              id="standard-size-small"
              variant="standard"
            />
            <br />
            <TextField
              label="Email"
              id="standard-size-small"
              variant="standard"
            />
            <br />
            <TextField
              label="Message"
              id="standard-size-small"
              variant="standard"
              multiline
            />

            <br />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: 10,
                height: 50,
                width: 150,
                backgroundColor: "#1964FF",
                color: "#FCF370",
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
