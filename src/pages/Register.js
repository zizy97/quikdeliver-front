import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthServices from "../services/AuthServices";
import { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomSnackBar from "../components/CustomSnackBar";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const option = query.get("type");

  //configs for snackbar
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  //this method is use to snackbar close/open
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: async () => {
      const email = formik.values.email;
      const password = formik.values.password;
      const name = formik.values.firstName + " " + formik.values.lastName;
      const type = "customer";

      const { status, error } = await AuthServices.handleSignup({
        email,
        password,
        name,
        type,
      });

      if (status) {
        setSubmitMessage(
          "Successfully Created User Please Verify Your Email And Login"
        );
      } else {
        setIsError(true);
        setSubmitMessage(error);
      }
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Link
            onClick={() => {
              navigate("/");
            }}
          >
            <Button startIcon={<ArrowBackIcon fontSize="small" />}>Home</Button>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.firstName && formik.errors.firstName
              )}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <Link href="#">
                  <span color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </span>
                </Link>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting && !isError}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <Link
                onClick={() => {
                  navigate("/signin");
                }}
              >
                <span variant="subtitle2" underline="hover">
                  Sign In
                </span>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
      <CustomSnackBar
        isOpen={isSnackOpen}
        severity={isError ? "error" : "success"}
        handleClose={handleClose}
        message={submitMessage}
      />
    </>
  );
};

export default Register;
