import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
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
            label="Enter Driver NIC"
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          sx={{
            m: 2,
          }}
        >
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
            edit
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
