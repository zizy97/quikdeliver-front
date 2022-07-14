import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Typography component="h3" sx={{ mb: 5, fontWeight: 700 }}>
        SERVICE YOU THINK YOU REQUIRE
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>MEN & TRUCK</MenuItem>
          <MenuItem value={20}>FURNITURE DELIVERY</MenuItem>
          <MenuItem value={30}>INDUSTRIAL MOVING</MenuItem>
        </Select>
      </FormControl>
      <Typography component="h3" sx={{ mb: 5, mt: 5, fontWeight: 700 }}>
        SERVICE YOU THINK YOU REQUIRE
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />
      <br />
      <Typography component="h3" sx={{ mb: 5, mt: 5, fontWeight: 700 }}>
        SERVICE YOU THINK YOU REQUIRE
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />{" "}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />
      <br />
      <Typography component="h3" sx={{ mb: 5, mt: 5, fontWeight: 700 }}>
        SERVICE YOU THINK YOU REQUIRE
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />{" "}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />
      <br />
      <Typography component="h3" sx={{ mb: 5, mt: 5, fontWeight: 700 }}>
        SERVICE YOU THINK YOU REQUIRE
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />{" "}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ mt: 2, width: 500 }}
      />
    </div>
  );
}
