import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { file1Data } from "./File1Data";
import { motion } from "framer-motion";

function Item({ icon, title, content }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          boxShadow: `0px 2px 8px rgba(100, 116, 139, 0.25)`,
        }}
      >
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>{icon}</Typography>
          <Typography sx={{ mb: 1.5 }} color="black">
            <b>{title}</b>
          </Typography>
          <Typography
            sx={{ fontSize: 14, wordSpacing: 6 }}
            color="text.secondary"
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

function File1() {
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
              {file1Data.map((props) => (
                <Grid item xs={12} sm={4} md={4} key={props.id}>
                  <Item
                    id={props.id}
                    icon={props.icon}
                    title={props.title}
                    content={props.content}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default File1;
