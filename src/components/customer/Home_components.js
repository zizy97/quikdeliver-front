import React, { useState, useEffect } from "react"; //=================react===================
import { Link } from "react-router-dom"; //=================react===================
import {
  List,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography,
  Box,
  Button,
  ListItem,
  Stack,
  Badge,
} from "@mui/material";
import Grow from "@mui/material/Grow";
//==============Components==================================
import CircleIcon from "@mui/icons-material/Circle";
//import deliverer from "../images/deliverer.png"; //========image====================
import driver from "../images/driver.png"; //========image========================
import deliverstep from "../images/deliverstep.png"; //========image==============
import vehicleowner from "../images/vehicleowner.png";
//=======3rd  party library========
import { Parallax } from "react-parallax";
import ImgOne from "../img/cheerful-courier.png";
import ImgTwo from "../img/man-delivering-box.jpg";
import ImgThree from "../img/footer.jpg";

import logo from "../../images/logo.png";

//=======3rd  party library========
//==============Customer Section Starting============================================
//==============Customer Section Starting============================================
const shapeStyles = { bgcolor: "#FFD481", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function Delivererbooking() {
  // =============Transition handling===========
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========
  return (
    <Parallax
      strength={370}
      bgImage={ImgOne}
      bgImageAlt="ImgOne"
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />
      )}
    >
      <div>
        <Grid container direction={"row"}>
          <Grid item lg={6} xs={12} sm={12} md={6}>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 500 } : {})}
            >
              <Box
                sx={{
                  marginTop: { lg: 24, md: 22, sm: 12, xs: 12 },
                  marginLeft: { lg: 14, md: 6, sm: 3, xs: 2 },
                  marginRight: { lg: 0, md: 0, sm: 3, xs: 2 },
                }}
              >
                <Typography
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { lg: 52, md: 34, sm: 30, xs: 30 },
                    textAlign: {
                      lg: "left",
                      xs: "center",
                      md: "left",
                      sm: "center",
                    },
                  }}
                >
                  <b>Delivery</b> Booking
                  <br />
                  In A <b>Easy Way</b>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { lg: 17, md: 14, sm: 14 },
                    textAlign: "justify",
                  }}
                >
                  Now we have made it easy to order from different shops at a
                  time. Just order what you need through us.We will bring it to
                  your door step quickly and safely from Quik. Now we have made
                  it easy to order from different shops at a time. Just order
                  what you need through us.We will bring it to your door step
                  quickly and safely from Quik.
                </Typography>
              </Box>
            </Grow>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Box sx={{ textAlign: "center" }}>
                <Link
                  to="./customer/v1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 0,
                      marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                      width: { lg: 250, md: 180, sm: 250, xs: 200 },
                      height: { lg: 55, md: 40, sm: 40, xs: 40 },
                      backgroundColor: "#1964FF",
                      color: "#FCF370",
                    }}
                  >
                    Book Now
                  </Button>
                </Link>
                <Stack
                  spacing={12}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 8 }}
                >
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2000 } : {})}
                  >
                    <Badge
                      color="secondary"
                      overlap="circular"
                      badgeContent="+24"
                      primary="hello "
                    >
                      {circle}
                    </Badge>
                  </Grow>
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2200 } : {})}
                  >
                    <Badge
                      color="secondary"
                      overlap="circular"
                      badgeContent="+1"
                    >
                      {circle}
                    </Badge>
                  </Grow>
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2400 } : {})}
                  >
                    <Badge
                      color="secondary"
                      overlap="circular"
                      badgeContent="+51"
                    >
                      {circle}
                    </Badge>
                  </Grow>
                </Stack>
                <Stack
                  direction="row"
                  spacing={8}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 2, mb: 3 }}
                >
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2000 } : {})}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Parcels
                      <br /> Delivered
                    </Typography>
                  </Grow>
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2200 } : {})}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Cities and <br />
                      More on the Way
                    </Typography>
                  </Grow>
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2400 } : {})}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Deliverers
                    </Typography>
                  </Grow>
                </Stack>
              </Box>
            </Grow>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/*    <Box
            component="img"
            alt="Your logo."
            src={deliverer}
            sx={{
              width: { lg: 370, md: 290, sm: 320, xs: 260 },
              marginTop: { lg: 15, md: 15, sm: 8, xs: 5 },
              marginBottom: { lg: 0, md: 0, sm: 5, xs: 5 },
            }}
          />*/}
          </Grid>
        </Grid>
      </div>
    </Parallax>
  );
}
//======================customer section Ending============================
//======================customer section Ending============================

//==============Bookingsteps Section Starting============================================
//==============Bookingsteps Section Starting============================================

function Bookingsteps() {
  // =============Transition handling===========
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background: "#F8F7E9",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          order={{ xs: 2, sm: 2, lg: 1, md: 1 }}
        >
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 2000 } : {})}
          >
            <Box
              component="img"
              alt="Your logo."
              src={deliverstep}
              sx={{
                width: { lg: 350, md: 300, sm: 300, xs: 300 },
                marginTop: { lg: 8, md: 5, sm: 6, xs: 3 },
                marginBottom: { lg: 10, md: 5, sm: 5, xs: 3 },
              }}
            />
          </Grow>
        </Grid>
        <Grid
          item
          lg={7}
          xs={12}
          sm={12}
          md={7}
          order={{ xs: 1, sm: 1, lg: 2, md: 2 }}
        >
          <Box
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 4 },
              marginLeft: { lg: 0, xs: 2, md: 0, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 1, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 35, md: 25, sm: 30, xs: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              <b> Three Steps </b>Away To
              <br />
              Place A Request
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { lg: 17, md: 14 },
                textAlign: "justify",
                marginRight: { xs: 0, md: 2, lg: 10, sm: 0 },
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon
                    stroke="#FFA301"
                    strokeWidth={4}
                    sx={{
                      color: "#E9F0F8",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Tell the Pick up and Drop location" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon
                    stroke="#FFA301"
                    strokeWidth={4}
                    sx={{
                      color: "#E9F0F8",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ lg: { fontSize: "20px" } }}
                  primary="Upload the receipt"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon
                    stroke="#FFA301"
                    strokeWidth={4}
                    sx={{
                      color: "#E9F0F8",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Confirm the request with payment method" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

//======================Bookingsteps section Ending============================
//======================Bookingsteps section Ending============================

//==============Driver Section Starting============================================
//==============Driver Section Starting============================================

function Driver() {
  return (
    <Parallax
      strength={400}
      bgImage={ImgTwo}
      bgImageAlt="ImgTwo"
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />
      )}
    >
      <div>
        <Grid
          container
          direction={"row"}
          sx={{
            background: "Transparent",
          }}
        >
          <Grid item lg={7} xs={12} sm={12} md={6}>
            <Box
              sx={{
                marginTop: { lg: 8, xs: 6, md: 5, sm: 6 },
                marginLeft: { lg: 14, md: 6, sm: 3, xs: 2 },
                marginRight: { lg: 0, md: 0, sm: 3, xs: 2 },
              }}
            >
              <Typography
                component="h1"
                gutterBottom
                sx={{
                  color: "#F8F7E9",

                  fontSize: { lg: 35, md: 25, sm: 30, xs: 25 },
                  textAlign: {
                    lg: "left",
                    xs: "center",
                    md: "left",
                    sm: "center",
                  },
                }}
              >
                Join As A Deliverer <br /> To<b> Earn Money</b>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#F8F7E9",

                  fontSize: { lg: 17, md: 14, sm: 14 },
                  fontWeight: { lg: 200 },
                  textAlign: "justify",
                }}
              >
                Now we have made it easy to order from different shops at a
                time. Just order what you need through us.We will bring it to
                your door step quickly and safely from Quik. Now we have made it
                easy to order from different shops at a time. Just order what
                you need through us.We will bring it to your door step quickly
                and safely from Quik.
              </Typography>
            </Box>
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                  width: { lg: 250, md: 180, sm: 250, xs: 200 },
                  height: { lg: 55, md: 40, sm: 40, xs: 40 },
                  backgroundColor: "white",
                  color: "blue",
                }}
              >
                Join Now
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="img"
              alt="Your logo."
              src={driver}
              sx={{
                width: { lg: 350, md: 300, sm: 300, xs: 270 },
                marginTop: { lg: 8, md: 5, sm: 6, xs: 5 },
                marginBottom: { lg: 13, md: 9, sm: 5, xs: 3 },
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Parallax>
  );
}
//======================Driver section Ending============================
//======================Driver section Ending============================

//==============Vehicleowner Section Starting============================================
//==============Vehicleowner Section Starting============================================

function Vehicleowner() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background: "#F8F7E9",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          order={{ xs: 2, sm: 2, lg: 1, md: 1 }}
        >
          <Box
            component="img"
            alt="Your logo."
            src={vehicleowner}
            sx={{
              width: { lg: 350, md: 300, sm: 300, xs: 270 },
              marginTop: { lg: 8, md: 5, sm: 6, xs: 5 },
              marginBottom: { lg: 15, md: 10, sm: 5, xs: 3 },
            }}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xs={12}
          sm={12}
          md={6}
          order={{ xs: 1, sm: 1, lg: 2, md: 2 }}
        >
          <Box
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 4 },
              marginLeft: { lg: 0, xs: 2, md: 0, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 1, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 35, md: 25, sm: 30, xs: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              <b>
                {" "}
                Register With Your
                <br />
                Vehicle To
              </b>{" "}
              Do Delivery
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { lg: 17, md: 15, sm: 15 },
                fontWeight: { lg: 300 },
                textAlign: "justify",
                marginRight: { lg: 10, md: 5 },
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.We will bring it to your door
              step quickly and safely from Quik. step quickly and safely from
              Quik. Now we have made it easy to order from different shops at a
              time. Just order what you need through us.We will bring it to your
              door step quickly and safely from Quik. step quickly and safely
              from Quik.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                borderRadius: 0,
                marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                width: { lg: 250, md: 180, sm: 250, xs: 200 },
                height: { lg: 55, md: 40, sm: 40, xs: 40 },
                backgroundColor: "#1964FF",
                color: "#FCF370",
              }}
            >
              Join Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
//======================vehicleowner section Ending============================
//======================vehicleownersection Ending============================*/

// ======================starting footer===============
function Footer() {
  return (
    <Parallax
      strength={380}
      bgImage={ImgThree}
      bgImageAlt="ImgOne"
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />
      )}
    >
      <div>
        <Grid
          container
          direction={"row"}
          sx={{
            background: "transparent",
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
                  primaryTypographyProps={{ lg: { fontSize: "24px" } }}
                  primary="Links"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Home"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About"
                  sx={{
                    color: "white",
                  }}
                />
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
                  primaryTypographyProps={{ lg: { fontSize: "24px" } }}
                  primary="Links"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Home"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About"
                  sx={{
                    color: "white",
                  }}
                />
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
                  primary="Links"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Join As Deliverer"
                  sx={{
                    color: "white",
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Join As vehicle Owner"
                  sx={{
                    color: "white",
                  }}
                />
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
    </Parallax>
  );
}
//=======================Ending footer================

export { Delivererbooking, Bookingsteps, Driver, Vehicleowner, Footer };
