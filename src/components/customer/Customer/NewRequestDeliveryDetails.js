import React, { useState, useEffect } from "react"; //react
import { useNavigate } from "react-router-dom";
//--MUI--
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
//--MUI--
// =========Icons==========
import ScaleIcon from "@mui/icons-material/Scale";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
// =========Icons end==========

// =========Import Component==========
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
          pt: 1,
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
        {/* <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 500 } : {})}
        > */}

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
              <Grid item xs={12}>
                <Box
                  sx={{
                    minWidth: { lg: "275px" },
                    maxHeight: {
                      xs: "225px",
                      sm: "225px",
                      md: "223px",
                      lg: "240px",
                    },
                    textAlign: "center",
                    alignItems: "center",
                    bgcolor: "transparent",
                    mt: 0,
                    pt: 2,
                    pb: 0,
                    mb: 0,
                    borderRadius: 20,

                    // borderColor: "#5E8FD4",
                  }}
                >
                  <Card
                    varient="container"
                    ref={containerRef}
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                    }}
                  >
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      Just tell us... <b>where do you want to </b>
                    </Typography>
                  </Card>
                </Box>

                <Box
                  sx={{
                    minWidth: { lg: "275px" },
                    maxHeight: {
                      xs: "225px",
                      sm: "225px",
                      md: "223px",
                      lg: "240px",
                    },
                    textAlign: "center",
                    alignItems: "center",
                    bgcolor: "transparent",
                    mt: 0,
                    p: 2,
                    pt: 0,
                    mb: -12,
                    borderRadius: 20,

                    // borderColor: "#5E8FD4",
                  }}
                  ref={containerRef}
                >
                  <Card
                    varient="container"
                    ref={containerRef}
                    elevation={0}
                    sx={{
                      bgcolor: "transparent",
                    }}
                  >
                    <Typography
                      color="text.primary"
                      component="div"
                      sx={{
                        px: 10,
                        pt: 0,
                        fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                        fontWeight: 190,
                      }}
                    >
                      <b>receive the parcel?</b>
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            </Box>
          </Grid>

          {/* =====Taking Delivery Location via radio button=====*/}

          <Box
            sx={{
              flexGrow: 1,
              m: { lg: 4, md: 4, sm: 2, xs: 1 },
              pt: 6, //overlapping
              pb: 3,
              display: "flex",
              background: "white",
              justifyContent: "center",
              borderRadius: 1,
              borderColor: "#3878FE",
              alignContent: "center",
              textAlign: "center",
              bgcolor: "white",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
            }}
            onSubmit={handleSubmit}
            container
            variant="outlined"
            component="form"
          >
            <FormControl
              sx={{
                justifyContent: "center",
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
          </Box>
        </motion.div>
        {/* =====Taking Delivery Location via radio button ending ===*/}
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              flexGrow: 1,
              mt: 0,
              m: { lg: 4, md: 4, sm: 2, xs: 1 },
              mx: 4,
              display: "flex",
              background: "white",
              textAlign: "center",
              borderRadius: 1,
              borderColor: "#3878FE",
              boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
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
                      <Box>
                        <Typography sx={{ fontSize: 30, fontWeight: 200 }}>
                          Sender's Details
                        </Typography>
                      </Box>
                      {/* ========Pickup address========= */}
                      <TextField
                        style={{
                          backgroundColor: "#EFF0F3",
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
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: 3,
                            borderColor: "blue",
                          },
                          endAdornment: (
                            <InputAdornment position="start" sx={{ mr: -1 }}>
                              {/* <FileUploadIcon
                                sx={{ color: "#1964FF", fontSize: 40 }}
                              /> */}
                              <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                              <lord-icon
                                src="https://cdn.lordicon.com/ribwzplp.json"
                                trigger="hover"
                                colors="primary:#1663c7"
                                state="hover-2"
                                style={{ width: "50px", height: "50px" }}
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
                      {/* ========Pickup address========= */}

                      {/* =========Sender's Name========= */}
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Sender's Name*"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="senderName"
                        value={values.senderName}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
                      />
                      {/* =========Sender's Name end========= */}
                      {/* =========Sender's Contact Number========= */}
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Sender's Contact Number*"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="senderNumber"
                        value={values.senderNumber}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
                      />
                      {/* =========Sender's Contact Number end========= */}
                      {/* =========Sender's Alternative Contact Number========= */}
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Sender's Alternative Number"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="senderAlternativeNumber"
                        value={values.senderAlternativeNumber}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
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
                          backgroundColor: "#EFF0F3",
                        }}
                        id="custom-css-outlined-input"
                        label="Delivery Address*"
                        InputLabelProps={{
                          style: {
                            color: "#1964FF",
                            fontWeight: 800,
                          },
                        }}
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                          borderRadius: 1,
                        }}
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
                                style={{ width: "50px", height: "50px" }}
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
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Receiver's Name*"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="receiverName"
                        value={values.receiverName}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
                      />
                      {/* =========Receiver's Name end========= */}
                      {/* =========Receiver's Contact Number========= */}
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Receiver's Contact Number*"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="receiverNumber"
                        value={values.receiverNumber}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
                      />
                      {/* =========Receiver's Contact Number end========= */}
                      {/* =========Receiver's Alternative Contact Number========= */}
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "450px",
                            md: "400px",
                            sm: "450px",
                            xs: "300px",
                          },
                        }}
                        // size="small"
                        id="outlined-textarea"
                        label="Receiver's Alternative Number"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="receiverAlternativeNumber"
                        value={values.receiverAlternativeNumber}
                        onChange={handleInputChange}
                        // onChange={handleChange}
                        margin="dense"
                      />
                      {/* =========Receiver's Alternative Contact Number end========= */}
                    </div>
                  </Grid>
                  {/* <Divider>CENTER</Divider> */}
                  <Divider sx={{ color: "black" }} />

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div>
                      <Box sx={{ mt: 3 }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 200 }}>
                          Pickup Details
                        </Typography>
                      </Box>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {" "}
                        {/* =========Description of item========= */}
                        <TextField
                          sx={{
                            minWidth: {
                              lg: "450px",
                              md: "400px",
                              sm: "450px",
                              xs: "300px",
                            },
                          }}
                          // size="small"
                          id="outlined-textarea"
                          label="Description Of the Item"
                          placeholder="Placeholder"
                          multiline
                          maxRows={4}
                          name="descriptionOfItem"
                          value={values.descriptionOfItem}
                          onChange={handleInputChange}
                          // onChange={handleChange}
                          margin="dense"
                        />
                        {/* =========Description of itam end========= */}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {/* =========Pacage weight========= */}
                        <TextField
                          sx={{
                            minWidth: {
                              lg: "450px",
                              md: "400px",
                              sm: "450px",
                              xs: "300px",
                            },
                            mx: 4,
                          }}
                          // size="small"
                          id="outlined-textarea"
                          label="Pacage Weight"
                          placeholder="Placeholder"
                          multiline
                          maxRows={4}
                          name="pacageWeight"
                          value={values.pacageWeight}
                          onChange={handleInputChange}
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
                        {/* ========= Pacage weight end========= */}
                        {/* =========Pacage Image========= */}
                        <label htmlFor="contained-button-file">
                          <Input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                          />
                          <Button
                            sx={{
                              minWidth: {
                                lg: "450px",
                                md: "400px",
                                sm: "450px",
                                xs: "300px",
                              },
                              mx: 4,
                              my: 1.3,
                            }}
                            variant="outlined"
                            component="span"
                            size="large"
                            endIcon={
                              <AddAPhotoIcon sx={{ color: "#FFBC39" }} />
                            }
                          >
                            Pacage Image
                          </Button>
                        </label>

                        {/* =========Pacage Image end========= */}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {/* =========Special Notes========= */}
                        <TextField
                          sx={{
                            minWidth: {
                              lg: "90%",
                              md: "90%",
                              sm: "450px",
                              xs: "300px",
                            },
                            mt: 1,
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
                          // size="small"
                          margin="dense"
                          helperText="Please mention about your parcel"
                        />
                        {/* =========Special Notes end========= */}
                      </Grid>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    {/* =========submit button========= */}
                    <FullScreenDialog />
                    {/* =========submit button end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    {/* =========submit button========= */}
                    {/* ========Routing========== */}
                    {/* <Link
                        to="/customer/page2"
                        style={{ textDecoration: "none", color: "white" }}
                      > */}
                    <Button
                      onClick={() => {
                        navigate("/customer/page2");
                      }}
                      variant="contained"
                      disableElevation
                      size="large"
                      sx={{
                        minWidth: {
                          lg: "450px",
                          md: "400px",
                          sm: "450px",
                          xs: "300px",
                        },
                        borderRadius: 10,
                        py: 2,
                        my: 1,
                      }}
                    >
                      Done
                    </Button>
                    {/* </Link> */}
                    {/* =========submit button end========= */}
                  </Grid>
                </Grid>
              </Box>
              {/* form ending*/}
            </Grid>
          </Box>
        </motion.div>
        {/* ===========form part ending========== */}
      </Container>
    </>
  );
}

export default NewRequestDeliveryDetails;
