import React from "react"; //=================react===================
import {
  List,
  //ListItemIcon,
  ListItemText,
  Grid,
  //Typography,
  Box,
  //Button,
  ListItem,
  //Stack,
  //Badge,
} from "@mui/material"; //==============Components==================================
import logo from "../images/logo.png";
function Footer() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background: "#7594D3",
        }}
      >
        <Grid
          item
          lg={3}
          xs={12}
          sm={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <List sx={{ marginTop: { lg: 8 } }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ lg: { fontSize: "25px" } }}
                primary="Links"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          sm={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <List sx={{ marginTop: { lg: 8 } }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ lg: { fontSize: "25px" } }}
                primary="Links"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          sm={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <List sx={{ marginTop: { lg: 8 } }}>
            <ListItem>
              <ListItemText primary="Links" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Join As Deliverer" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Join As vehicle Owner" />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          sm={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            alt="Your logo."
            src={logo}
            sx={{
              width: { lg: "40%" },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
