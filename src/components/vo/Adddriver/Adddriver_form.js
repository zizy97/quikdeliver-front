import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Addnew from "../Adddriver/Addnew";
import Addregister from "../Adddriver/Addregister";
export default function Adddriver() {
  const [Svalue, setSvalue] = React.useState("New");

  const handleChange = (event) => {
    setSvalue(event.target.value);
  };
  return (
    <Grid container direction={"row"}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Typography
          component="div"
          variant="h5"
          sx={{ mt: 5, textAlign: "center", pl: 2, pr: 2 }}
        >
          Are you going to add a new driver or registered driver?
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={{
          textAlign: { xs: "center", sm: "center", lg: "left", md: "left" },
        }}
      >
        <FormControl sx={{ mt: 5 }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="New"
            onChange={handleChange}
          >
            <FormControlLabel value="New" control={<Radio />} label="New" />
            <FormControlLabel
              value="Registered"
              control={<Radio />}
              label="Registered"
              onChange={handleChange}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            mt: 5,
          }}
        >
          <Typography variant="h6" sx={{ p: 3, textAlign: "center" }}>
            Enter the Driver Details
          </Typography>{" "}
          {Svalue === "New" ? <Addnew /> : <Addregister />}
        </Box>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
    </Grid>
  );
}
