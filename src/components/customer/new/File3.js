import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { file3Data } from "./File3Data";
import { motion } from "framer-motion";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  borderRadius: 1,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: "yellow" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  borderRadius: 1,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function File3(props) {
  const [expanded, setExpanded] = React.useState(props.id);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //====framer motion animation====
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemChild = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
              spacing={{ xs: 0, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {/* ===column 01=== */}
              <Grid item xs={12} sm={12} md={6} sx={{ pb: 0, mb: 0 }}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {file3Data
                    .filter((props) => props.id % 2 === 1)
                    .map((props) => (
                      <Grid item xs={12} key={props.id}>
                        <motion.div
                          variants={itemChild}
                          whileHover={{
                            x: -3,
                          }}
                        >
                          <Accordion
                            expanded={expanded === props.id}
                            onChange={handleChange(props.id)}
                          >
                            <AccordionSummary
                              aria-controls="panel1d-content"
                              id={props.id}
                              sx={{ bgcolor: "#3D649D", borderRadius: 0.6 }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 200,
                                  fontSize: 20,
                                  color: "white",
                                }}
                              >
                                {props.title}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                color="text.secondary"
                                sx={{ wordSpacing: 5 }}
                              >
                                {props.content}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </motion.div>
                      </Grid>
                    ))}
                </motion.div>
              </Grid>
              {/* ===column 01 ending===*/}
              {/* ===column 02=== */}
              <Grid item xs={12} sm={12} md={6}>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {file3Data
                    .filter((props) => props.id % 2 === 0)
                    .map((props) => (
                      <Grid item xs={12} key={props.id}>
                        <motion.div
                          variants={itemChild}
                          whileHover={{
                            x: -3,
                          }}
                        >
                          <Accordion
                            expanded={expanded === props.id}
                            onChange={handleChange(props.id)}
                          >
                            <AccordionSummary
                              aria-controls="panel1d-content"
                              id={props.id}
                              sx={{ bgcolor: "#3D649D", borderRadius: 0.6 }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 200,
                                  fontSize: 20,
                                  color: "white",
                                }}
                              >
                                {props.title}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                color="text.secondary"
                                sx={{ wordSpacing: 5 }}
                              >
                                {props.content}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </motion.div>
                      </Grid>
                    ))}
                </motion.div>
              </Grid>
              {/* ===column 02 ending=== */}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default File3;
