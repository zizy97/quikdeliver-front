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
import Grow from "@mui/material/Grow";

//--MUI--
// =========Icons==========

// =========Icons end==========

//====Import Components===
import Indicator from "../Indicator";
import { useGlobalContext } from "../userContext";
//====Import Components===

function ViewThree() {
  //===Indicator===
  const { indicator, setIndicator } = useGlobalContext();

  function MapInfo(prop) {
    return (
      <Card
        elavation={0}
        sx={{
          bgcolor: "#D3E2FF",
          justifyContent: "center",
          mx: 2,
          mt: 0,
          height: 500,
          borderRadius: 1,
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
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/vtmsmyks.json"
          trigger="loop-on-hover"
          style={{ width: "255px", height: "255px" }}
          colors="outline:#121331,primary:#3a3347,secondary:#e8b730,tertiary:#4bb3fd,quaternary:#f9c9c0"
        />
        {/* ===========back button=========== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
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
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Card
            elavation={0}
            sx={{
              flexGrow: 1,
              m: 4,
              display: "flex",
              background: "white",
              textAlign: "center",
              borderRadius: 1,
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
                </Grid>
              </Box>
              {/* form ending*/}
            </Grid>
          </Card>
        </Grow>
      </Container>
    </>
  );
}

export default ViewThree;
