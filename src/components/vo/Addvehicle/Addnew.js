import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dlist from "./Dlist";
import { useNavigate } from "react-router-dom";
export default function Addnew() {
  const navigate = useNavigate();
  return (
    <Grid container direction={"row"}>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 2,
              width: { lg: "32ch", md: "30ch", sm: "30ch", xs: "26ch" },
            },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Enter vehicle Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Color"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Enter Fuel Per 1km(L)"
            variant="outlined"
            type="number"
          />
          <Typography>Upload Image of the Vehicle</Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          sx={{
            m: 2,
          }}
        >
          {" "}
          <Typography sx={{ fontWeight: "bold" }}>
            Select Drivers to the vehicle from Driver list
          </Typography>
          <Dlist />
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
            Add Vehicle
          </Button>
          <Button
            onClick={() => {
              navigate("/vo/vehicles");
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
