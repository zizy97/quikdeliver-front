import React, { useState, useEffect } from "react";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Radio from "@mui/material/Radio";
// MUI

//========Vehicles Component===================
function VehicleType({
  checked,
  onChange,
  value,
  name,
  inputProps,
  size,
  Driver,
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
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D0D3D8",
          justifyContent: "center",
          borderColor: "#FFD481",
          elavation: 0,
          width: "100%",
          m: 2,
          mt: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="mage"
          style={{ width: "100%", height: "5rem", objectFit: "cover" }}
        />
        <CardContent
          sx={{
            py: 0,
          }}
        >
          <Typography component={"div"} variant="h6">
            {Driver}
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
            Cost per km <b>{costPerKm}LKR</b>
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.secondary">
            {capasity}
          </Typography>
          <Typography component={"div"} variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions
          component={"div"}
          sx={{
            justifyContent: "center",
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
