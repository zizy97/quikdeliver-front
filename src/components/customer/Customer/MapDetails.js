import React, { useState, useEffect } from "react"; //react
import { Link } from "react-router-dom"; //react-router-dom
//--MUI--
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
//--MUI--
// =========Icons==========

// =========Icons end==========

//====Import Components===
import AppRating from "./AppRating";
import DelivererRating from "./DelivererRating";
import ProofOfDelivery from "./ProofOfDelivery";
import SimpleSnackbar from "./Notifications";
import Indicator from "../Indicator";
import { useGlobalContext } from "../userContext";
//====Import Components===
//====Import 3rd party Library
import { motion } from "framer-motion";

function MapDetails() {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      window.scrollTo(0, 0);
    }
    setfirst(false);
  }, [first]);

  //===Indicator===
  const { indicator, appRating } = useGlobalContext();

  const [checked, setChecked] = React.useState(false);
  const [checkedComplete, setCheckedComplete] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("Hello");
  };

  const handleComplete = (event) => {
    checkedComplete === true
      ? setCheckedComplete(false)
      : setCheckedComplete(true);

    checked === true ? setChecked(false) : setChecked(true);
    console.log(checkedComplete);
    console.log(checked);
  };

  // ====Notification ending=====

  function MapInfo(prop) {
    return (
      <Card
        elavation={0}
        sx={{
          bgcolor: "#D3E2FF",
          justifyContent: "center",
          m: 2,
          height: 500,
          borderRadius: 1,
        }}
      >
        <CardContent
          sx={{
            py: 0,
            pt: 6,
            textAlign: "left",
            
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ alignItems: "center" }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ mb: 1.5, py: 1 }}
              >
                Map Status :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {checked ? (
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    bgcolor: "#008000",
                    color: "white",
                    borderRadius: 0.5,
                    py: 1,
                  }}
                >
                  Activated
                </Typography>
              ) : (
                <Typography
                  sx={{
                    bgcolor: "#C0C0C0",
                    borderRadius: 0.5,
                    textAlign: "center",
                    py: 1,
                  }}
                >
                  Deactivated
                </Typography>
              )}
            </Grid>
          </Grid>

          <Typography component={"div"} variant="h6" sx={{ mb: 1.5 }}>
            Vehicle Type : Bike
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
            Approximate Time : <b>2 hours</b>
          </Typography>
        </CardContent>

        {checked === true && (
          <div>
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/vtmsmyks.json"
              trigger="loop"
              style={{ width: "200px", height: "200px" }}
              colors="outline:#121331,primary:#3a3347,secondary:#e8b730,tertiary:#4bb3fd,quaternary:#f9c9c0"
            />
          </div>
        )}

        {checkedComplete === true && (
          <div>
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/pxxdikfn.json"
              trigger="loop"
              style={{ width: "200px", height: "200px" }}
              colors="outline:#121331,primary:#3080e8,secondary:#242424,tertiary:#e8b730,quaternary:#242424,quinary:#f9c9c0"
            />
          </div>
        )}

        {/* ===========back button=========== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignSelf: "flex-end",
          }}
        >
          <Link
            to="/customer/page2"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 10,
                borderColor: "black",
                my: 1,
                mb: 6,
                backgroundColor: "",
                color: "black",
              }}
            >
              Back
            </Button>
          </Link>
        </Box>
        {/* ===========back button ending=========== */}
      </Card>
    );
  }

  // =============Transition handling===========
  const [checked1, setChecked1] = useState(false);

  useEffect(() => {
    return () => {
      setChecked1(true);
      console.log(" clecked ");
      console.log(checked1);
    };
  }, [checked1]);

  //---framer-motion---
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
        delay: 1,
      },
    },
  };
  //---framer-motion---
  // =============Transition handling end===========

  return (
    <>
      <motion.div
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Container
          sx={{
            bgcolor: "transparent",
            pt: 1,
            paddingTop: 7,
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
                    m: 0,
                  }}
                >
                  {/* Indicator */}
                  <div>
                    <Indicator indicator={indicator} />
                  </div>

                  {/* Indicator ending */}
                </Box>
              </Grid>
            </Box>
          </Grid>
          {/* ===========ROUTE SLECTION PART========== */}
          {/* <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        > */}
          <motion.div
            variants={containerVarients}
            initial="hidden"
            animate="visible"
          >
            <Card
              elavation={4}
              sx={{
                flexGrow: 1,
                m: { lg: 4, md: 3, sm: 2, xs: 1 },
                display: "flex",
                background: "white",
                textAlign: "center",
                borderRadius: 1,
                boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
              }}
              container
              direction={"row"}
              justifyContent="center"
            >
              <Grid container spacing={0}>
                {/* form */}
                <Box
                  container
                  variant="outlined"
                  direction={"row"}
                  sx={{
                    display: "flex",
                    background: "transparent",
                    textAlign: "center",
                    my: 0,
                  }}
                  justifyContent="center"
                  width="100%"
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      sx={{ mx: 0, px: 0 }}
                    >
                      {/* ========MapInfo========= */}
                      <MapInfo />
                      {/* ========MapInfo end========= */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                      <Box
                        sx={{
                          //this need to be fixed
                          textAlign: "left",
                          backgroundColor: "#D6DAE3",
                          mr: 2,
                          m: 2,
                          height: 500,
                        }}
                        elivation={0}
                      >
                        {/* ======Notification======= */}
                        <SimpleSnackbar />
                        <FormControl component="fieldset" sx={{ ml: 2 }}>
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="start"
                              control={
                                <Switch
                                  checked={checked}
                                  onChange={handleChange}
                                  inputProps={{ "aria-label": "controlled" }}
                                />
                              }
                              label="Map Activation"
                              labelPlacement="start"
                            />
                          </FormGroup>
                          <ProofOfDelivery />
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="start1"
                              control={
                                <Switch
                                  checkedComplete={checkedComplete}
                                  onChange={handleComplete}
                                  inputProps={{ "aria-label": "controlled" }}
                                />
                              }
                              label="Process Completion"
                              labelPlacement="start"
                            />
                          </FormGroup>
                        </FormControl>
                        {/* ======Notification ending======= */}

                        {checked === true && (
                          <Typography
                            variant="h3"
                            gutterBottom
                            component="div"
                            sx={{ pt: 2, textAlign: "center" }}
                          >
                            Map goes here
                          </Typography>
                        )}

                        {checkedComplete === true && (
                          <Typography
                            variant="h3"
                            gutterBottom
                            component="div"
                            sx={{ pt: 2, textAlign: "center", fontWeight: 200 }}
                          >
                            <b>Congratulations!</b>, You Successfully Completed
                            the Delivery Process.
                          </Typography>
                        )}

                        {checkedComplete === true && <DelivererRating />}
                        {appRating === true && <AppRating />}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* form ending*/}
              </Grid>
            </Card>
          </motion.div>

          {/* </Grow> */}
        </Container>
      </motion.div>
    </>
  );
}

export default MapDetails;
