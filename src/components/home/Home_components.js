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
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
//==============Components==================================
import CircleIcon from "@mui/icons-material/Circle";
//import deliverer from "../../images/deliverer.png"; //========image====================
import driver from "../../images/driver.png"; //========image========================
import deliverstep from "../../images/deliverstep.png"; //========image==============
import vehicleowner from "../../images/vehicleowner.png";
//=======3rd  party library========
import { Parallax } from "react-parallax";
//========Backgroubd Images===========
import ImgOne from "../../images/cheerful-courier.png";
import ImgTwo from "../../images/man-delivering-box.jpg";
import ImgThree from "../../images/footer.jpg";
//=========Icons=============
import logo from "../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";

//==3rd party Library==
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

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
  const containerRef = React.useRef(null);
  const navigate = useNavigate();
  // useEffect(() => {

  //   return () => {
  //     second
  //   }
  // }, [])

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
          <Grid item lg={6} xs={12} sm={12} md={7}>
            <Box
              container
              ref={containerRef}
              sx={{
                marginTop: { lg: 22, md: 25, sm: 18, xs: 14 },
                marginLeft: { lg: 14, md: 6, sm: 3, xs: 2 },
                marginRight: { lg: 0, md: 0, sm: 3, xs: 2 },
              }}
            >
              <Slide
                direction="up"
                in={checked}
                container={containerRef.current}
                style={{
                  transformOrigin: "0 0 0",
                  // transitionDelay: checked ? "500ms" : "0ms",
                }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Typography
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 190,
                    fontSize: { lg: 62, md: 44, sm: 40, xs: 40 },
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
              </Slide>
              <Slide
                direction="up"
                in={checked}
                container={containerRef.current}
                style={{
                  transformOrigin: "0 0 0",
                  transitionDelay: checked ? "500ms" : "0ms",
                }}
                {...(checked ? { timeout: 1000 } : {})}
              >
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
              </Slide>
            </Box>

            <Box container ref={containerRef} sx={{ textAlign: "center" }}>
                <Slide
                  direction="up"
                  in={checked}
                  container={containerRef.current}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "700ms" : "0ms",
                  }}
                  {...(checked ? { timeout: 1200 } : {})}
                >
                  <Button
                    onClick={()=>{
                      navigate("/new-booking")
                    }}
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                      width: { lg: 250, md: 180, sm: 250, xs: 200 },
                      height: { lg: 55, md: 40, sm: 40, xs: 40 },
                      backgroundColor: "#1964FF",
                      color: "#FCF370",
                      fontSize: 18,
                    }}
                  >
                    Book Now
                  </Button>
                </Slide>

              <Stack
                spacing={20}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 8 }}
              >
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "500ms" : "0ms",
                  }}
                >
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent="+24"
                    primary="hello "
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#FEA500",
                        height: 30,
                        width: 30,
                        borderRadius: 6,
                      },
                    }}
                  >
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/nlzvfogq.json"
                      trigger="loop-on-hover"
                      colors="primary:#121331,secondary:#3080e8"
                      stroke="70"
                      scale="40"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </Badge>
                </Zoom>
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "1000ms" : "0ms",
                  }}
                >
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent="+1"
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#FEA500",
                        height: 30,
                        width: 30,
                        borderRadius: 6,
                      },
                    }}
                  >
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/jqnthkou.json"
                      trigger="loop-on-hover"
                      colors="primary:#121331,secondary:#3080e8"
                      stroke="60"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </Badge>
                </Zoom>
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "1500ms" : "0ms",
                  }}
                >
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent="+51"
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#FEA500",
                        height: 30,
                        width: 30,
                        borderRadius: 6,
                      },
                    }}
                  >
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/eszyyflr.json"
                      trigger="loop-on-hover"
                      colors="primary:#121331,secondary:#3080e8"
                      stroke="65"
                      state="hover-jump"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </Badge>
                </Zoom>
              </Stack>
              <Stack
                direction="row"
                spacing={16}
                alignItems="center"
                justifyContent="center"
                sx={{
                  mt: 2,
                  mb: 3,
                }}
              >
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "500ms" : "0ms",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Parcels
                    <br /> Delivered
                  </Typography>
                </Zoom>
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "1000ms" : "0ms",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Cities and <br />
                    More on the Way
                  </Typography>
                </Zoom>
                <Zoom
                  in={checked}
                  style={{
                    transformOrigin: "0 0 0",
                    transitionDelay: checked ? "1500ms" : "0ms",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Deliverers
                  </Typography>
                </Zoom>
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
  const { ref, inView } = useInView({
    triggerOnce: "true",
  });
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 2]);

  // =============Transition handling end===========

  return (
    <div ref={ref}>
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
          <motion.div
            style={{
              scale,
              opacity,
            }}
          >
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Box
                component="img"
                alt="Your logo."
                src={deliverstep}
                sx={{
                  width: { lg: 350, md: 300, sm: 300, xs: 300 },
                  marginTop: { lg: 10, md: 5, sm: 6, xs: 3 },
                  marginBottom: { lg: 10, md: 5, sm: 5, xs: 3 },
                }}
              />
            </Slide>
            {/* <motion.div
              style={{
                scaleY: scrollYProgress,
              }}
              sx={{
                width: 50,
                height: 50,
                color: "black",
                transformOrigin: "50% 100%",
              }}
            /> */}
          </motion.div>
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
            ref={containerRef}
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 4 },
              marginLeft: { lg: 0, xs: 2, md: 0, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 1, sm: 2 },
            }}
          >
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Typography
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 190,
                  fontSize: { lg: 45, md: 35, sm: 40, xs: 35 },
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
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{
                transformOrigin: "0 0 0",
                transitionDelay: inView ? "500ms" : "0ms",
              }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#4A4C56",
                  fontSize: { lg: 18, md: 16 },
                  textAlign: "justify",
                  marginRight: { xs: 0, md: 2, lg: 10, sm: 0 },
                }}
              >
                Now we have made it easy to order from different shops at a
                time. Just order what you need through us.
              </Typography>
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{
                transformOrigin: "0 0 0",
                transitionDelay: inView ? "1000ms" : "0ms",
              }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <List>
                <ListItem
                  sx={{
                    pl: 1,
                  }}
                >
                  <ListItemIcon>
                    {/* <CircleIcon
                    stroke="#FFA301"
                    strokeWidth={4}
                    sx={{
                      color: "#E9F0F8",
                    }}
                  /> */}
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/hjeefwhm.json"
                      trigger="loop-on-hover"
                      colors="primary:#e88c30"
                      state="hover"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Tell the Pick up and Drop location"
                    sx={{
                      pl: 3,
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    pl: 4,
                  }}
                >
                  <ListItemIcon>
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/hjeefwhm.json"
                      trigger="loop-on-hover"
                      colors="primary:#e88c30"
                      state="hover"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ lg: { fontSize: "20px" } }}
                    primary="Upload the receipt"
                    sx={{
                      pl: 3,
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    pl: 7,
                  }}
                >
                  <ListItemIcon>
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/hjeefwhm.json"
                      trigger="loop-on-hover"
                      colors="primary:#e88c30"
                      state="hover"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                  </ListItemIcon>
                  <ListItemText
                    primary="Confirm the request with payment method"
                    sx={{
                      pl: 3,
                    }}
                  />
                </ListItem>
              </List>
            </Slide>
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
  // =============Transition handling===========
  const { ref, inView } = useInView({
    triggerOnce: "true",
    viewpoint: 0.2,
  });
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.3, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);
  // =============Transition handling end===========

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
      <div ref={ref}>
        <Grid
          container
          direction={"row"}
          sx={{
            background: "transparent",
          }}
        >
          <Grid item lg={7} xs={12} sm={12} md={6}>
            <Box
              ref={containerRef}
              sx={{
                marginTop: { lg: 8, xs: 6, md: 5, sm: 6 },
                marginLeft: { lg: 14, md: 6, sm: 3, xs: 2 },
                marginRight: { lg: 0, md: 0, sm: 3, xs: 2 },
              }}
            >
              <Slide
                direction="up"
                in={inView}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  component="h1"
                  gutterBottom
                  sx={{
                    color: "#F8F7E9",
                    fontWeight: 190,
                    fontSize: { lg: 45, md: 35, sm: 40, xs: 35 },
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
              </Slide>
              <Slide
                direction="up"
                in={inView}
                container={containerRef.current}
                style={{
                  transformOrigin: "0 0 0",
                  transitionDelay: inView ? "500ms" : "0ms",
                }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#F8F7E9",
                    fontSize: { lg: 17, md: 14, sm: 14 },
                    fontWeight: { lg: 300 },
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
              </Slide>
            </Box>

            <Box ref={containerRef} textAlign="center">
              <Slide
                direction="up"
                in={inView}
                container={containerRef.current}
                style={{
                  transformOrigin: "0 0 0",
                  transitionDelay: inView ? "1000ms" : "0ms",
                }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                    width: { lg: 250, md: 180, sm: 250, xs: 200 },
                    height: { lg: 55, md: 40, sm: 40, xs: 40 },
                    backgroundColor: "white",
                    color: "black",
                    fontSize: 18,
                  }}
                >
                  Join Now
                </Button>
              </Slide>
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
            <motion.div
              style={{
                scale,
                opacity,
              }}
            >
              <Slide
                direction="up"
                in={inView}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Box
                  component="img"
                  alt="Your logo."
                  src={driver}
                  sx={{
                    width: { lg: 300, md: 250, sm: 250, xs: 230 },
                    marginTop: { lg: 10, md: 5, sm: 6, xs: 5 },
                    marginBottom: { lg: 10, md: 10, sm: 5, xs: 3 },
                  }}
                />
              </Slide>
            </motion.div>
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
  // =============Transition handling===========
  const { ref, inView } = useInView({
    triggerOnce: "true",
    viewpoint: 0.4,
  });
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);
  // =============Transition handling end===========
  return (
    <div ref={ref}>
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
          {" "}
          <motion.div
            style={{
              scale,
              opacity,
            }}
          >
            <Box
              component="img"
              alt="Your logo."
              src={vehicleowner}
              sx={{
                width: { lg: 200, md: 150, sm: 150, xs: 100 },
                marginTop: { lg: 10, md: 5, sm: 6, xs: 5 },
                marginBottom: { lg: 10, md: 10, sm: 5, xs: 3 },
              }}
            />
          </motion.div>
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
            ref={containerRef}
            sx={{
              marginTop: { lg: 8, xs: 6, md: 5, sm: 4 },
              marginLeft: { lg: 0, xs: 2, md: 0, sm: 2 },
              marginRight: { lg: 0, xs: 2, md: 1, sm: 2 },
            }}
          >
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Typography
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 190,
                  fontSize: { lg: 45, md: 35, sm: 40, xs: 35 },
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
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{
                transformOrigin: "0 0 0",
                transitionDelay: inView ? "500ms" : "0ms",
              }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { lg: 18, md: 16, sm: 16 },
                  fontWeight: { lg: 300 },
                  textAlign: "justify",
                  marginRight: { lg: 10, md: 5 },
                }}
              >
                Now we have made it easy to order from different shops at a
                time. Just order what you need through us.We will bring it to
                your door step quickly and safely from Quik. step quickly and
                safely from Quik. Now we have made it easy to order from
                different shops at a time. Just order what you need through
                us.We will bring it to your door step quickly and safely from
                Quik. step quickly and safely from Quik.
              </Typography>
            </Slide>
          </Box>
          <Box ref={containerRef} textAlign="center">
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{
                transformOrigin: "0 0 0",
                transitionDelay: inView ? "1000ms" : "0ms",
              }}
              {...(inView ? { timeout: 1500 } : {})}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  marginTop: { lg: 6, xs: 6, md: 3, sm: 6 },
                  marginBottom: { lg: 6, xs: 6, md: 3, sm: 6 },
                  width: { lg: 250, md: 180, sm: 250, xs: 200 },
                  height: { lg: 55, md: 40, sm: 40, xs: 40 },
                  backgroundColor: "#1964FF",
                  color: "#FCF370",
                  fontSize: 18,
                }}
              >
                Join Now
              </Button>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
//======================vehicleowner section Ending============================
//======================vehicleownersection Ending============================*/
//======================Footer ============================*/
//======================Footer ============================*/
function Footer() {
  // =============Transition handling===========
  const { ref, inView } = useInView({
    triggerOnce: "true",
    viewpoint: 0.4,
  });
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);
  // =============Transition handling end===========

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
      <div ref={ref}>
        <div ref={containerRef}>
          <Grid
            container
            direction={"row"}
            sx={{
              background: "transparent",
            }}
          >
            {" "}
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
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
                        fontWeight: "normal",
                        textAlign: "justify",
                        mr: { xs: 2 },
                        color: "white",
                      }}
                    >
                      join with quik to get more valuable services. Easy way for
                      delivery booking. Cheapest and quickest service in
                      door-to-door delivery in Srilanka.
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <FacebookIcon sx={{ fontSize: "47px" }} />
                    <InstagramIcon sx={{ fontSize: "47px" }} />
                  </Box>
                </Box>
              </Grid>
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
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
                        fontSize: "20px",
                        fontWeight: "light",
                        color: "white",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Home"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "light",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="About"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "light",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Services"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "light",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Sign In"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "light",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Sign Up"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "light",
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
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
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "white",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Join as a Deliverer"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Join as a vehicle Owner"
                      primaryTypographyProps={{
                        fontSize: "17px",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Slide>
            <Slide
              direction="up"
              in={inView}
              container={containerRef.current}
              style={{ transformOrigin: "0 0 0" }}
              {...(inView ? { timeout: 1500 } : {})}
            >
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
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <AddIcCallIcon
                      sx={{
                        color: "white",
                      }}
                    />
                    {"  "}
                    <Typography
                      sx={{
                        fontWeight: "light",
                        fontSize: 17,
                        ml: 1,
                        color: "white",
                      }}
                    >
                      0768541123
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <MailIcon
                      sx={{
                        color: "white",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "light",
                        fontSize: 17,
                        ml: 1,
                        color: "white",
                      }}
                    >
                      quikdelivery@gmail.com
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FacebookIcon
                      sx={{
                        color: "white",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "light",
                        fontSize: 17,
                        ml: 1,
                        color: "white",
                      }}
                    >
                      FaceBook
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <InstagramIcon
                      sx={{
                        color: "white",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "light",
                        fontSize: 17,
                        ml: 1,
                        color: "white",
                      }}
                    >
                      Instagram
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Slide>
          </Grid>
        </div>
      </div>
    </Parallax>
  );
}
//======================Footer Ending============================*/
//======================Footer Ending============================*/

export { Delivererbooking, Bookingsteps, Driver, Vehicleowner, Footer };
