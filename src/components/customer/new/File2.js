import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { file2Data } from "./File2Data";

function File2() {
  return (
    <>
      <Box
        style={{
          background: `#E9EAEC`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container sx={{ my: 7, py: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {file2Data.map((props) => (
                <Grid item xs={12} sm={4} md={4} key={props.id}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                  >
                    <Card
                      sx={{
                        minWidth: 275,
                        maxWidth: 345,
                        boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt="Quik"
                          height="190"
                          image={props.image}
                        />
                      </motion.div>
                      <CardContent>
                        <Typography
                          varient="h4"
                          sx={{ mb: 1.5, textAlign: "center", fontSize: 24 }}
                          color="#4F5255"
                        >
                          <b>{props.title}</b>
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 14,
                            wordSpacing: 6,
                            textAlign: "center",
                          }}
                          color="text.secondary"
                        >
                          {props.content}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          sx={{
                            border: 1,
                            borderRadius: 10,
                          }}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default File2;
