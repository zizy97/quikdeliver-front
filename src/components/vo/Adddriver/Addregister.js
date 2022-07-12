import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Vlist from "./Vlist";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
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
            label="Enter Driver NIC"
            variant="outlined"
          />
          <FormLabel component="legend">Ability to Drive ?</FormLabel>
          <FormGroup aria-label="position">
            <FormControlLabel
              sx={{ ml: 5 }}
              value="end"
              control={<Checkbox />}
              label="Motor Bike"
              labelPlacement="end"
            />
            <FormControlLabel
              sx={{ ml: 5 }}
              value="end"
              control={<Checkbox />}
              label="Car"
              labelPlacement="end"
            />
            <FormControlLabel
              sx={{ ml: 5 }}
              value="end"
              control={<Checkbox />}
              label="Van"
              labelPlacement="end"
            />
            <FormControlLabel
              sx={{ ml: 5 }}
              value="end"
              control={<Checkbox />}
              label="Lorry"
              labelPlacement="end"
            />
          </FormGroup>
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          sx={{
            m: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Select vehicles to be able to drive from Vehicle list
          </Typography>
          <Vlist />
          <Button
            variant="contained"
            sx={{
              textAlign: "right",
              borderRadius: 40,
              mt: 5,
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
