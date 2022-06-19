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
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
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
// =========Import Component ending==========
//==data import====
import { vehicle1 } from "./VehicleOneData";
import { vehicle2 } from "./VehicleTwoData";
import { vehicle3 } from "./VehicleThreeData";
//==data import end -----

function ViewTwo() {
  //handle radio button
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //handle radio button end

  //=========Prograss Bar==========
  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: { lg: 800, md: 650, sm: 450, xs: 300 },
            mr: 1,
            mt: 1,
            ml: 2,
            position: "fixed",
          }}
        >
          <LinearProgress
            variant="determinate"
            {...props}
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#12C919",
              },
              transform: "rotate(-90deg)",
              width: 400,
              position: "fixed",
              top: { lg: 390, md: 390, sm: 390, xs: 390 },
              left: { lg: -3, md: -170, sm: -170, xs: -170 },
              borderRadius: 5,
              height: 13,
            }}
          />
        </Box>
        {/* <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
              color: "blue",
              
            }}
          >
            You have completed 30% delivery process...!
          </Typography>
        </Box> */}
        <Box
          sx={{
            minWidth: 35,
            mt: 1,
            ml: 2,
            position: "fixed",
            top: 160,
            left: { lg: 167, md: 3, sm: 3, xs: 3 },
          }}
        >
          <Typography variant="body2" color="white">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      //   setProgress((prevProgress) =>
      //     prevProgress >= 100 ? 10 : prevProgress + 10
      //   );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //=========Prograss Bar end==========

  function MapInfo() {
    return (
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D3E2FF",
          justifyContent: "center",
          borderColor: "#FFD481",
          elavation: 0,
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
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/vtmsmyks.json"
          trigger="loop-on-hover"
          style={{ width: "255px", height: "255px" }}
          colors="outline:#121331,primary:#3a3347,secondary:#e8b730,tertiary:#4bb3fd,quaternary:#f9c9c0"
        />
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

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========

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
              <Card
                elevation={0}
                sx={{
                  minWidth: { lg: "5px" },
                  maxHeight: {
                    lg: "900px",
                  },
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "#303135",
                  mt: 2,
                  borderRadius: 1,
                  position: "fixed",
                  width: 100,
                  top: 144,
                  left: { lg: 115, md: -43, sm: -43, xs: -43 },
                  height: 450,
                  transform: "rotate(deg)",
                }}
              >
                <CardContent>
                  <LinearProgressWithLabel
                    value={progress}
                    component="div"
                    sx={{
                      px: 10,
                    }}
                  />
                </CardContent>
              </Card>
              <Grid item lg={12}></Grid>
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
                    variant="outlined"
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
                      bgcolor: "#D3E2FF",
                      mt: 2,
                      mb: -9,
                      borderRadius: 20,
                      borderColor: "blue",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        component="div"
                        sx={{
                          px: 10,
                          pt: 1,
                        }}
                      >
                        Now you can choose a vehicle to deliver your pacege
                      </Typography>
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
                          marginBottom: "-10px",
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            </Grid>

            {/* =====label end===== */}

            <Card
              variant="outlined"
              sx={{
                flexGrow: 1,
                mx: 4,
                mb: 4,
                pt: 10,
                display: "flex",
                background: "white",
                textAlign: "center",
                borderRadius: 1,
                borderColor: "#3878FE",
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
                    textAlign: "center",
                    my: 2,
                    mr: 4,
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      {/* ========vehicle 01========= */}

                      <VehicleType {...vehicleOne} {...vehicle1} />
                      {/* ========vehicle 01 end========= */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      {/* ========vehicle 02========= */}
                      <VehicleType {...vehicleTwo} {...vehicle2} />
                      {/* ========vehicle 02 end========= */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
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
                {/* form ending*/}
              </Grid>
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
                  variant="outlined"
                  sx={{
                    minWidth: { lg: "275px" },
                    maxHeight: {
                      xs: "225px",
                      sm: "225px",
                      md: "223px",
                      lg: "246px",
                    },
                    textAlign: "center",
                    alignItems: "center",
                    bgcolor: "#D3E2FF",
                    mt: 2,
                    mb:-9,
                    borderRadius: 20,
                    borderColor:"blue"
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 1,
                      }}
                    >
                      And you have freedom to select route for your delivery
                    </Typography>
                    {/* <RouteIcon
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
                        marginBottom: "-10px",
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>
        </Grow>
        <Card
          variant="outlined"
          sx={{
            flexGrow: 1,
            mx: 4,
            pt: 10,
            display: "flex",
            background: "white",
            textAlign: "center",
            borderRadius: 1,
            borderColor: "#3878FE",
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
              <Card
                elevation={0}
                sx={{
                  minWidth: { lg: "275px" },
                  maxHeight: {
                    xs: "225px",
                    sm: "225px",
                    md: "223px",
                    lg: "246px",
                  },
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "#D3E2FF",
                  mt: 2,
                  borderRadius: 20,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    component="div"
                    sx={{
                      px: 10,
                      pt: 1,
                    }}
                  >
                    You can select one method to pay your delivery fee
                  </Typography>
                  <FormControl
                    sx={{
                      mt: -0.5,
                      pl: 3,
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
                        label="cash on delivery"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="pay online"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Grid>
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
            <Link
              to="/customer/v3"
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
                  borderRadius: 10,
                  py: 2,
                  my: 1,
                }}
              >
                Conform
              </Button>
            </Link>
          </Box>
          {/* =========submit button end========= */}
        </Grid>
        {/* ===========submit button=========== */}
        {/* ===========back button=========== */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* ========Routing========== */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              to="/customer/v1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 10,
                  borderColor: "black",
                  my: 1,
                  mb: 6,
                  backgroundColor: "",
                  color: "black",
                }}
              >
                Back
              </Button>
            </Link>
          </Box>
          {/* =========back button end========= */}
        </Grid>
        {/* =======Delivery Cost=========== */}
        <Grid>
          <Box>
            <Grid item xs={12}>
              <Card
                elevation={0}
                sx={{
                  position: "fixed",
                  width: 180,
                  top: 73,
                  left: { lg: 160, md: -20, sm: -20, xs: -20 },
                  height: 67,
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "#FFDF70",
                  borderRadius: 10,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    component="div"
                    sx={{
                      mt: -2,
                    }}
                  >
                    Delivery Cost : {deliveryCost}LKR
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Grid>
        {/* =======Delivery Cost ending=========== */}
      </Container>
    </>
  );
}

export default ViewTwo;
