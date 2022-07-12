import { useState } from "react"; //=======react===============
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1964FF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1964FF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderTop: 1,
      borderLeft: 1,
      borderRight: 1,
      borderColor: "#5E8FD4",
      borderRadius: 2,
    },
    "&:hover fieldset": {
      borderColor: "#1964FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1964FF",
    },
  },
});

const districts = [
  {
    value: "kaluthra",
    label: "Kaluthara",
  },
  {
    value: "matara",
    label: "Matara",
  },
  {
    value: "ambalangoda",
    label: "Ambalangoda",
  },
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "Saman",
    lastName: "perera",
    NicNumber: "938545113V",
    email: "saman@gmail.com",
    phone: "",
    district: "Galle",
    address: "Galle",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [values1, setValues1] = useState({
    password: "",
    confirm: "",
  });

  const handleChange1 = (event) => {
    setValues1({
      ...values1,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="NIC Number"
                name="NIC Number"
                onChange={handleChange}
                required
                value={values.NicNumber}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Select District"
                name="district"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.district}
                variant="outlined"
              >
                {districts.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CssTextField>
            </Grid>
            <Grid item md={6} xs={12}></Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                fullWidth
                size="small"
                label="Password"
                margin="normal"
                name="password"
                onChange={handleChange1}
                type="password"
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CssTextField
                // variant="style1"
                fullWidth
                size="small"
                label="Confirm password"
                margin="normal"
                name="confirm"
                onChange={handleChange1}
                type="password"
                value={values.confirm}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: 10,
            }}
          >
            Save changes
          </Button>
        </Box>
      </Card>
    </form>
  );
};
