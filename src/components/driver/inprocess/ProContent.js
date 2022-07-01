import {React,useState} from 'react';
import { styled } from "@mui/system";

import {Box,Grid,Container,Stepper,Step,Button, Typography} from '@mui/material';
import {blue} from '@mui/material/colors';
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";

/*****************Stepper components**************** */
import Processes from './steps/Processes';
import ViewMap from './steps/ViewMap';
import Finalize from './steps/Finalize';
/************************************************** */

/***************Start of steppers*************** */

const Steppers = () => {

  const steps = [
    'Order Details',
    'ViewMap',
    'Finish',
  ];

const [step,setStep] = useState(0);


const ColorlibStepLabel = styled(StepLabel)(() => ({
    [`& .${stepLabelClasses.label}`]: {
      [`&.${stepLabelClasses.completed}`]: {
        color: "blue",
      },
      [`&.${stepLabelClasses.active}`]: {
        color: "blue",
      },
      color: "gray",
      fontSize:{xs:'12px',sm:'14px',md:'15px',lg:'16px'}
    },
  })
);

  /**************backward function*************** */
  const goBack = () => {
    setStep(step-1);
  };
/**************next function*************** */
  const goForward = () => {
    setStep(step+1);
  };

/*************1st Step*********** */

  if (step === 0){
    return (
        <Container
          sx={{
            padding:0,
            paddingTop:8
          }}
        >
          <Box sx={{ bgcolor: "",}}>
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <ColorlibStepLabel {...labelProps} sx={{ color: "white"}}>
                      {label}
                    </ColorlibStepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <Box
              container
              sx={{
                height: 360,
                margin:"0 auto",
              }}
            >
              <Processes/>
            </Box>

            <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                paddingTop:10
              }}
            >
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                disabled={step === 0}
                onClick={goBack}
              >Back</Button>
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                onClick={goForward}
              >Next</Button>
            </Box>
          </Box>
        </Container>
    );
  }

/*************2nd Step*********** */

  else if (step === 1) {
    return (
      <Container
        sx={{
            padding:2,
            paddingTop:8
          }}
      >
        <Box sx={{ bgcolor: "",}}>
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <ColorlibStepLabel {...labelProps}>
                      {label}
                    </ColorlibStepLabel>
                  </Step>
                );
              })}
              </Stepper>
            
            <Box container>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                width="100%"
                height="100%"
              >
                <ViewMap/>
              </Grid>
            </Box>
            <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                paddingTop:10
              }}
            >
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                onClick={goBack}
              >Back</Button>
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                onClick={goForward}
              >Next</Button>
            </Box>
          </Box>
        </Container>
    );
  }

/*************3rd Step*********** */

  else if (step === 2) {
    return (
      <Container
        maxWidth="xl"
        maxHeignt="100%"
        sx={{
          padding:2,
          paddingTop:8
        }}
      >
          <Box sx={{ bgcolor: "", height: "100%", width: "100%" }}>
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                
                return (
                  <Step key={label} {...stepProps}>
                    <ColorlibStepLabel {...labelProps}>
                      {label}
                    </ColorlibStepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <Box
              container
              sx={{
                height: 360,
                m: 4,
              }}
            >
              <Finalize/>
            </Box>
            <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                paddingTop:10
              }}
            >
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                disabled={step === 0}
                onClick={goBack}
              >Back</Button>
              <Button
                sx={{
                  color:'blue',
                  fontSize:'15px',
                  fontWeight:'bold'
                }}
                disabled={step === 2}
                onClick={goForward}
              >Next</Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                  sx={{
                    fontSize:'15px',
                    fontWeight:'bold'
                  }}
                  disabled={step === 0}
                  onClick={goBack}
                >Finish</Button>
            </Box>
          </Box>
        </Container>
    );
  }
}
const ProContent = () =>
{
    return(
      <Container>
          <Grid
            sx={{
              margin:0,
              padding:'6px',
              width:"100%",
              mt:8,
              mb:2,
            }}
          >
            <Typography variant="h5" sx={{fontWeight:'bold',color:blue[900]}}>In process</Typography>
          </Grid>
          <hr/>
          <Grid item xs={12}>
            <Box
                elevation={0}
                sx={{
                  flexGrow:1,
                  width:'100%',
                  margin:0,
                  padding:0
                }}
            >
                <Steppers/>
            </Box>
          </Grid>
        </Container>
    );
};

export default ProContent;