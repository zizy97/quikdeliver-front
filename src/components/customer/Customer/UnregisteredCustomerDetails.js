import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//===import Image===
import Img from "../../../images/UnregisterCustomer.jpg";
//===import Components
import useForm from "./useForm";

import axios from "axios";

function Copyright(props) {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      window.scrollTo(0, 0);
    }
    setfirst(false);
  }, [first]);

  return (
    <Typography
      sx={{ p: 0, m: 0 }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Quik
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // if (
    //   customer.name &&
    //   customer.address &&
    //   customer.email &&
    //   customer.mobile
    // ) {
    //   // const newCustomer = { ...customer, id: new Date().getTime().toString() };
    //   fetch("http://localhost:8082/api/customer", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(customer),
    //   }).then(() => {
    //     console.log("New customer added!");
    //     console.log(customer);
    //   });
    // }
    console.log(customer);

    // axios
    //   .post("http://localhost:8082/api/customer", customer)
    //   .then((response) => {
    //     console.log(response);
    //   });

    fetch("http://localhost:8082/api/customer", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    })
      .then((response) => Promise.all([response.json(), response.headers]))
      .then(([body, headers]) =>
        headers.forEach((element) => {
          console.log(element);
        })
      );
  };

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography
              component="div"
              color="text.primary"
              variant="h5"
              sx={{ fontWeight: 190 }}
            >
              Give us <b>Few details about you</b>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={customer.name}
                onChange={handleChange}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={customer.address}
                onChange={handleChange}
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={customer.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mobile"
                value={customer.mobile}
                onChange={handleChange}
                label="mobile"
                id="mobile"
                autoComplete="telephone"
                autoFocus
              />
              <FormControlLabel
                control={
                  <Checkbox size="small" value="remember" color="primary" />
                }
                label="Remember me"
              />
              <Button
                // onClick={() => {
                //    navigate("/customer/new-booking");
                //   handleSubmit();
                // }}
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, borderRadius: 30 }}
              >
                Next
              </Button>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                }}
              >
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Want to Sign Up? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
