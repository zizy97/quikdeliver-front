import React, { useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import CardMedia from "@mui/material/CardMedia";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
// MUI

//==3rd party Library==
import { motion } from "framer-motion";

//========Vehicles Component===================
function VehicleType({
  checked,
  onChange,
  value,
  name,
  inputProps,
  size,
  Vehicle,
  vehicleName,
  costPerKm,
  description,
  capasity,
  setSelectedValue,
  setDeliveryCost,
}) {
  // const controlProps = (item) => ({
  //   checked: selectedValue === item,
  //   onChange: handleChange,
  //   value: item,
  //   name: "size-radio-button-demo",
  //   inputProps: { "aria-label": item },
  // });

  // ----Range Slider---
  const marks = [
    {
      value: 0,
      label: "0 LKR",
    },

    {
      value: 10000,
      label: "10000 LKR",
    },
  ];

  function valueLabelFormat(value) {
    return `${value} LKR`;
  }

  const minDistance = 5;
  const initialValues = {
    minValue: "0",
    maxValue: "10000",
  };

  const [valueRanger, setValueRanger] = useState([0, 10000]);

  const [values, setValues] = useState(initialValues);

  const HandlePriceChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const minVal = values.minValue;
    const maxVal = values.maxValue;

    console.log(minVal);
    console.log("hello");
    console.log(maxVal);

    setValueRanger([minVal, maxVal]);
  };

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValueRanger([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValueRanger([clamped - minDistance, clamped]);
      }
    } else {
      setValueRanger(newValue);
    }

    values.minValue = valueRanger[0];
    values.maxValue = valueRanger[1];
  };
  // ----Range Slider---

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.01,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Grid
              item
              sx={{
                m: 2,
                mb: 0,
                justifyContent: "left",
              }}
            >
              <Paper
                elevation={13}
                sx={{
                  bgcolor: "yellow",
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  mb: -9, //overlapping
                  boxShadow: 3,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 20,
                    }}
                    image="/static/images/vehicles/veh-8.jpg"
                    alt="Live from space album cover"
                  />
                </motion.div>
              </Paper>
            </Grid>
          </Box>
          <Typography
            component={"div"}
            variant="h6"
            sx={{
              p: 0.5,
              borderRadius: 4,
              background: "#D6EEF8",
            }}
          >
            {Vehicle}
            <Radio
              checked={checked}
              onChange={onChange}
              value={value}
              name={name}
              inputProps={inputProps}

              // size="large"
              // {...controlProps("c")}
              // sx={{
              //   "& .MuiSvgIcon-root": {
              //     fontSize: 28,
              //   },
              // }}
            />
          </Typography>
        </Box>
        {/* =========================================== */}

        <Card
          sx={{
            bgcolor: "#FFFFFF",
            height: "100%",
            width: "100%",
            mt: 0,
            display: "flex",
            borderRadius: 1,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid container sx={{ justifyContent: "center" }}>
              <CardContent
                sx={{
                  py: 0,

                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"div"}
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  You can select a vehicle within following price range
                </Typography>
                {/* ===Range slider=== */}
                <Slider
                  min={0}
                  step={1}
                  max={10000}
                  getAriaLabel={() => "Minimum distance shift"}
                  value={valueRanger}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valueLabelFormat}
                  disableSwap
                  marks={marks}
                  // sx={{ mx: "10%" }}
                />
                {/* ===Range slider=== */}
                <Grid
                  container
                  spacing={0.5}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid item lg={5} md={5} sm={12} xs={12}>
                    <TextField
                      style={{
                        backgroundColor: "#EFF0F3",
                      }}
                      name="minValue"
                      value={values.minValue}
                      onChange={HandlePriceChange}
                      sx={{ my: 1, width: "100%", borderRadius: 1 }}
                      size="small"
                      id="filled-password-input"
                      label="Min"
                      type="number"
                      autoComplete="current-password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">LKR</InputAdornment>
                        ),
                      }}
                      helperText="Per KM"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    md={2}
                    sm={12}
                    xs={12}
                    sx={{ mt: -3, textAlign: "center" }}
                  >
                    <p sx={{ width: 5 }}> to</p>
                  </Grid>
                  <Grid item lg={5} md={5} sm={12} xs={12}>
                    <TextField
                      style={{
                        backgroundColor: "#EFF0F3",
                      }}
                      name="maxValue"
                      value={values.maxValue}
                      onChange={HandlePriceChange}
                      sx={{ my: 1, width: "100%", borderRadius: 1 }}
                      size="small"
                      id="filled-password-input"
                      label="Max"
                      type="number"
                      autoComplete="current-password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">LKR</InputAdornment>
                        ),
                      }}
                      helperText="Per KM"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  textAlign="center"
                  sx={{ textAlign: "center", justifyContent: "center" }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    textAlign="center"
                  >
                    Max Weight :{capasity}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
          {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
        </Card>
      </motion.div>
    </>
  );
}
//========Vehicles Component ending===================
export default VehicleType;
