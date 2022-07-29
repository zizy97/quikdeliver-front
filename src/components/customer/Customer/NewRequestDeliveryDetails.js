import React, { useState, useEffect } from "react"; //react
import { useNavigate } from "react-router-dom";
//--MUI--
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
//--MUI--
// =========Icons==========
import ScaleIcon from "@mui/icons-material/Scale";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
// =========Icons end==========

// =========Import Component==========
import TitleText from "./TitleText";
import TextInput from "./TextInput";
import FullScreenDialog from "./DeclarationForm";
import Indicator from "../Indicator";
import CircularIndicator from "../CircularIndicator";
import { useGlobalContext } from "../userContext";

//==3rd party Library==
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NewRequestDeliveryDetails(handleClickOpen) {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      window.scrollTo(0, 0);
    }
    setfirst(false);
  }, [first]);

  const navigate = useNavigate();
  //===Indicator===
  const { indicator, setIndicator } = useGlobalContext();
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  //===Indicator===

  //handle radio button
  const [value, setValue] = useState("female");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  //handle radio button end

  //===============button styling===============================
  //----main two textfields----

  // =============Transition handling===========
  const [checked, setChecked] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);

  //---framer-motion---
  const textVarients = {
    hidden: {
      opacity: 0.5,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        dumping: 8,
      },
    },
  };
  const containerVarients = {
    hidden: {
      opacity: 0.5,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        dumping: 8,
      },
    },
    exit: {
      opacity: 0.5,
      x: "100vw",
      transition: {
        type: "easeInOut",
        delay: 4,
      },
    },
  };

  //---framer-motion---
  // =============Transition handling end===========

  //=====prograss bar transition=======
  const { ref, inView } = useInView({ threshold: 0.8 });
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      });
      animation1.start({
        opacity: 0,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      });
      animation1.start({
        opacity: 1,
      });
    }
    console.log("use effect hook : ", inView);
  }, [inView, animation, animation1]);
  //=====prograss bar transition ending =======

  //============Form Handling============
  const initialValues = {
    deliveryAddress: "",
    pickupAddress: "",
    weight: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (values.deliveryAddress === "") setvalue1(0);
    else setvalue1(3);

    if (values.pickupAddress === "") setvalue2(0);
    else setvalue2(3);
  };

  useEffect(() => {
    setIndicator(value1 + value2);
    // return () => {
    //   second
    // }
  }, [value1, value2, setIndicator]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  const Input = styled("input")({
    display: "none",
  });
  //============Form Handling ending============

  return (
    <>
      <Container
        sx={{
          bgcolor: "transparent",
          pb: 1,
          pt: 9,
        }}
      >
        <Grid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  m: 1,
                }}
              >
                <Box ref={ref} sx={{ m: 2 }}></Box>
                {/* Indicator */}
                <motion.div animate={animation}>
                  <Indicator indicator={indicator} />
                </motion.div>
                <motion.div animate={animation1}>
                  <CircularIndicator indicator={indicator} />
                </motion.div>

                {/* Indicator ending */}
              </Box>
            </Grid>
          </Box>
        </Grid>

        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TitleText
                marginBtm={-12.5}
                text1={"Just tell us..."}
                text2={"where do you want to"}
                text4={"receive the parcel"}
              />
            </Box>
          </Grid>

          {/* =====Taking Delivery Location via radio button ending ===*/}

          {/* form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flexGrow: 1,
              display: "flex",
              background: "#D6EEF8",
              my: 4,
              px: 3,
              py: 2,
              borderRadius: 1,
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
            }}
            justifyContent="center"
          >
            <Grid
              container
              spacing={{ xs: 0, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl
                  sx={{
                    justifyContent: "center",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <Grid container sx={{ textAlign: "center", pt: 3 }}>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <FormControlLabel
                          value="myself"
                          control={<Radio />}
                          label="Delivery it to me"
                          labelPlacement="bottom"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <FormControlLabel
                          value="another"
                          control={<Radio />}
                          label="Delivery for another person"
                          labelPlacement="bottom"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <Divider variant="middle" />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div>
                  <Box>
                    <Typography sx={{ fontSize: 30, fontWeight: 200 }}>
                      Sender's Details
                    </Typography>
                  </Box>
                  {/* ========Pickup address========= */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <TextField
                      style={{
                        backgroundColor: "#FFFFFF",
                      }}
                      id="outlined-textarea"
                      label="Pickup Address*"
                      placeholder="Placeholder"
                      InputLabelProps={{
                        style: {
                          color: "#1964FF",
                          fontWeight: 800,
                        },
                      }}
                      fullWidth
                      sx={{ mx: 0, borderRadius: 1 }}
                      InputProps={{
                        style: {
                          borderRadius: 3,
                          borderColor: "blue",
                        },
                        endAdornment: (
                          <InputAdornment position="start" sx={{ mr: -1 }}>
                            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                            <lord-icon
                              src="https://cdn.lordicon.com/ribwzplp.json"
                              trigger="hover"
                              colors="primary:#1663c7"
                              state="hover-2"
                              style={{ width: "40px", height: "40px" }}
                            ></lord-icon>
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
                      helperText="Please enter Sender's Address"
                    />
                  </motion.div>
                  {/* ========Pickup address========= */}

                  {/* =========Sender's Name========= */}
                  <TextInput
                    maxRows={4}
                    name="senderName"
                    value={values.senderName}
                    onChange={handleInputChange}
                    label="Sender's Name*"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />
                  {/* =========Sender's Name end========= */}
                  {/* =========Sender's Contact Number========= */}
                  <TextInput
                    maxRows={4}
                    name="senderNumber"
                    value={values.senderNumber}
                    onChange={handleInputChange}
                    label="Sender's Contact Number*"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />
                  {/* =========Sender's Contact Number end========= */}
                  {/* =========Sender's Alternative Contact Number========= */}

                  <TextInput
                    maxRows={4}
                    name="senderAlternativeNumber"
                    value={values.senderAlternativeNumber}
                    onChange={handleInputChange}
                    label="Sender's Alternative Number"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />

                  {/* =========Sender's Alternative Contact Number end========= */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div>
                  <Box>
                    <Typography sx={{ fontSize: 30, fontWeight: 200 }}>
                      Receiver's Details
                    </Typography>
                  </Box>
                  {/* ========Delivery address========= */}
                  <TextField
                    style={{
                      backgroundColor: "#FFFFFF",
                    }}
                    id="custom-css-outlined-input"
                    label="Delivery Address*"
                    InputLabelProps={{
                      style: {
                        color: "#1964FF",
                        fontWeight: 800,
                      },
                    }}
                    fullWidth
                    sx={{ mx: 0, borderRadius: 1 }}
                    InputProps={{
                      style: {
                        borderRadius: 5,
                        borderColor: "blue",
                        bgcolor: "white",
                      },
                      endAdornment: (
                        <InputAdornment position="start" sx={{ mr: -1 }}>
                          {/* <DownloadIcon
                                  sx={{ color: "#1964FF", fontSize: 40 }}
                                /> */}
                          <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/zvpyzhdi.json"
                            trigger="hover"
                            colors="primary:#3080e8"
                            state="hover-2"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
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
                    helperText="Please enter Receiver's Address"
                  />
                  {/* ========Delivery address end========= */}
                  {/* =========Receiver's Name========= */}
                  <TextInput
                    maxRows={4}
                    name="receiverName"
                    value={values.receiverName}
                    onChange={handleInputChange}
                    label="Receiver's Name*"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />

                  {/* =========Receiver's Name end========= */}
                  {/* =========Receiver's Contact Number========= */}
                  <TextInput
                    maxRows={4}
                    name="receiverNumber"
                    value={values.receiverNumber}
                    onChange={handleInputChange}
                    label="Receiver's Contact Number*"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />

                  {/* =========Receiver's Contact Number end========= */}
                  {/* =========Receiver's Alternative Contact Number========= */}
                  <TextInput
                    maxRows={4}
                    name="receiverAlternativeNumber"
                    value={values.receiverAlternativeNumber}
                    onChange={handleInputChange}
                    label="Receiver's Alternative Number"
                    id="outlined-textarea"
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                  />

                  {/* =========Receiver's Alternative Contact Number end========= */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontSize: 30, fontWeight: 200 }}>
                    Pickup Details
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ alignSelf: "flex-start" }}
              >
                {/* =========Description of item========= */}
                <TextInput
                  maxRows={4}
                  name="descriptionOfItem"
                  value={values.descriptionOfItem}
                  onChange={handleInputChange}
                  label="Description of the Item"
                  id="outlined-textarea"
                  InputLabelProps={{
                    style: {
                      color: "black",
                    },
                  }}
                />

                {/* =========Description of itam end========= */}
                {/* =========Special Notes========= */}

                <TextField
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 217,
                  }}
                  fullWidth
                  sx={{ mx: 0, borderRadius: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <NoteAltIcon sx={{ color: "#FFBC39", fontSize: 30 }} />
                      </InputAdornment>
                    ),
                  }}
                  id="outlined-textarea"
                  label="Special Notes"
                  InputLabelProps={{
                    style: {
                      color: "black",
                    },
                  }}
                  placeholder="Placeholder"
                  multiline
                  rows={8}
                  maxRows={10}
                  // onChange={handleChange}
                  // size="small"
                  margin="dense"
                />
                {/* =========Special Notes end========= */}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ alignSelf: "flex-start" }}
              >
                {/* =========Pacage weight========= */}
                <TextInput
                  maxRows={4}
                  name="pacageWeight"
                  value={values.pacageWeight}
                  onChange={handleInputChange}
                  label="Pacage Weight"
                  id="outlined-textarea"
                  InputLabelProps={{
                    style: {
                      color: "black",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <ScaleIcon sx={{ color: "#FFBC39" }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* ========= Pacage weight end========= */}
                {/* =========Pacage Image========= */}
                <Box sx={{ my: 1 }}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "black",
                        fontWeight: 400,
                      }}
                      fullWidth
                      sx={{
                        mx: 0,
                        borderRadius: 1,
                        height: 57,
                      }}
                      variant="contained"
                      component="span"
                      size="large"
                      endIcon={<AddAPhotoIcon sx={{ color: "#FFBC39" }} />}
                    >
                      Pacage Image
                    </Button>
                  </label>
                </Box>

                {/* =========Pacage Image end========= */}
                {/* ===Upload image preview===*/}
                <Box sx={{ width: "100%", height: 100 }}></Box>
                {/* ===Upload image preview end=== */}
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* =========submit button========= */}
                <FullScreenDialog />
                {/* =========submit button end========= */}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* =========submit button========= */}
                {/* ========Routing========== */}

                <Button
                  onClick={() => {
                    navigate("/customer/page2");
                  }}
                  variant="contained"
                  disableElevation
                  size="large"
                  type="submit"
                  sx={{
                    width: "20%",
                    borderRadius: 10,
                  }}
                >
                  Done
                </Button>
                {/* =========submit button end========= */}
              </Grid>
            </Grid>
          </Box>
          {/* form ending*/}
        </motion.div>
        {/* ===========form part ending========== */}
      </Container>
    </>
  );
}

export default NewRequestDeliveryDetails;
