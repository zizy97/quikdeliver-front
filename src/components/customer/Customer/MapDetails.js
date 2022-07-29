import React, { useState, useEffect } from "react"; //react
//--MUI--
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
//--MUI--

// =========Icons==========
// =========Icons end==========

//====Import Components===
import MapInfo from "./MapInfo";
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
            pt: 10,
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
          <motion.div
            variants={containerVarients}
            initial="hidden"
            animate="visible"
          >
            <Box
              sx={{
                flexGrow: 1,
                px: 3,
                py: 2,
                mb: 1,
                pt: 1,
                mt: 3,
                display: "flex",
                background: "#D6EEF8",
                textAlign: "center",
                boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
                borderRadius: 1,
              }}
              container
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  sx={{ height: { md: "100%" } }}
                >
                  {/* ========MapInfo========= */}
                  <MapInfo
                    checked={checked}
                    checkedComplete={checkedComplete}
                  />
                  {/* ========MapInfo end========= */}
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                  <Box
                    sx={{
                      //this need to be fixed
                      borderRadius: 1,
                      backgroundColor: "#FFFFFF",
                      mr: 0,
                      m: 0,
                      height: 450,
                      width: "100%",
                      alignItems: "center",
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
                        <b>Congratulations!</b>, You Successfully Completed the
                        Delivery Process.
                      </Typography>
                    )}

                    {checkedComplete === true && <DelivererRating />}
                    {appRating === true && <AppRating />}
                  </Box>
                </Grid>
                {/* form ending*/}
              </Grid>
            </Box>
            {/* ============== */}
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}

export default MapDetails;
