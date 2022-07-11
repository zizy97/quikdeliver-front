import * as React from "react";
import { Grid } from "@mui/material"; //==============Components==================================
import about from "../../images/about.png";
//====import components
import { useGlobalContext } from "../customer/userContext";
//====Import 3rd party Library
import { motion } from "framer-motion";

function Aboutmain() {
  const { containerVarients } = useGlobalContext();

  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      style={{
        background: `url(${about})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 516,
        width: "100%",
      }}
    >
      <Grid container direction={"row"}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Grid>
      </Grid>
    </motion.div>
  );
}
export default Aboutmain;
