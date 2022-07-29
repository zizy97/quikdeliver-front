import React, { useState, useEffect } from "react"; //react
//====MUI====
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";

//====MUI====
import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../components/account/AccountProfile";
import { AccountProfileDetails } from "../components/account/AccountProfileDetails";
import { SettingsPassword } from "../components/settings/SettingsPassword";

function Account() {
  //=====Transitions handeling=====
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  //=====Transitions handeling ending=====
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          background: "#BCD4DE",
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container sx={{ pt: 3 }} spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Fade
              in={checked}
              style={{
                transitionDelay: checked ? "1000ms" : "0ms",
              }}
              {...(checked ? { timeout: 700 } : {})}
            >
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails />
              </Grid>
            </Fade>
            {/* <Grid item lg={8} md={6} xs={12}>
            <Box sx={{ pt: 3 }}>
              <SettingsPassword />
            </Box>
          </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Account;
