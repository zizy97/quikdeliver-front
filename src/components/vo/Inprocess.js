import React from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  Popper,
  Fade,
  Paper,
} from "@mui/material";

import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import { blue } from "@mui/material/colors";
import { DataGrid } from "@mui/x-data-grid";

const PopperPad = () => {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            {...bindToggle(popupState)}
            sx={{
              borderRadius: "18px",
              fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
            }}
          >
            View details
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  sx={{
                    width: "55vw",
                    marginLeft: -50,
                    boxShadow: "0 0 4px 0 rgba(0,0,0,0.6)",
                  }}
                >
                  <Typography variant="body2" color="initial">
                    ABC
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "PickupAddress",
    headerName: "Pickup Address",
    width: 280,
    editable: false,
  },
  {
    field: "DeliveryAddress",
    headerName: "Delivery Address",
    width: 280,
    editable: false,
  },
  {
    field: "more",
    headerName: "More...",
    description: "This column has button",
    sortable: false,
    width: 160,
    renderCell: () => {
      return (
        <div
          style={{
            padding: 2,
          }}
        >
          <PopperPad />
        </div>
      );
    },
  },
  {
    field: "accept",
    headerName: "Accept",
    description: "This column has button",
    sortable: false,
    width: 160,
    renderCell: () => {
      return (
        <div
          style={{
            padding: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "18px",
              fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
            }}
          >
            Accept
          </Button>
        </div>
      );
    },
  },
  {
    field: "decline",
    headerName: "Decline",
    description: "This column has button",
    sortable: false,
    width: 160,
    renderCell: () => {
      return (
        <div
          style={{
            padding: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "18px",
              fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
            }}
          >
            Decline
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 2,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 3,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 4,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 5,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 6,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 7,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 8,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
  {
    id: 9,
    sender: "Snow",
    reciever: "Jon",
    pickupAddress: "Moor's Street,Tbilishi, Georgia ",
    deliveryAddress: "Armor street, London, UK",
  },
];

const Processlist = () => {
  return (
    <Container sx={{ height: 500, width: "100%", mt: 10 }}>
      <DataGrid
        elevation={0}
        sx={{
          fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Container>
  );
};

const Inprocess = () => {
  return (
    <Container>
      <Grid
        sx={{
          margin: 0,
          width: "100%",
          mt: 8,
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: blue[900] }}>
          New Orders
        </Typography>
      </Grid>
      <hr />
      <Processlist />
    </Container>
  );
};

export default Inprocess;
