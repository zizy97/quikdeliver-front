import React, { useState, useEffect, useContext } from "react"; //react
import { Link,useNavigate } from "react-router-dom";
//--MUI--
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
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
//--MUI--
// =========Icons==========
import ScaleIcon from "@mui/icons-material/Scale";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
// =========Icons end==========

// =========Import Component==========
import Indicator from "../Indicator";
import CircularIndicator from "../CircularIndicator";
import { useGlobalContext } from "../userContext";

//==3rd party Library==
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ViewOne() {

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
  const [checked, setChecked] = useState(true);
  const containerRef = React.useRef(null);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========

  //=====prograss bar transition=======
  const { ref, inView } = useInView({ threshold: 0.8 });
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      });
      animation1.start({
        opacity: 0,
        scale: 0.4,
      });
    }
    if (!inView) {
      animation.start({
        x: -500,
        y: 600,
        opacity: 0,
        scale: 0.4,
        rotate: 90,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      });
      animation1.start({
        opacity: 1,
        scale: 1,
      });
    }
    console.log("use effect hook : ", inView);
  }, [inView]);
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
  }, [value1, value2]);

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
                      <Slide
                        direction="up"
                        in={checked}
                        container={containerRef.current}
                        // style={{
                        //   transitionDelay: checked ? "100ms" : "0ms",
                        // }}
                        {...(checked ? { timeout: 1500 } : {})}
                      >
                        <Typography
                          color="text.primary"
                          component="div"
                          sx={{
                            px: 10,
                            pt: 0,
                            fontSize: 35,
                            fontWeight: 190,
                          }}
                        >
                          Just tell us... <b>where do you want to </b>
                        </Typography>
                      </Slide>
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
                      <Slide
                        direction="down"
                        in={checked}
                        container={containerRef.current}
                        style={{
                          transitionDelay: checked ? "200ms" : "0ms",
                        }}
                        {...(checked ? { timeout: 1500 } : {})}
                      >
                        <Typography
                          color="text.primary"
                          component="div"
                          sx={{
                            px: 10,
                            pt: 0,
                            fontSize: 35,
                            fontWeight: 190,
                          }}
                        >
                          <b>receive the parcel?</b>
                        </Typography>
                      </Slide>
                    </Card>
                  </Box>
                </Grid>
              </Box>
            </Grid>

            {/* =====Taking Delivery Location via radio button=====*/}
            <Box
              sx={{
                flexGrow: 1,
                m: 4,
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
                  <FormControlLabel
                    value="myself"
                    control={<Radio />}
                    label="Delivery it to me"
                    InputLabelProps={{
                      style: {
                        color: "#1964FF",
                        fontWeight: 800,
                      },
                    }}
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="another"
                    control={<Radio />}
                    label="Delivery for another person"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            {/* =====Taking Delivery Location via radio button ending ===*/}
            <Box
              sx={{
                flexGrow: 1,
                mt: 0,
                mx: 4,
                display: "flex",
                background: "white",
                textAlign: "center",
                borderRadius: 1,
                borderColor: "#3878FE",
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
                        <TextField
                          style={{
                            backgroundColor: "#EFF0F3",
                          }}
                          id="custom-css-outlined-input"
                          label="Delivery Address"
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
                          helperText="Please enter Delivery Location"
                        />
                        {/* ========Delivery address end========= */}
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* ========Pickup address========= */}
                      <TextField
                        style={{
                          backgroundColor: "#EFF0F3",
                        }}
                        id="outlined-textarea"
                        label="Pickup Address"
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
                        helperText="Please enter Pick Up Location"
                      />
                      {/* ========Pickup address========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* =========weight========= */}
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
                        label="Weight"
                        placeholder="Placeholder"
                        multiline
                        maxRows={4}
                        name="weight"
                        value={values.weight}
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
                      {/* =========weight end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      {/* =========photo========= */}
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
                      <TextField
                        sx={{
                          minWidth: {
                            lg: "90%",
                            md: "90%",
                            sm: "450px",
                            xs: "300px",
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
                        // size="small"
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
                            xs: "300px",
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
                      {/* <Link
                        to="/customer/page2"
                        style={{ textDecoration: "none", color: "white" }}
                      > */}
                        <Button
                          onClick={()=>{
                            navigate("/page2")
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
          </div>
        </Grow>
        {/* ===========form part ending========== */}
      </Container>
    </>
  );
}

export default ViewOne;
