import React from "react"; //react
//--MUI--
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
//--MUI--

function TitleText({ marginBtm, text1, text2, text3, text4, text5, Icon }) {
  const containerRef = React.useRef(null);

  
  return (
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
            varient="container"
            ref={containerRef}
            elevation={0}
            sx={{
              bgcolor: "transparent",
            }}
          >
            <Box ref={containerRef} varient="container" textAlign="center">
              <Typography
                color="text.primary"
                component="div"
                sx={{
                  px: 10,
                  pt: 0,
                  fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                  fontWeight: 190,
                }}
              >
                {text1}
                <b>{text2}</b>
              </Typography>
            </Box>
          </Card>
          <Card
            varient="container"
            ref={containerRef}
            elevation={0}
            sx={{
              bgcolor: "transparent",
              textAlign: "center",
              mb: marginBtm ,
              p: 2,
              mt: 0,
              pt: 0,
            }}
          >
            <Box ref={containerRef}>
              <Typography
                color="text.primary"
                component="div"
                sx={{
                  px: 10,
                  pt: 0,
                  fontSize: { lg: 35, md: 35, sm: 30, xs: 25 },
                  fontWeight: 190,
                }}
              >
                {text3} <b>{text4}</b>
                {text5}
              </Typography>
            </Box>
            {Icon}
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
}

export default TitleText;
