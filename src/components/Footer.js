import React from "react"; //=================react===================
import {
  List,
  ListItemText,
  Grid,
  Typography,
  Box,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material"; //==============Components==================================
import logo from "../../src/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";
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
        <Grid item lg={3} xs={12} sm={12} md={6}>
          <Box
            sx={{
              ml: { lg: 6, md: 4, sm: 5, xs: 3 },
              mt: { lg: 8, md: 5, sm: 6, xs: 5 },
            }}
          >
            <Box
              component="img"
              alt="Your logo."
              src={logo}
              sx={{
                width: { lg: "30%", xs: "20%" },
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: 18, md: 16 },
                  mt: 3,
                  fontWeight: "bold",
                  textAlign: "justify",
                  mr: { xs: 2 },
                }}
              >
                join with quik to get more valuable services. Easy way for
                delivery booking. Cheapest and quickest service in door-to-door
                delivery in Srilanka.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <FacebookIcon sx={{ fontSize: "47px" }} />
              <InstagramIcon sx={{ fontSize: "47px" }} />
            </Box>
          </Box>
        </Grid>

        <Grid item lg={3} xs={12} sm={12} md={6}>
          <List
            sx={{
              mt: { lg: 8, md: 5, sm: 3, xs: 3 },
              ml: { lg: 6, md: 4, sm: 5, xs: 3 },
            }}
          >
            <ListItem>
              <ListItemText
                primary="Navigation Links"
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Services" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Sign Up" primaryTypographyProps={{}} />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} sm={12} md={6}>
          <List
            sx={{
              mt: { lg: 8, md: 5, sm: 3, xs: 3 },
              ml: { lg: 6, md: 4, sm: 5, xs: 3 },
            }}
          >
            <ListItem>
              <ListItemText
                primary="Links"
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Create Delivery Booking" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Join as a Deliverer" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Join as a vehicle Owner" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <ListItemText primary="Privacy & policy" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} sm={12} md={6}>
          <List
            sx={{
              mt: { lg: 8, md: 5, sm: 3, xs: 3 },
              ml: { lg: 6, md: 4, sm: 5, xs: 3 },
            }}
          >
            <ListItem>
              <ListItemText
                primary="Contact Us"
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>
            <ListItem>
              <AddIcCallIcon />
              {"  "}
              <Typography
                sx={{
                  fontSize: 18,
                  ml: 1,
                }}
              >
                0768541123
              </Typography>
            </ListItem>
            <ListItem>
              <MailIcon />
              <Typography
                sx={{
                  fontSize: 18,
                  ml: 1,
                }}
              >
                quikdelivery@gmail.com
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <FacebookIcon />
                <Typography
                  sx={{
                    fontSize: 18,
                    ml: 1,
                  }}
                >
                  FaceBook
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                disableRipple
                disableGutters
                size="small"
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                  height: 20,
                }}
              >
                <InstagramIcon />
                <Typography
                  sx={{
                    fontSize: 18,
                    ml: 1,
                  }}
                >
                  Instagram
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Divider />
      </Grid>
    </div>
  );
}
export default Footer;
