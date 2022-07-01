import * as React from 'react';
import {Container,Button, Typography, Popper, Fade, Paper, Grid} from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

import { DataGrid } from '@mui/x-data-grid';


const PopperPad = () => {
  return(
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)} sx={{borderRadius:'18px'}}>
            View details
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}>

                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'pickupAddress',
    headerName: 'Pickup Address',
    width: 280,
    editable: true,
  },
  {
    field: 'deliveryAddress',
    headerName: 'Delivery Address',
    width: 280,
    editable: true,
    renderCell: (params) => {
      return (
        <div style={{
          display:'flex',
          flexWrap:'wrap'

        }}>
          <Typography>
            {params.value}
          </Typography>
        </div>
      );
    }
  },
  {
    field: 'more',
    headerName: 'More...',
    description: 'This column has button',
    sortable: false,
    width: 160,
    renderCell: () => {
      return (
        <div style={{
          padding:2,
        }}>
            <PopperPad/>
        </div>
      );
    }
  },
];

const rows = [
  { id: 1, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 2, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 3, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 4, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 5, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 6, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 7, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 8, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  { id: 9, sender: 'Snow', reciever: 'Jon', pickupAddress:'Moor\'s Street,Tbilishi, Georgia ', deliveryAddress:'Armor street, London, UK'},
  
];  

const Processlist = () => {
  return (
    <Container sx={{ height: 400, width: '100%' ,m:0,mt:5}}>
      <DataGrid
        elevation={3}
        sx={{
          bgcolor:'rgba(255,255,255,0.8)',
          fontSize:'15px',
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Container>
  );
}

const Processes = () => {
    return (
        <Container 
          sx={{
            width:"100%",
            height:"100vh",
          }}
        >
           <Grid
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:"center",
                    mt:8,
                }}
            >
              <Processlist/>
            </Grid>
        </Container>
    );
};

export default Processes;