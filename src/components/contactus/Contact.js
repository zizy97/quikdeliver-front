import * as React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Background from "../../images/contactus.jpg";
//====import components
import { useGlobalContext } from "../customer/userContext";
//====Import 3rd party Library
import { motion } from "framer-motion";

export default function Contact() {
  const { containerVarients } = useGlobalContext();
  return (
    <Grid container direction={"row"}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              background: `url(${Background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: { lg: 800 },
            }}
          ></Box>
        </motion.div>
      </Grid>

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
            variant="body2"
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
            variant="body2"
            sx={{
              fontSize: { lg: 18, md: 16 },
              textAlign: "center",
              ml: { xs: 0, md: 2, lg: 35, sm: 0 },
            }}
          >
            +768412456
          </Typography>
          <Typography
            variant="body2"
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
            variant="h5"
            sx={{
              ml: 3,
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
            ml: 3,
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
                borderRadius: 30,
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
