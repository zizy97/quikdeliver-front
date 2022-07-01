import React, { useState, useEffect } from "react";

// MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Radio from "@mui/material/Radio";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
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
      {/* =========================================== */}
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#ECF2FF",
          height: 151,
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
          sx={{ width: 151 }}
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
          <Divider>
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
            </Typography>
            {/* <Chip label={Vehicle} /> */}
          </Divider>

          <Grid container alignItems="center">
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

          <Typography component={"div"} variant="body2">
            {description}
          </Typography>
        </CardContent>
        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
        <CardActions
          component={"div"}
          sx={{
            justifyContent: "right",
          }}
        >
          {/* <Button
            size="small"
            variant="contained"
            sx={{
              m: 0,
              color: "white",
              width: 210,
              borderRadius: 10,
            }}
          >
            Select Vehecle
          </Button> */}
          <Radio
            checked={checked}
            onChange={onChange}
            value={value}
            name={name}
            inputProps={inputProps}
            size={size}

            // size="large"
            // {...controlProps("c")}
            // sx={{
            //   "& .MuiSvgIcon-root": {
            //     fontSize: 28,
            //   },
            // }}
          />
        </CardActions>
      </Card>
    </>
  );
}
//========Vehicles Component ending===================
export default VehicleType;
