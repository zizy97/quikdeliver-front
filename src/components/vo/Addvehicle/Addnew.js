import React, { useState } from 'react';
//import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dlist from "./Dlist";
import { useNavigate } from "react-router-dom";
export default function Addnew() {
  const navigate = useNavigate();
  /**===================================================Image Upload=========================================================== */
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  /**const removeSelectedImage = () => {
    setSelectedImage();
  };*/
  /**===================================================Image Upload=========================================================== */
  return (
    <Grid container direction={"row"}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
      <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 2,
              width: { lg: "40ch", md: "40ch", sm: "40ch", xs: "26ch" },
            },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Enter vehicle Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter Vehicle Color"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Enter Fuel Per 1km(L)"
            variant="outlined"
            type="number"
          />
            <TextField
            id="outlined-basic"
            label="Enter Cost Per 1Km"
            variant="outlined"
            type="number"
          />
            <TextField
            id="outlined-basic"
            label="Enter Other Details"
            variant="outlined"
            type="number"
          />
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{p:8}}>
            <Button variant="contained" component="label" sx={{backgroundColor:'#708090'}}>
              Upload Vehicle Image
              <input hidden accept="image/*" multiple type="file"  onChange={imageChange} />
            </Button>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{pl:8,pr:8}}>
        <Box sx={{p:1,border: '1px dashed grey',width:{lg:800,md:"100%",sm:"100%",xs:"100%"},height:400 }}>
      {selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
              height="380px" 
              width="100%"
            />
          </div>
        )}
        </Box>
      </Grid>
         
           {/**   <Button variant="contained" sx={{ backgroundColor: "error.main",ml:30 }}component="label" onClick={removeSelectedImage}>
              Remove Image
            </Button>*/}
      <Grid item lg={12} md={12} sm={12} xs={12} sx={{p:8}}>
          <Typography   color="primary.main" variant="h6" sx={{mb:3}}>
            Select Drivers to the vehicle from Driver list
          </Typography>
          <Dlist />
          <Box>
          <Button
            variant="contained"
            sx={{
              textAlign: "right",
              mt: 5,
              borderRadius: 40,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Add Vehicle
          </Button>
          <Button
            onClick={() => {
              navigate("/vo/vehicles");
            }}
            variant="contained"
            sx={{
              textAlign: "right",
              borderRadius: 40,
              ml: 1,
              mt: 5,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
