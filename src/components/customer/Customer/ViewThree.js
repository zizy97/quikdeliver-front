import React, { useState, useEffect } from "react"; //react
import { Link } from "react-router-dom"; //react-router-dom
//--MUI--
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
//--MUI--
// =========Icons==========
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ScaleIcon from "@mui/icons-material/Scale";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import RouteIcon from "@mui/icons-material/Route";

// =========Icons end==========

function ViewThree() {
  //handle radio button
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //handle radio button end

  //=========Prograss Bar==========
  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: { lg: 800, md: 650, sm: 450, xs: 300 },
            mr: 1,
            mt: 1,
            ml: 2,
            position: "fixed",
          }}
        >
          <LinearProgress
            variant="determinate"
            {...props}
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#12C919",
              },
              transform: "rotate(-90deg)",
              width: 400,
              position: "fixed",
              top: 390,
              left: -170,
              borderRadius: 5,

              height: 13,
            }}
          />
        </Box>
        {/* <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
              color: "blue",
              
            }}
          >
            You have completed 30% delivery process...!
          </Typography>
        </Box> */}
        <Box
          sx={{
            minWidth: 35,
            mt: 1,
            ml: 2,
            position: "fixed",
            top: 160,
            left: 3,
          }}
        >
          <Typography variant="body2" color="white">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      //   setProgress((prevProgress) =>
      //     prevProgress >= 100 ? 10 : prevProgress + 10
      //   );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //=========Prograss Bar end==========

  //========Vehicles Component===================
  function VehicleType(prop) {
    // =============Transition handling===========
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      return () => {
        setChecked(true);
        console.log(" clecked ");
      };
    }, []);
    // =============Transition handling end===========

    return (
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Card
          variant="outlined"
          sx={{
            bgcolor: "#D3E2FF",
            justifyContent: "center",
            borderColor: "#FFD481",
            elavation: 0,
            mx: 2,
            mt: 0,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            alt="mage"
            style={{ width: "100%", height: "5rem", objectFit: "cover" }}
          />
          <CardContent
            sx={{
              py: 0,
            }}
          >
            <Typography component={"div"} variant="h6">
              Lambogini
            </Typography>
            <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
              Cost per km <b>1800LKR</b>
            </Typography>
            <Typography
              component={"div"}
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              nandasena
            </Typography>
            <Typography component={"div"} variant="body2">
              Go home Gota.
            </Typography>
          </CardContent>

          <CardActions
            component={"div"}
            sx={{
              justifyContent: "center",
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{
                m: 0,
                color: "white",
                width: 210,
                borderRadius: 10,
              }}
            >
              Select Vehecle
            </Button>
          </CardActions>
        </Card>
      </Grow>
    );
  }
  //========Vehicles Component ending===================

  function MapInfo(prop) {
    // =============Transition handling===========
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      return () => {
        setChecked(true);
        console.log(" clecked ");
      };
    }, []);
    // =============Transition handling end===========

    return (
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D3E2FF",
          justifyContent: "center",
          borderColor: "#FFD481",
          elavation: 0,
          mx: 2,
          mt: 0,

          height: 500,
        }}
      >
        <CardContent
          sx={{
            py: 0,
            pt: 6,
          }}
        >
          <Typography component={"div"} variant="h6">
            Information about route
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.primary">
            Approximate Time : <b>2 hours</b>
          </Typography>
          <Typography component={"div"} sx={{ mb: 1.5 }} color="text.secondary">
            Information about route
          </Typography>
          <Typography component={"div"} variant="body2">
            Information about route
          </Typography>
        </CardContent>
      </Card>
    );
  }

  // =============Transition handling===========
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========

  return (
    <>
      <Container
        sx={{
          bgcolor: "transparent",
          pt: 6,
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
              <Card
                elevation={0}
                sx={{
                  minWidth: { lg: "5px" },
                  maxHeight: {
                    lg: "900px",
                  },
                  textAlign: "center",
                  alignItems: "center",
                  bgcolor: "#303135",
                  mt: 2,
                  borderRadius: 10,
                  position: "fixed",
                  width: 100,
                  top: 140,
                  left: -43,
                  height: 465,
                  transform: "rotate(deg)",
                }}
              >
                <CardContent>
                  <LinearProgressWithLabel
                    value={progress}
                    component="div"
                    sx={{
                      px: 10,
                    }}
                  />
                </CardContent>
              </Card>
              <Grid item lg={12}></Grid>
            </Grid>
          </Box>
        </Grid>

        {/* ===========ROUTE SLECTION PART========== */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Card
            variant="outlined"
            sx={{
              flexGrow: 1,
              m: 4,
              display: "flex",
              background: "white",
              textAlign: "center",
              borderRadius: 3,
              borderColor: "#3878FE",
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
                  my: 2,
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
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    {/* ========vehicle 01========= */}
                    <MapInfo />
                    {/* ========vehicle 01 end========= */}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Box
                      sx={{
                        //this need ti=o be fixed

                        backgroundColor: "#D6DAE3",
                        mr: 2,
                        m: 2,
                        height: 500,

                        alignItems: "center",
                      }}
                      elivation={0}
                    >
                      <Typography varient="body2" sx={{ pt: 10 }}>
                        Map goes here
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid></Grid>
                  <Grid></Grid>
                  <Grid></Grid>
                </Grid>
              </Box>
              {/* form ending*/}
            </Grid>
          </Card>
        </Grow>

        {/* ===========back button=========== */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* ========Routing========== */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              to="/customer/v2"
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
          {/* =========back button end========= */}
        </Grid>
      </Container>
    </>
  );
}

export default ViewThree;
