import React, { useState, useEffect } from "react";

// MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Radio from "@mui/material/Radio";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
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
          height: { xs: 270, sm: 200, md: 180, lg: 170 },
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
          justifyContent="left"
        />

        <CardContent
          sx={{
            py: 0,
            p: 1,
            flexGrow: 1,
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
          <Grid
            container
            spacing={0.5}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item>
              <TextField
                sx={{ m: 1, width: 120 }}
                size="small"
                id="filled-password-input"
                label="Min"
                type="text"
                autoComplete="current-password"
                variant="filled"
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
                sx={{ m: 1, width: 120 }}
                size="small"
                id="filled-password-input"
                label="Max"
                type="text"
                autoComplete="current-password"
                variant="filled"
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
        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
      </Card>
    </>
  );
}
//========Vehicles Component ending===================
export default VehicleType;
