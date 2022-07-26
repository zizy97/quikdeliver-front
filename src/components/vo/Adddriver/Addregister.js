import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Vlist from "./Vlist";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from '@mui/material/FormControl';
export default function Addnew() {
  const navigate = useNavigate();
  return (
    <Grid container direction={"row"}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 2,
              width: { lg: "40ch", md: "40ch", sm: "40ch", xs: "26ch" },
            },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >  <TextField
        id="outlined-basic"
        label="Enter Frist Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Enter Last Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Enter NIC Number"
        variant="outlined"
      />
     
      </Box>
         <FormControl component="fieldset" sx={{pl:9,mt:5,pr:9}}>
          <FormLabel component="legend" >Ability to Drive ?</FormLabel>
          <FormGroup aria-label="position" row sx={{mt:4}}>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Motor Bike"
              labelPlacement="end"
            />
             <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="ThreeWheeler"
            labelPlacement="end"
          />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Car"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Van"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Lorry"
              labelPlacement="end"
            /> 
             <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Truck/Others"
              labelPlacement="end"
            />  
          </FormGroup>
          </FormControl>

      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{p:8}}>
          <Typography   color="primary.main" variant="h6" sx={{mb:3}}>
          Select Sutaible Vehicles to driver.
          </Typography>
          <Vlist />
          <Box>
          <Button
            variant="contained"
            sx={{
              textAlign: "right",
              mt: 5,
              borderRadius: 40,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Add Driver
          </Button>
          <Button
            onClick={() => {
              navigate("/vo/drivers");
            }}
            variant="contained"
            sx={{
              textAlign: "right",
              borderRadius: 40,
              ml: 1,
              mt: 5,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
