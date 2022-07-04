import React, { useState, useEffect } from "react"; //react
import { Link } from "react-router-dom"; //react-router-dom
//--MUI--
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

//--MUI--
// =========Icons==========
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

// =========Icons end==========
// =========Import Component==========
import VehicleType from "./Vehicle";
import Indicator from "../Indicator";
import CircularIndicator from "../CircularIndicator";
import { useGlobalContext } from "../userContext";
// =========Import Component ending==========
//==data import====
import { vehicle1 } from "./VehicleOneData";
import { vehicle2 } from "./VehicleTwoData";
import { vehicle3 } from "./VehicleThreeData";
//==data import end -----
//==3rd party Library==
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ViewTwo() {
  //===Indicator===
  const { indicator, setIndicator } = useGlobalContext();
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  //===Indicator===

  //handle radio button
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //handle radio button end

  //=========Prograss Bar==========

  //=========Prograss Bar end==========

  function MapInfo() {
    return (
      <Card
        elavation={0}
        sx={{
          bgcolor: "#D3E2FF",
          justifyContent: "center",
          mx: 2,
          mt: 0,
          height: 500,
        }}
      >
        <CardContent
          sx={{
            py: 0,
            pt: 6,
          }}
        >
          <Typography component={"div"} variant="h6">
            Information about route
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
            Approximate Time : <b>2 hours</b>
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.secondary">
            Information about route
          </Typography>
          <Typography component={"div"} variant="body2">
            Information about route
          </Typography>
        </CardContent>

        <CardActions
          component={"div"}
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              m: 0,
              color: "white",
              width: 210,
              borderRadius: 10,
            }}
          >
            Conform path
          </Button>
        </CardActions>

        {/* <Box
          component="img"
          alt="Your logo."
          src={logo1}
          sx={{
            marginLeft: { lg: 1, md: 1 },
            display: { xs: "none", sm: "none", lg: "block", md: "block" },
            width: { lg: 80, md: 70 },
          }}
        /> */}
      </Card>
    );
  }

  // =============Transition handling===========
  const [checked, setChecked] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========
  //=====prograss bar transition=======
  const { ref, inView } = useInView({ threshold: 0.8 });
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      });
      animation1.start({
        opacity: 0,
        scale: 0.4,
      });
    }
    if (!inView) {
      animation.start({
        x: -500,
        y: 600,
        opacity: 0,
        scale: 0.4,
        rotate: 90,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      });
      animation1.start({
        opacity: 1,
        scale: 1,
      });
    }
    console.log("use effect hook : ", inView);
  }, [inView]);
  //=====prograss bar transition=======
  //==3D effect===
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // const handleMouseMove = (e) => {
  //   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  //   let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

  //   console.log("hello");
  // };

  //==3D effect ending ===

  //============Radio button Handling============
  const [selectedValue, setSelectedValue] = useState("a");
  const [deliveryCost, setDeliveryCost] = useState(vehicle1.costPerKm);

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "a") setDeliveryCost(vehicle1.costPerKm);
    if (event.target.value === "b") setDeliveryCost(vehicle2.costPerKm);
    if (event.target.value === "c") setDeliveryCost(vehicle3.costPerKm);
    if (event.target.value === "d") setDeliveryCost("Pending");
  };

  const vehicleOne = {
    checked: selectedValue === "a",
    onChange: handleInputChange,
    value: "a",
    name: "color-radio-button-demo",
    inputProps: { "aria-label": "a" },
    size: "large",
  };
  const vehicleTwo = {
    checked: selectedValue === "b",
    onChange: handleInputChange,
    value: "b",
    name: "color-radio-button-demo",
    inputProps: { "aria-label": "b" },
    size: "large",
  };
  const vehicleThree = {
    checked: selectedValue === "c",
    onChange: handleInputChange,
    value: "c",
    name: "color-radio-button-demo",
    inputProps: { "aria-label": "c" },
    size: "large",
  };
  const systemVehicle = {
    checked: selectedValue === "d",
    onChange: handleInputChange,
    value: "d",
    name: "color-radio-button-demo",
    inputProps: { "aria-label": "d" },
    size: "large",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  //============Radio button ending============

  return (
    <>
      <Container
        sx={{
          bgcolor: "transparent",
          pt: 1,
          paddingTop: 8,
        }}
      >
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  m: 2,
                }}
              >
                <Box ref={ref} sx={{ m: 2 }}></Box>
                {/* Indicator */}
                <motion.div animate={animation}>
                  <Indicator indicator={indicator} />
                </motion.div>
                <motion.div animate={animation1}>
                  <CircularIndicator indicator={indicator} />
                </motion.div>

                {/* Indicator ending */}
              </Box>
            </Grid>
          </Box>
        </Grid>
        {/* ===========VEHICLE SELECTION PART========== */}
        {/* =====label===== */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        >
          <div>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12}>
                  <Card
                    varient="container"
                    ref={containerRef}
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                    }}
                  >
                    <Box ref={containerRef} varient="container">
                      <Slide
                        direction="up"
                        in={checked}
                        container={containerRef.current}
                        // style={{
                        //   transitionDelay: checked ? "100ms" : "0ms",
                        // }}
                        {...(checked ? { timeout: 1500 } : {})}
                      >
                        <Typography
                          color="text.primary"
                          component="div"
                          sx={{
                            px: 10,
                            pt: 0,
                            fontSize: 35,
                            fontWeight: 190,
                          }}
                        >
                          Now you can <b>choose a vehicle</b>
                        </Typography>
                      </Slide>{" "}
                    </Box>
                  </Card>
                  <Card
                    varient="container"
                    ref={containerRef}
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                      textAlign: "center",
                      mb: -11.5,
                      p: 2,
                      mt: 0,
                      pt: 0,
                    }}
                  >
                    <Box ref={containerRef}>
                      <Slide
                        direction="down"
                        in={checked}
                        container={containerRef.current}
                        style={{
                          transitionDelay: checked ? "200ms" : "0ms",
                        }}
                        {...(checked ? { timeout: 1500 } : {})}
                      >
                        <Typography
                          color="text.primary"
                          component="div"
                          sx={{
                            px: 10,
                            pt: 0,
                            fontSize: 35,
                            fontWeight: 190,
                          }}
                        >
                          to deliver your pacege
                        </Typography>
                      </Slide>
                    </Box>

                    {/* <DeliveryDiningIcon
                      fontSize="large"
                      sx={{ color: "#1964FF", mb: -2 }}
                    /> */}
                    <lord-icon
                      src="https://cdn.lordicon.com/uetqnvvg.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#3080e8"
                      state="hover"
                      style={{
                        width: "45px",
                        height: "45px",
                        marginBottom: "-25px",
                      }}
                    />
                  </Card>
                </Grid>
              </Box>
            </Grid>

            {/* =====label end===== */}

            <Card
              variant="outlined"
              sx={{
                flexGrow: 1,
                mx: { xs: 0.5, sm: 2, md: 3, lg: 4 },
                mb: 10,
                pt: 15,
                display: "flex",
                background: "white",
                textAlign: "center",
                // borderRadius: 1,
                // borderColor: "#3878FE",
              }}
              container
              direction={"row"}
              justifyContent="center"
            >
              <Box
                container
                variant="outlined"
                direction={"row"}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  my: 2,
                  px: 3,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Grid
                  container
                  rowSpacing={5}
                  columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    {/* ========vehicle 01========= */}

                    <VehicleType {...vehicleOne} {...vehicle1} />
                    {/* ========vehicle 01 end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    {/* ========vehicle 02========= */}
                    <VehicleType {...vehicleTwo} {...vehicle2} />
                    {/* ========vehicle 02 end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    {/* =========vehicle 03========= */}
                    <VehicleType {...vehicleThree} {...vehicle3} />
                    {/* =========vehicle 03 end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    {/* =========vehicle 03========= */}
                    <VehicleType {...vehicleThree} {...vehicle3} />
                    {/* =========vehicle 03 end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} sx={{}}>
                    <Box>
                      {/* =========submit button========= */}
                      {/* <Paper
                        size="small"
                        variant="contained"
                        sx={{
                          m: 0,
                          color: "white",
                          width: 300,
                          borderRadius: 10,
                          ml: 7,
                        }}
                      >
                        Let it select by quik app
                      </Paper> */}
                      <FormControlLabel
                        value="start"
                        control={
                          <Radio
                            checked={systemVehicle.checked}
                            onChange={systemVehicle.onChange}
                            value={systemVehicle.value}
                            name={systemVehicle.name}
                            inputProps={systemVehicle.inputProps}
                            size={systemVehicle.size}
                            // size="small"
                            // {...controlProps("c")}
                            // sx={{
                            //   "& .MuiSvgIcon-root": {
                            //     fontSize: 28,
                            //   },
                            // }}
                          />
                        }
                        label="Let it select by quik app"
                        labelPlacement="start"
                      />

                      {/* =========submit button end========= */}
                      {/* =====tooltip====== */}
                      <Tooltip
                        title="You may expect your delivery sooner than by selecting a vehicle on your own"
                        placement="bottom-end"
                      >
                        <IconButton
                          sx={{ color: "" }}
                          aria-label={`info about `}
                        >
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                      {/* =====tooltip end====== */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </div>
        </Grow>
        {/* ===========VEHICLE SELECTION PART ENDING========== */}

        {/* ===========ROUTE SLECTION PART========== */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        >
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12}>
                <Card
                  varient="container"
                  ref={containerRef}
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                  }}
                >
                  <Box
                    ref={containerRef}
                    varient="container"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Slide
                      direction="up"
                      in={checked}
                      container={containerRef.current}
                      // style={{
                      //   transitionDelay: checked ? "100ms" : "0ms",
                      // }}
                      {...(checked ? { timeout: 1500 } : {})}
                    >
                      <Typography
                        color="text.primary"
                        component="div"
                        sx={{
                          px: 10,
                          pt: 0,
                          fontSize: 35,
                          fontWeight: 190,
                        }}
                      >
                        And you have freedom
                      </Typography>
                    </Slide>{" "}
                  </Box>
                </Card>
                <Card
                  varient="container"
                  ref={containerRef}
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                    textAlign: "center",
                    mb: -12,
                    p: 2,
                    mt: 0,
                    pt: 0,
                    pb: 3,
                  }}
                >
                  <Box
                    ref={containerRef}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Slide
                      direction="down"
                      in={checked}
                      container={containerRef.current}
                      style={{
                        transitionDelay: checked ? "200ms" : "0ms",
                      }}
                      {...(checked ? { timeout: 1500 } : {})}
                    >
                      <Typography
                        color="text.primary"
                        component="div"
                        sx={{
                          px: 10,
                          pt: 0,
                          fontSize: 35,
                          fontWeight: 190,
                        }}
                      >
                        to <b>select route</b> for your delivery
                      </Typography>
                    </Slide>
                  </Box>

                  {/* <DeliveryDiningIcon
                      fontSize="large"
                      sx={{ color: "#1964FF", mb: -2 }}
                    /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/zzcjjxew.json"
                    trigger="loop"
                    colors="primary:#121331,secondary:#3080e8"
                    state="hover-jump-spin"
                    style={{
                      width: "45px",
                      height: "45px",
                      marginBottom: "-25px",
                    }}
                  />
                </Card>
              </Grid>
            </Box>
          </Grid>
        </Grow>
        <Card
          variant="outlined"
          sx={{
            flexGrow: 1,
            mx: { xs: 0.5, sm: 2, md: 3, lg: 4 },
            pt: 8,
            mb: 10,
            display: "flex",
            background: "white",
            textAlign: "center",
            // borderRadius: 1,
            // borderColor: "#3878FE",
          }}
          container
          direction={"row"}
          justifyContent="center"
        >
          <Grid container spacing={0}>
            {/* form */}
            <Box
              container
              variant="outlined"
              direction={"row"}
              sx={{
                display: "flex",
                background: "transparent",
                textAlign: "center",
                my: 2,
              }}
              justifyContent="center"
              width="100%"
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  {/* ========vehicle 01========= */}
                  <MapInfo />
                  {/* ========vehicle 01 end========= */}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Box
                    sx={{
                      //this need to be fixed
                      borderRadius: 1,
                      backgroundColor: "#D6DAE3",
                      mr: 2,
                      m: 2,
                      height: 500,
                      alignItems: "center",
                    }}
                    elivation={0}
                  >
                    <Typography varient="body2" sx={{ pt: 10 }}>
                      Map goes here
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {/* =========vehicle system vehicle========= */}

                  {/* =========vehicle system vehicle end========= */}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {/* =========Special Notes========= */}

                  {/* =========Special Notes end========= */}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{}}>
                  <Box>
                    {/* =========submit button========= */}
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        m: 0,
                        color: "white",
                        width: 300,
                        borderRadius: 10,
                      }}
                    >
                      select custpm path
                    </Button>
                    {/* =========submit button end========= */}
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* form ending*/}
          </Grid>
        </Card>
        {/* ===========safe delivery option========== */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "right",

              mr: 8,
            }}
          >
            {/* =====tooltip====== */}
            <Tooltip
              title="We guarantee abount your parcel"
              placement="bottom-end"
            >
              <IconButton
                sx={{ color: "", mt: -0.24 }}
                // aria-label={`info about `}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {/* =====tooltip end====== */}
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Enable safe delivery"
                  labelstyle={{ color: "white" }}
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>
        {/* ===========safe delivery option ending========= */}

        <Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  minWidth: { lg: "275px" },
                  maxHeight: {
                    xs: "225px",
                    sm: "225px",
                    md: "223px",
                    lg: "240px",
                  },
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "transparent",
                  mt: 0,
                  pt: 2,
                  pb: 0,
                  mb: 0,
                  borderRadius: 20,

                  // borderColor: "#5E8FD4",
                }}
              >
                <Card
                  varient="container"
                  ref={containerRef}
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                  }}
                >
                  <Slide
                    direction="up"
                    in={checked}
                    container={containerRef.current}
                    // style={{
                    //   transitionDelay: checked ? "100ms" : "0ms",
                    // }}
                    {...(checked ? { timeout: 1500 } : {})}
                  >
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: 35,
                        fontWeight: 190,
                      }}
                    >
                      You Can <b>Select One method to pay</b>
                    </Typography>
                  </Slide>
                </Card>
              </Box>

              <Box
                sx={{
                  minWidth: { lg: "275px" },
                  maxHeight: {
                    xs: "225px",
                    sm: "225px",
                    md: "223px",
                    lg: "240px",
                  },
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "transparent",
                  mt: 0,
                  p: 2,
                  pt: 0,
                  mb: -12,
                  borderRadius: 20,

                  // borderColor: "#5E8FD4",
                }}
                ref={containerRef}
              >
                <Card
                  varient="container"
                  ref={containerRef}
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                  }}
                >
                  <Slide
                    direction="down"
                    in={checked}
                    container={containerRef.current}
                    style={{
                      transitionDelay: checked ? "200ms" : "0ms",
                    }}
                    {...(checked ? { timeout: 1500 } : {})}
                  >
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: 35,
                        fontWeight: 190,
                      }}
                    >
                      Your Delivery Fees
                    </Typography>
                  </Slide>
                </Card>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Box
          sx={{
            flexGrow: 1,
            m: 4,
            mx: { xs: 0.5, sm: 2, md: 3, lg: 4 },
            pt: 6, //overlapping
            pb: 3,
            display: "flex",
            background: "white",
            justifyContent: "center",
            borderRadius: 1,
            borderColor: "#3878FE",
            alignContent: "center",
            textAlign: "center",
            bgcolor: "white",
          }}
          onSubmit={handleSubmit}
          container
          variant="outlined"
          component="form"
        >
          <FormControl
            sx={{
              justifyContent: "center",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Cash On Delivery"
                InputLabelProps={{
                  style: {
                    color: "#1964FF",
                    fontWeight: 800,
                  },
                }}
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Online Payment"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {/* ===========PAYMENT SELECTION PART ENDING */}

        {/* ===========submit button=========== */}
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ justifyContent: "center", alignItems: "center", mb: 4 }}
        >
          <Grid item>
            <Box
              sx={{
                justifyContent: "center",
              }}
            >
              <Link
                to="/customer/page1"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 10,
                    borderColor: "black",
                    m: 3,
                    backgroundColor: "",
                    color: "black",
                  }}
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                justifyContent: "center",
              }}
            >
              <Link
                to="/customer/page3"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  size="large"
                  sx={{
                    minWidth: {
                      lg: "450px",
                      md: "400px",
                      sm: "450px",
                      xs: "400px",
                    },
                    m: 3,
                    borderRadius: 10,
                    py: 2,
                    my: 1,
                  }}
                >
                  Conform
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Grid item xs={12}>
                <Card
                  elevation={0}
                  sx={{
                    m: 3,
                    width: 320,
                    top: 10,
                    left: { lg: 160, md: -20, sm: -20, xs: -20 },
                    height: 67,
                    textAlign: "center",
                    alignItems: "center",
                    bgcolor: "#FFDF70",
                    borderRadius: 1,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      component="div"
                      sx={{
                        mt: -2.75,
                      }}
                    >
                      Approximate Delivery Cost : {deliveryCost}LKR
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>

          {/* ========Routing========== */}

          {/* =========submit button end========= */}
        </Grid>
        {/* ===========submit button=========== */}
        {/* ===========back button=========== */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* ========Routing========== */}

          {/* =========back button end========= */}
        </Grid>
        {/* =======Delivery Cost=========== */}
        <Grid></Grid>
        {/* =======Delivery Cost ending=========== */}
      </Container>
    </>
  );
}

export default ViewTwo;
