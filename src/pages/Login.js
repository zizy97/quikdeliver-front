import { useNavigate,useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useState,useEffect } from "react";
import * as Yup from "yup";

//dispacher is used to dispatch actions
import { useDispatch } from "react-redux";
//Services get
import AuthServices from "../services/AuthServices";
//import snackbar
import CustomSnackBar from "../components/CustomSnackBar";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Google as GoogleIcon } from "../icons/google";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  const error = query.get("error");
  const access = query.get("access");

  //configs for snackbar
    const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    //this method is use to verify google auth user
  const handleGoogleAuth = async () => {
    console.log("google auth");
    if(access){
      const result = await AuthServices.handleGoogleLogin(access,dispatch);
      if (result.status) {
        navigate("/admin");
      } else {
        setIsErrorMsgOpen(true);
        setSubmitError(result.error);
      }
    }
  }
  
//this method is use to snackbar close/open
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsErrorMsgOpen(false);
  };

  //password show/hide
  const handleClickPass = () => {
    setShowPass(!showPass);
  };


  useEffect(() => {
    if(access){
      handleGoogleAuth();
    }
    if(error){//error view and go to defaults page
      setIsErrorMsgOpen(true);
      setSubmitError(error);
      navigate("/signin");
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location.pathname]);

  const formik = useFormik({
    initialValues: {
      email: "demo@gmail.com",
      password: "Password123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async () => {
      var credential = {
        email: formik.values.email,
        password: formik.values.password,
      };
      const result = await AuthServices.handleLogin(credential, dispatch);
      if (result.status) {
        setIsErrorMsgOpen(false);
        navigate("/admin");
      } else {
        setIsErrorMsgOpen(true);
        setSubmitError(result.error);
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
            navigate("/")
          }}
          >
            <Button startIcon={<ArrowBackIcon fontSize="small" />}>
              Home
            </Button>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Link href="http://localhost:8081/api/oauth2/authorize/google?req=login">
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
                </Link>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                or login with email address
              </Typography>
            </Box>
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
            <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                name="password"
                type={showPass ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color={Boolean(
                        formik.touched.password && formik.errors.password
                      ) ? "error" : "primary"}
                      aria-label="toggle password visibility"
                      onClick={handleClickPass}
                      onMouseDown={handleClickPass}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account?{" "}
              <Link
                onClick={() => {
                  navigate("/signup");
                }}
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
      <CustomSnackBar
            isOpen={isErrorMsgOpen}
            severity="error"
            handleClose={handleClose}
            message={submitError}
          />
    </>
  );
};

export default Login;
