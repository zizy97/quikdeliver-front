import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//==3rd party Library==
import { motion } from "framer-motion";

function MapInfo({ checked, checkedComplete }) {
  return (
    <Card
      elavation={0}
      sx={{
        bgcolor: "#D6EEF8",
        mx: 0,
        mt: 0,
        height: { xs: 300, sm: 300, md: "100%" },
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          py: 0,
          pt: 1,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                bgcolor: "#3D649D",
                borderRadius: 0.5,
                justifyContent: "space-between",
              }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ m: 1.5, py: 1, color: "white" }}
              >
                Map Status
              </Typography>
              {checked ? (
                <Typography
                  component={"div"}
                  variant="h6"
                  sx={{
                    bgcolor: "#008000",
                    color: "white",
                    borderRadius: 0.5,
                    p: 1,
                    m: 1.5,
                  }}
                >
                  Activated
                </Typography>
              ) : (
                <Typography
                  component={"div"}
                  variant="h6"
                  sx={{
                    bgcolor: "#C0C0C0",
                    borderRadius: 0.5,
                    p: 1,
                    m: 1.5,
                  }}
                >
                  Deactivated
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                bgcolor: "#3D649D",
                borderRadius: 0.5,
                justifyContent: "space-between",
                my: 1,
              }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ m: 1.5, py: 1, color: "white" }}
              >
                Vehicle Type
              </Typography>
              <Typography
                component={"div"}
                variant="h6"
                sx={{
                  bgcolor: "#C0C0C0",
                  borderRadius: 0.5,
                  p: 1,
                  m: 1.5,
                }}
              >
                Bike
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                bgcolor: "#3D649D",
                borderRadius: 0.5,
                justifyContent: "space-between",
              }}
            >
              <Typography
                component={"div"}
                variant="h6"
                sx={{ m: 1.5, py: 1, color: "white" }}
              >
                Approximate Time
              </Typography>
              <Typography
                component={"div"}
                variant="h6"
                sx={{
                  bgcolor: "#C0C0C0",
                  borderRadius: 0.5,
                  p: 1,
                  m: 1.5,
                }}
              >
                2 hours
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {checked === true && (
              <div>
                <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/vtmsmyks.json"
                  trigger="loop"
                  style={{ width: "180px", height: "180px" }}
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
                  style={{ width: "180px", height: "180px" }}
                  colors="outline:#121331,primary:#3080e8,secondary:#242424,tertiary:#e8b730,quaternary:#242424,quinary:#f9c9c0"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        component={"div"}
        sx={{
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: 10,
            borderColor: "black",
            my: 1,
            mb: 0,
            backgroundColor: "",
            color: "black",
          }}
        >
          Confirm path
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: 10,
            borderColor: "black",
            my: 1,
            mb: 0,
            backgroundColor: "",
            color: "black",
          }}
        >
          Back
        </Button>
      </CardActions>{" "}
    </Card>
  );
}
export default MapInfo;
