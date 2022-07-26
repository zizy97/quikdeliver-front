import * as React from "react";
import { Box, Button, Grid,Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
export default function Editvehicle() {
  const navigate = useNavigate();
  return (
    <Grid container direction={"row"}>
    <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
    <Grid item lg={10} md={10} sm={10} xs={10}>
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        mt: 5,
      }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h4" color="primary.main" sx={{ p: 8}}>
            Edit Vehicle Details
        </Typography>
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
        >
         <TextField
            id="outlined-basic"
            label="Enter vehicle Name"
            variant="outlined"
            defaultValue="Van"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Number"
            variant="outlined"
            defaultValue="CQ1234"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Color"
            variant="outlined"
            defaultValue="White"
          />

          <TextField
            id="outlined-basic"
            label="Enter Fuel Per 1km(L)"
            variant="outlined"
            type="number"
            defaultValue="2"
          />
            <TextField
            id="outlined-basic"
            label="Enter Cost Per 1Km"
            variant="outlined"
            type="number"
            defaultValue="400.00"
          />
            <TextField
            id="outlined-basic"
            label="Enter Other Details"
            variant="outlined"
            defaultValue="no"
          />
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{p:8}}>
      <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end">
          <Button
            variant="contained"
            sx={{
              textAlign: "right",
              borderRadius: 40,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
          Edit Driver
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
    </Box>
    </Grid>
    </Grid>
  );
}
