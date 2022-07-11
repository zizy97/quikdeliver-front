import React, { useState } from "react";

// MUI
import Box from "@mui/material/Box";
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
      label: "100000 LKR",
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

    // if (maxVal - minVal < minDistance) {
    //   if (activeThumb === 0) {
    //     const clamped = Math.min(minVal, 100 - minDistance);
    //     setValueRanger([clamped, clamped + minDistance]);
    //   } else {
    //     const clamped = Math.max(maxVal, minDistance);
    //     setValueRanger([clamped - minDistance, clamped]);
    //   }
    // } else {
    //   setValueRanger(values);
    // }
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

     values.minValue=valueRanger[0];
    values.maxValue = valueRanger[1];
   
  };
  // ----Range Slider---

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component={"div"}
          variant="h6"
          sx={{
            p: 0.5,
            borderRadius: 4,
            minWidth: 90,
            background: "white",
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
        variant="outlined"
        sx={{
          bgcolor: "#ECF2FF",
          // height: { xs: 270, sm: 200, md: 180, lg: 170 },
          height: "100%",
          // borderColor: "#FEA500",
          "&:hover": { bgcolor: "#D9D9D9" },
          elavation: 0,
          width: "90%",
          ml: "5%",
          mt: 0,
          display: "flex",
          borderRadius: 1,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid
            container
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{ justifyContent: "center" }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 100,
                height: 100,
                borderRadius: 20,
                m: 1,
              }}
              image="/static/images/vehicles/veh-8.jpg"
              alt="Live from space album cover"
              objectFit="cover"
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={9}
            lg={9}
            sx={{ justifyContent: "center" }}
          >
            <CardContent
              sx={{
                py: 0,
                p: 1,
              }}
            >
              {/* <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                gutterBottom
                color="text.secondary"
                component="div"
                textAlign="left"
              >
                Cost per km :
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                color="text.secondary"
                component="div"
                textAlign="right"
              >
                <b>{costPerKm}LKR</b>
              </Typography>
            </Grid>
          </Grid> */}
              <Typography component={"div"} variant="body2">
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
              />
              {/* ===Range slider=== */}
              <Grid
                container
                spacing={0.5}
                sx={{
                  alignItems: "center",
                }}
              >
                <Grid item>
                  <TextField
                    name="minValue"
                    value={values.minValue}
                    onChange={HandlePriceChange}
                    sx={{ m: 1, width: 130 }}
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
                <Grid item sx={{ mt: -3 }}>
                  <p sx={{ width: 5 }}> to</p>
                </Grid>
                <Grid item>
                  <TextField
                    name="maxValue"
                    value={values.maxValue}
                    onChange={HandlePriceChange}
                    sx={{ m: 1, width: 130 }}
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

              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography
                    gutterBottom
                    color="text.secondary"
                    component="div"
                    textAlign="left"
                  >
                    Max Weight :
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    color="text.secondary"
                    component="div"
                    textAlign="right"
                  >
                    <b>{capasity}</b>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>

        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
      </Card>
    </>
  );
}
//========Vehicles Component ending===================
export default VehicleType;
