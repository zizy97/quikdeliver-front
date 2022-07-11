import React, { useState, useEffect } from "react"; //react
import { useNavigate } from "react-router-dom"; //react-router-dom
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
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      window.scrollTo(0, 0);
    }
    setfirst(false);
  }, [first]);

  const navigate = useNavigate();
  //===Indicator===
  const { indicator } = useGlobalContext();
  // const [value1, setvalue1] = useState(0);
  // const [value2, setvalue2] = useState(0);
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
          mx: 2,
          mt: 0,
          height: 500,
        }}
      >
        <CardContent
          sx={{
            py: 0,
            pt: 6,
            textAlign: "left",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ alignItems: "center" }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ mb: 1.5, py: 1 }}
              >
                Map Status :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                sx={{
                  bgcolor: "#C0C0C0",
                  borderRadius: 0.5,
                  textAlign: "center",
                  py: 1,
                }}
              >
                Deactivated
              </Typography>
            </Grid>
          </Grid>

          <Typography component={"div"} variant="h6" sx={{ mb: 1.5 }}>
            Vehicle Type : Bike
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
            Approximate Time : <b>2 hours</b>
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
            Confirm path
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

  //---framer-motion---
  const containerVarients = {
    hidden: {
      opacity: 0.5,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        dumping: 8,
      },
    },

    exit: {
      opacity: 0.5,
      x: "100vw",
      transition: {
        type: "easeInOut",
        delay: 4,
      },
    },
  };
  //---framer-motion---
  // =============Transition handling end===========
  //=====prograss bar transition=======
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
      animation1.start({
        opacity: 0,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      });
      animation1.start({
        opacity: 1,
      });
    }
    console.log("use effect hook : ", inView);
  }, [inView, animation, animation1]);
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
  // const [deliveryCost, setDeliveryCost] = useState(vehicle1.costPerKm);
  const [setDeliveryCost] = useState(vehicle1.costPerKm);

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
                {/* Reference point */}
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
        {/* <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        > */}
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
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
                  <Box ref={containerRef} varient="container">
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      Now you can <b>choose a vehicle</b>
                    </Typography>
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
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      to deliver your pacege
                    </Typography>
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

          {/* </Grow> */}

          <Card
            sx={{
              flexGrow: 1,
              mx: { xs: 0.5, sm: 2, md: 3, lg: 4 },
              mb: 10,
              pt: 15,
              display: "flex",
              background: "white",
              textAlign: "center",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
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
                      <IconButton sx={{ color: "" }} aria-label={`info about `}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                    {/* =====tooltip end====== */}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </motion.div>

        {/* ===========VEHICLE SELECTION PART ENDING========== */}

        {/* ===========ROUTE SLECTION PART========== */}
        {/* <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        > */}
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
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
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      And you have freedom
                    </Typography>
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
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      to <b>select route</b> for your delivery
                    </Typography>
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

          <Card
            sx={{
              flexGrow: 1,
              mx: { xs: 0.5, sm: 2, md: 3, lg: 4 },
              pt: 8,
              mb: 10,
              display: "flex",
              background: "white",
              textAlign: "center",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
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
                          width: { lg: 300, md: 300, sm: 250, xs: 220 },
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
        </motion.div>
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
                  <Typography
                    color="text.primary"
                    component="div"
                    sx={{
                      px: 10,
                      pt: 0,
                      fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                      fontWeight: 190,
                    }}
                  >
                    You Can <b>Select One method to pay</b>
                  </Typography>
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
                  <Typography
                    color="text.primary"
                    component="div"
                    sx={{
                      px: 10,
                      pt: 0,
                      fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                      fontWeight: 190,
                    }}
                  >
                    Your Delivery Fees
                  </Typography>
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
            boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* ========Routing========== */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              p: 4,
            }}
          >
            {/* <Link
              to="/customer/page3"
              style={{ textDecoration: "none", color: "white" }}
            > */}
            <Button
              onClick={() => {
                navigate("/customer/page3");
              }}
              variant="contained"
              disableElevation
              size="large"
              sx={{
                minWidth: {
                  lg: "450px",
                  md: "400px",
                  sm: "450px",
                  xs: "220px",
                },
                borderRadius: 10,
                py: 2,
                my: 1,
              }}
            >
              Confirm
            </Button>
            {/* </Link> */}
          </Box>
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