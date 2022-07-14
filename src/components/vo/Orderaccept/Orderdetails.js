import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Vlist from "../Adddriver/Vlist";
import Dlist from "../Addvehicle/Dlist";
export default function Addnew() {
  const navigate = useNavigate();
  return (
    <Grid container direction={"row"}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{
            m: 4,
          }}
        >
          full Details display
        </Box>
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          sx={{
            mr: 2,
            mt: 2,
            mb: 2,
            ml: 4,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Select Drivers from Driver list
          </Typography>
          <Dlist />
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          sx={{
            mr: 2,
            mt: 2,
            mb: 2,
            ml: 4,
          }}
        >
          {" "}
          <Typography sx={{ fontWeight: "bold" }}>
            Select vehicles from Vehicle list
          </Typography>
          <Vlist />
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
            Finish
          </Button>
          <Button
            onClick={() => {
              navigate("/vo/newrequest");
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
