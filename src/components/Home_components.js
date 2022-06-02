import React from "react"; //=================react===================
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
} from "@mui/material"; //==============Components==================================
import CircleIcon from "@mui/icons-material/Circle";
import deliverer from "../images/deliverer.png"; //========image====================
import driver from "../images/driver.png"; //========image========================
import deliverstep from "../images/deliverstep.png"; //========image==============
import vehicleowner from "../images/vehicleowner.png";

//==============Customer Section Starting============================================
//==============Customer Section Starting============================================
const shapeStyles = { bgcolor: "#FFD481", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);
function Delivererbooking() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background: "#D4DCF7",
        }}
      >
        <Grid item lg={7} xs={12} sm={12} md={7}>
          <Box
            sx={{
              marginTop: { lg: 35, md: 22, sm: 18, xs: 8 },
              marginLeft: { lg: 16, md: 8, xs: 2, sm: 2 },
              marginRight: { lg: 0, md: 0, xs: 2, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 55, xs: 28, md: 35, sm: 25 },
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
                fontSize: { lg: 18 },
                textAlign: "justify",
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.We will bring it to your door
              step quickly and safely from Quik. Now we have made it easy to
              order from different shops at a time. Just order what you need
              through us.We will bring it to your door step quickly and safely
              from Quik.
            </Typography>
          </Box>
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 1,
                marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                width: { lg: 250, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 55, md: 35 },
                backgroundColor: "#1964FF",
              }}
            >
              Book Now
            </Button>
            <Stack
              spacing={15}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 8 }}
            >
              <Badge color="secondary" overlap="circular" badgeContent="+24">
                {circle}
              </Badge>
              <Badge color="secondary" overlap="circular" badgeContent="+1">
                {circle}
              </Badge>
              <Badge color="secondary" overlap="circular" badgeContent="+51">
                {circle}
              </Badge>
            </Stack>
          </Box>
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
          <Box
            component="img"
            alt="Your logo."
            src={deliverer}
            sx={{
              width: { xs: "80%", sm: "60%", md: "80%", lg: "65%" },
              marginTop: { xs: 0, md: 2, lg: 10, sm: 0 },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
//======================customer section Ending============================
//======================customer section Ending============================

//==============Bookingsteps Section Starting============================================
//==============Bookingsteps Section Starting============================================

function Bookingsteps() {
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
          <Box
            component="img"
            alt="Your logo."
            src={deliverstep}
            sx={{
              width: { xs: "80%", sm: "60%", md: "77%", lg: "65%" },
            }}
          />
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
              marginTop: { lg: 5, xs: 6, md: 5, sm: 4 },
              marginLeft: { lg: 0, xs: 2, md: 0, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 1, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 40, xs: 28, md: 30, sm: 25 },
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
                fontSize: { lg: 18 },
                textAlign: "justify",
                marginRight: { xs: 0, md: 2, lg: 15, sm: 0 },
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.We will bring it to your door
              step quickly and safely from Quik.
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
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background: "#7594D3",
          height: { lg: 480, xs: 760, md: 460 },
        }}
      >
        <Grid item lg={7} xs={12} sm={12} md={6}>
          <Box
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 6 },
              marginLeft: { lg: 16, xs: 2, md: 10, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 0, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 42, xs: 28, md: 30, sm: 25 },
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
                fontSize: { lg: 18 },
                fontWeight: { lg: 300 },
                textAlign: "justify",
              }}
            >
              Now we have made it easy to order from different shops at a time.
              Just order what you need through us.We will bring it to your door
              step quickly and safely from Quik. Now we have made it easy to
              order from different shops at a time. Just order what you need
              through us.We will bring it to your door step quickly and safely
              from Quik.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                borderRadius: 1,
                marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                width: { lg: 250, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 55, md: 35 },
                backgroundColor: "#1964FF",
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
              width: { xs: "70%", sm: "47%", md: "67%", lg: "60%" },
              marginTop: { xs: 3, md: 0, lg: 0, sm: 1 },
              marginBottom: { xs: 15, lg: 0, md: 0, sm: 3 },
            }}
          />
        </Grid>
      </Grid>
    </div>
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
          height: { lg: 500, xs: 850, md: 420 },
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
              width: { xs: "80%", sm: 400, md: "70%", lg: "64%" },
              marginTop: { xs: 3, md: 0, lg: 2, sm: 0 },
              marginBottom: { xs: 0, lg: 0, md: 0, sm: 3 },
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
              marginTop: { lg: 8, xs: 6, md: 5, sm: 6 },
              marginLeft: { lg: 5, xs: 2, md: 1, sm: 2 },
              marginRight: { lg: 5, xs: 2, md: 0, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontSize: { lg: 42, xs: 28, md: 30, sm: 25 },
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
                fontSize: { lg: 18 },
                fontWeight: { lg: 300 },
                textAlign: "justify",
                marginRight: { lg: 8, md: 5 },
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
                borderRadius: 1,
                marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                width: { lg: 250, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 55, md: 35 },
                backgroundColor: "#1964FF",
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

export { Delivererbooking, Bookingsteps, Driver, Vehicleowner };
