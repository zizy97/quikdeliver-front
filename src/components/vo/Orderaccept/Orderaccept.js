import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box ,Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Assigning from "./Assigning";
import Orderdetails from "./Orderdetails";
export default function Adddriver() {
  const navigate = useNavigate();
  return (
    <>
    <Grid component="main" sx={{flexGrow: 1,backgroundColor:"white",p:{lg:8,xs:3,md:4},m:{lg:8,xs:2,md:5},borderRadius:2}}>
      <Typography variant="h3" color="primary.main" sx={{  textAlign: "left" }}>
        ORDER BOOKING DETAILS
      </Typography>
    <Grid item lg={12} md={12} sm={12} xs={12} mt={4} >
      <Box>
        <Orderdetails/>
      </Box>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12} mt={4} >
      <Assigning/>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12} mt={4} >
      <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end">
          <Button
           onClick={() => {
            navigate("/vo/requests");
          }}
            variant="contained"
            sx={{
              mr:2,
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
              navigate("/vo/requests");
            }}
            variant="contained"
            sx={{
              borderRadius: 40,
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
    </>
  );
}
