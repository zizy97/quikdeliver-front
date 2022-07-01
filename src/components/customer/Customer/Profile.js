import React, { useState, useEffect } from "react"; //react

//--MUI--
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
//--MUI--

//--Imports---
import { HistoryData } from "./HistoryData";
//--Imports---

function Profile() {
  //=====Transitions handeling=====
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  //=====Transitions handeling ending=====
  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 2,
          paddingTop: 7,
        }}
      >
        <Fade
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Grid container spacing={2}>
            {HistoryData.map((users) => {
              const { id, DeliveryDate, DeliveryCost, From, To, Time } = users;
              return (
                <Grid item xs={12} sm={12} md={6} lg={4} key={id}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      m: 2,
                      mb: 0,
                      textAlign: "center",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/evidance/evidance1.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        {/* ===Delivery Date=== */}
                        <Grid container alignItems="center">
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              textAlign="left"
                            >
                              Delivery Date :
                            </Typography>
                          </Grid>

                          <Grid item>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              textAlign="right"
                            >
                              <b>{DeliveryDate}</b>
                            </Typography>
                          </Grid>
                        </Grid>
                        {/* ===Delivery Date ending===*/}
                        {/* ===Delivery Cost=== */}
                        <Grid container alignItems="center">
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              color="text.secondary"
                              component="div"
                              textAlign="left"
                            >
                              Delivery Cost :
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              gutterBottom
                              color="text.secondary"
                              component="div"
                              textAlign="right"
                            >
                              <b>{DeliveryCost}LKR</b>
                            </Typography>
                          </Grid>
                        </Grid>
                        {/* ===Delivery Cost ending=== */}

                        {/* ===Location=== */}
                        <Grid container alignItems="center">
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              color="text.secondary"
                              component="div"
                              textAlign="left"
                            >
                              From : <b>{From}</b>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              gutterBottom
                              color="text.secondary"
                              component="div"
                              textAlign="right"
                            >
                              To : <b>{To}</b>
                            </Typography>
                          </Grid>
                        </Grid>
                        {/* ===Location ending=== */}

                        {/* ===Time taken for the Delivery=== */}
                        <Grid container alignItems="center">
                          <Grid item xs>
                            <Typography color="text.secondary" textAlign="left">
                              Time taken for the delivery :
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              color="text.secondary"
                              component="div"
                              textAlign="right"
                            >
                              <b>{Time} min</b>
                            </Typography>
                          </Grid>
                        </Grid>
                        {/* ===Time taken for the Delivery ending=== */}
                      </CardContent>
                      <Divider />
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Button size="small" color="primary">
                        View more details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Fade>
      </Box>
    </>
  );
}

export default Profile;
