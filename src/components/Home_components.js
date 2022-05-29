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
} from "@mui/material"; //==============Components==================================
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import deliverer from "../images/deliverer.png"; //========image====================
import driver from "../images/driver.png"; //========image========================
import deliverstep from "../images/deliverstep.png"; //========image==============
import vehicleowner from "../images/vehicleowner.png";

//==============Customer Section Starting============================================
//==============Customer Section Starting============================================

function Delivererbooking() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          background:
            "linear-gradient(180deg, #0074B7 0%, rgba(0, 59, 115, 0) 100%)",
          height: { lg: 620, xs: 820, md: 500, sm: 800 },
        }}
      >
        <Grid item lg={7} xs={12} sm={12} md={7}>
          <Box
            sx={{
              marginTop: { lg: 20, xs: 4, md: 15, sm: 6 },
              marginLeft: { lg: 14, xs: 2, md: 5, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 0, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { lg: 40, xs: 28, md: 30, sm: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              <span style={{ color: "#003B73" }}> Delivery </span>Booking
              <br />
              In A <span style={{ color: "#003B73" }}>Easy Way</span>
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: { xs: " #32303a" },
                borderRadius: 3,
                marginTop: { lg: 4, xs: 6, md: 3, sm: 6 },
                width: { lg: 200, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 45, md: 35 },
                "&:hover": { backgroundColor: "#32303a" },
              }}
            >
              Book Now
            </Button>
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
              /**marginTop: { xs: 0, md: 2, lg: 0, sm: 0 },*/
              marginBottom: { xs: 10, lg: 0, md: 0, sm: 3 },
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
          background: "white",
          height: { lg: 500, xs: 850, md: 420, sm: 850 },
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
          order={{ xs: 2, sm: 2 }}
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
        <Grid item lg={7} xs={12} sm={12} md={7} order={{ xs: 1, sm: 1 }}>
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
                fontWeight: "bold",
                fontSize: { lg: 40, xs: 28, md: 30, sm: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              <span style={{ color: "#003B73" }}> Three Steps </span>Away To
              <br />
              Place <span style={{ color: "#003B73" }}>A Request</span>
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
                  <AddLocationAltIcon
                    sx={{
                      color: "#003B73",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Tell the Pick up and Drop location" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FileUploadRoundedIcon
                    sx={{
                      color: "#003B73",
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
                  <CheckRoundedIcon
                    sx={{
                      color: "#003B73",
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
          background: "#0074B7",
          height: { lg: 480, xs: 760, md: 460 },
        }}
      >
        <Grid item lg={7} xs={12} sm={12} md={6}>
          <Box
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 6 },
              marginLeft: { lg: 14, xs: 2, md: 10, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 0, sm: 2 },
            }}
          >
            <Typography
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { lg: 42, xs: 28, md: 30, sm: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              Join
              <span style={{ color: "white" }}>
                {" "}
                As A Deliverer <br /> To Earn
              </span>{" "}
              Money
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: { xs: "#32303a" },
                borderRadius: 3,
                marginTop: { lg: 4, xs: 6, md: 3, sm: 6 },
                width: { lg: 200, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 45, md: 35 },
                "&:hover": { backgroundColor: "#32303a" },
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
          background: "#BFD7ED",
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
          order={{ xs: 2, sm: 2 }}
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
        <Grid item lg={7} xs={12} sm={12} md={6} order={{ xs: 1, sm: 1 }}>
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
                fontWeight: "bold",
                fontSize: { lg: 42, xs: 28, md: 30, sm: 25 },
                textAlign: {
                  lg: "left",
                  xs: "center",
                  md: "left",
                  sm: "center",
                },
              }}
            >
              <span style={{ color: "#003B73" }}> Register </span>With Your
              <br />
              Vehicle <span style={{ color: "#003B73" }}>To Do Delivery</span>
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: { xs: " #32303a" },
                borderRadius: 3,
                marginTop: { lg: 4, xs: 6, md: 3, sm: 6 },
                width: { lg: 200, xs: "100%", md: 180, sm: "100%" },
                height: { lg: 45, md: 35 },
                "&:hover": { backgroundColor: "#32303a" },
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
