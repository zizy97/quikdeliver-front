import React, { useState, useEffect } from "react"; //react
import { useNavigate } from "react-router-dom"; //react-router-dom
//--MUI--
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
import TitleText from "./TitleText";
import MapInfo from "./MapInfo";
import VehicleType from "./Vehicle";
import Indicator from "../Indicator";
import CircularIndicator from "../CircularIndicator";
import { useGlobalContext } from "../userContext";
// =========Import Component ending==========
//==data import====
import { VehicleData } from "./VehicleData";
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

  // const vehicleOne = {
  //   checked: selectedValue === "a",
  //   onChange: handleInputChange,
  //   value: "a",
  //   name: "color-radio-button-demo",
  //   inputProps: { "aria-label": "a" },
  //   size: "large",
  // };
  // const vehicleTwo = {
  //   checked: selectedValue === "b",
  //   onChange: handleInputChange,
  //   value: "b",
  //   name: "color-radio-button-demo",
  //   inputProps: { "aria-label": "b" },
  //   size: "large",
  // };
  // const vehicleThree = {
  //   checked: selectedValue === "c",
  //   onChange: handleInputChange,
  //   value: "c",
  //   name: "color-radio-button-demo",
  //   inputProps: { "aria-label": "c" },
  //   size: "large",
  // };
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

        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <TitleText
            marginBtm={-11.5}
            text1={"Now you can  "}
            text2={"choose a vehicle "}
            text3={"to deliver your pacege"}
            Icon={
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
            }
          />

          <Box
            sx={{
              flexGrow: 1,
              px: 3,
              py: 2,
              mb: 10,
              pt: 15,
              display: "flex",
              background: "#D6EEF8",
              textAlign: "center",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
              borderRadius: 1,
            }}
            container
            justifyContent="center"
          >
            <Grid
              container
              spacing={{ xs: 0, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {VehicleData.map((vehicle) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={6} key={vehicle.id}>
                    <VehicleType
                      id={vehicle.id}
                      onChange={handleInputChange}
                      value={vehicle.value}
                      name={vehicle.name}
                      checked={selectedValue === vehicle.value}
                      Vehicle={vehicle.Vehicle}
                      capasity={vehicle.capasity}
                      inputProps={vehicle.inputProps}
                      costPerKm={vehicle.costPerKm}
                      setSelectedValue={setSelectedValue}
                      setDeliveryCost={setDeliveryCost}
                    />
                  </Grid>
                );
              })}
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{}}>
                <Box>
                  {/* =========submit button========= */}

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
        </motion.div>
        {/* ===========VEHICLE SELECTION PART ENDING========== */}

        {/* ===========ROUTE SLECTION PART========== */}

        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <TitleText
            marginBtm={-11.5}
            text1={"And you have freedom  "}
            text3={"to "}
            text4={"select route"}
            text5={" for your delivery"}
            Icon={
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
            }
          />

          <Box
            sx={{
              flexGrow: 1,
              px: 3,
              py: 2,
              mb: 10,
              pt: 15,
              display: "flex",
              background: "#D6EEF8",
              textAlign: "center",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
              borderRadius: 1,
            }}
            container
            justifyContent="center"
          >
            <Grid
              container
              spacing={{ xs: 0, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={3}
                sx={{ height: { md: "100%" } }}
              >
                {/*===Map=== */}
                <MapInfo />
                {/*===Map=== */}
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={9}>
                <Box
                  sx={{
                    //this need to be fixed
                    borderRadius: 1,
                    backgroundColor: "#FFFFFF",
                    mr: 2,
                    m: 0,
                    height: 500,
                    width: "100%",
                    alignItems: "center",
                  }}
                  elivation={0}
                >
                  <Typography varient="body2" sx={{ pt: 10 }}>
                    Map goes here
                  </Typography>
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    m: 2,
                    color: "white",
                    width: "40%",
                    borderRadius: 10,
                  }}
                >
                  select custpm path
                </Button>
              </Grid>

              {/* form ending*/}
            </Grid>
          </Box>
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
            <TitleText
              marginBtm={-9}
              text1={"You Can"}
              text2={" Select One method to pay"}
              text3={"Your Delivery Fees"}
            />
          </Box>
        </Grid>
        <Box
          sx={{
            flexGrow: 1,
            px: 3,
            py: 2,
            mb: 3,
            pt: 12,
            display: "flex",
            background: "#D6EEF8",
            textAlign: "center",
            boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
            borderRadius: 1,
          }}
          onSubmit={handleSubmit}
          container
          justifyContent="center"
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
