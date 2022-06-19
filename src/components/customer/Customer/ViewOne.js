import React, { useState, useEffect } from "react"; //react
import { Link } from "react-router-dom";
//--MUI--
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Grow from "@mui/material/Grow";
//--MUI--
// =========Icons==========
import ScaleIcon from "@mui/icons-material/Scale";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
// =========Icons end==========

function ViewOne() {
  //handle radio button
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //handle radio button end

  //===============button styling===============================
  //----main two textfields----
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#1964FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1964FF",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1964FF",
        borderRadius: 30,
      },
      "&:hover fieldset": {
        borderColor: "#1964FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1964FF",
      },
    },
  }); //----main two textfields----

  const CssTextField1 = styled(TextField)({
    "& label.Mui-focused": {
      color: "#B27F1C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFBC39",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 30,
      },
      "&:hover fieldset": {
        borderColor: "#FFBC39",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFBC39",
      },
    },
  });
  //===============button styling===============================

  // =============Transition handling===========
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========

  //============Form Handling============
  const [values, setValues] = useState({
    deliveryAddress: "",
    pickupAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  //============Form Handling ending============

  return (
    <>
      <Container
        sx={{
          bgcolor: "transparent",
          pb: 2,
        }}
      >
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        >
          <div>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12}>
                  <Card
                    variant="outlined"
                    sx={{
                      minWidth: { lg: "275px" },
                      maxHeight: {
                        xs: "225px",
                        sm: "225px",
                        md: "223px",
                        lg: "246px",
                      },
                      textAlign: "center",
                      alignItems: "center",
                      bgcolor: "#D3E2FF",
                      mt: 2,
                      borderRadius: 20,
                      borderColor: "blue",
                      mb: -13.5, //overlapping
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="text.primary"
                        component="div"
                        sx={{
                          px: 10,
                        }}
                      >
                        Just tell us... where do you want to receive the parcel?
                      </Typography>
                      <FormControl
                        sx={{
                          mt: -0.5,
                          pl: 3,
                        }}
                      >
                        <RadioGroup
                          row
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Delivery it to me"
                            labelPlacement="bottom"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Delivery for another person"
                            labelPlacement="bottom"
                          />
                        </RadioGroup>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            </Grid>

            {/* ===========form part========== */}

            <Box
              sx={{
                flexGrow: 1,
                m: 4,
                pt: 10, //overlapping
                display: "flex",
                background: "white",
                textAlign: "center",
                borderRadius: 1,
                borderColor: "blue",
              }}
              container
              variant="outlined"
              direction={"row"}
              justifyContent="center"
            >
              <Grid container spacing={0}>
                {/* form */}
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  container
                  variant="outlined"
                  direction={"row"}
                  sx={{
                    display: "flex",
                    background: "transparent",
                    textAlign: "center",
                    my: 4,
                  }}
                  justifyContent="center"
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div>
                        {/* ========Delivery address========= */}
                        <CssTextField
                          id="custom-css-outlined-input"
                          label="Delivery Address"
                          InputLabelProps={{
                            style: {
                              color: "#1964FF",
                            },
                          }}
                          sx={{
                            minWidth: {
                              lg: "450px",
                              md: "400px",
                              sm: "450px",
                              xs: "400px",
                            },
                            borderRadius: 7,
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <DownloadIcon
                                  sx={{ color: "#1964FF", fontSize: 40 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          placeholder="Placeholder"
                          multiline
                          maxRows={6}
                          name="deliveryAddress"
                          value={values.deliveryAddress}
                          onChange={handleInputChange}
                          size="large"
                          margin="dense"
                          helperText="Please enter Delivery Location"
                        />
                        {/* ========Delivery address end========= */}
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* ========Pickup address========= */}
                      <CssTextField
                        id="outlined-textarea"
                        label="Pickup Address"
                        placeholder="Placeholder"
                        InputLabelProps={{
                          style: {
                            color: "#1964FF",
                          },
                        }}
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "400px",
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <FileUploadIcon
                                sx={{ color: "#1964FF", fontSize: 40 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        multiline
                        maxRows={4}
                        name="pickupAddress"
                        value={values.pickupAddress}
                        onChange={handleInputChange}
                        size="large"
                        margin="dense"
                        helperText="Please enter Pick Up Location"
                      />
                      {/* ========Pickup address========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* =========weight========= */}
                      <CssTextField1
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "400px",
                          },
                        }}
                        id="outlined-textarea"
                        label="Weight"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        // onChange={handleChange}
                        margin="dense"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <ScaleIcon sx={{ color: "#FFBC39" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {/* =========weight end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* =========photo========= */}
                      <CssTextField1
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "400px",
                          },
                        }}
                        id="outlined-textarea"
                        label="Photo"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        // onChange={handleChange}
                        margin="dense"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <AddAPhotoIcon sx={{ color: "#FFBC39" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {/* =========photo end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      {/* =========Special Notes========= */}
                      <CssTextField1
                        sx={{
                          minWidth: {
                            lg: "90%",
                            md: "90%",
                            sm: "450px",
                            xs: "400px",
                          },
                          mt: 3,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <NoteAltIcon
                                sx={{ color: "#FFBC39", fontSize: 30 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        id="outlined-textarea"
                        label="Special Notes"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        // onChange={handleChange}
                        size="large"
                        margin="dense"
                        helperText="Please mention about your parcel"
                      />
                      {/* =========Special Notes end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      {/* =========submit button========= */}
                      <Button
                        variant="outlined"
                        disableElevation
                        size="large"
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "400px",
                          },
                          borderRadius: 10,
                          py: 2,
                          my: 2,
                          borderColor: "#FFBC39",
                          hoverColor: "#FFBC39",
                        }}
                        endIcon={
                          <AssignmentIcon
                            sx={{ color: "#FFBC39", fontSize: 40 }}
                          />
                        }
                      >
                        information about your parcel
                      </Button>
                      {/* =========submit button end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      {/* =========submit button========= */}
                      {/* ========Routing========== */}
                      <Link
                        to="/customer/v2"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          size="large"
                          sx={{
                            minWidth: {
                              lg: "450px",
                              md: "400px",
                              sm: "450px",
                              xs: "400px",
                            },
                            borderRadius: 10,
                            py: 2,
                            my: 1,
                          }}
                        >
                          Done
                        </Button>
                      </Link>
                      {/* =========submit button end========= */}
                    </Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                  </Grid>
                </Box>
                {/* form ending*/}
              </Grid>
            </Box>
          </div>
        </Grow>
        {/* ===========form part ending========== */}
      </Container>
    </>
  );
}

export default ViewOne;
