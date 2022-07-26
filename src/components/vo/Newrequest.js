import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid, Button, TextField} from "@mui/material";
//=============model Dialolg box==========================================//
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//===========model Dialog box=============================================//
import { useNavigate } from "react-router-dom";

function createData(
  orderno,
  orderdate,
  customername,
  customertelephone,
  pickupaddress
) {
  return {
    orderno,
    orderdate,
    customername,
    customertelephone,
    pickupaddress,
    deliverydetails: [
      {
        deliverydate: "2020-01-05",
        receivername: "Nimal perera",
        deliveryaddress: "No 12 Nagolla matale",
        receivertelephone: "0748452123",
        vehiclename: "Van-Nissan",
        vehicleno: "45PO12",
        weight: 100,
        height: 20,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  //=====================model Diaolg box===========================================//
  const [opend, setOpendialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpendialog(true);
  };

  const handleClose = () => {
    setOpendialog(false);
  };
  //=====================model Diaolg box===========================================//
  const navigate = useNavigate();
  //====================================Accept Decline Buttons===========================//
  const Accept = (
    <Button
      onClick={() => {
        navigate("/orderchange");
      }}
      variant="contained"
      size="small"
      sx={{
        borderRadius: 40,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      Accept
    </Button>
  );

  const Delete = (
    <Button
      onClick={handleClickOpen}
      variant="contained"
      size="small"
      sx={{
        borderRadius: 40,
        backgroundColor: "error.main",
        "&:hover": {
          backgroundColor: "error.main",
        },
      }}
    >
      Decline
    </Button>
  );
  //====================================Accept Decline Buttons===========================//

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderno}
        </TableCell>
        <TableCell align="left">{row.orderdate}</TableCell>
        <TableCell align="left">{row.customername}</TableCell>
        <TableCell align="left">{row.customertelephone}</TableCell>
        <TableCell align="left">{row.pickupaddress}</TableCell>
        <TableCell align="left">{Accept}</TableCell>

        <TableCell align="left">{Delete}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Delivery Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ height: 30 }}>
                  <TableRow sx={{ backgroundColor: "#D4DCF7" }}>
                    <TableCell align="left">Delivery Date</TableCell>
                    <TableCell align="left">Reciever's Name</TableCell>
                    <TableCell align="left">Reciever's Tel.No</TableCell>
                    <TableCell align="left">Delivery Address</TableCell>
                    <TableCell align="left">Veh.Name</TableCell>
                    <TableCell align="left">Veh.No</TableCell>
                    <TableCell align="left">Height</TableCell>
                    <TableCell align="left">Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.deliverydetails.map((deliverydetailsRow) => (
                    <TableRow key={deliverydetailsRow.deliverydate}>
                      <TableCell component="th" scope="row" align="left">
                        {deliverydetailsRow.deliverydate}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.receivername}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.receivertelephone}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.deliveryaddress}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.vehiclename}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.vehicleno}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.weight}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.height}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {/**========================================================================open model Dialog===================================== */}
      <Dialog open={opend} onClose={handleClose} sx={{ mt: { xs: 5 } }}>
        <DialogTitle>Are you sure to delete the Order ? if yes</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ pb: 2 }}>Why?</DialogContentText>
          <TextField
            id="outlined-multiline-static"
            label="Enter the Reason"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            sx={{
              borderRadius: 30,
              backgroundColor: "error.main",
              "&:hover": {
                backgroundColor: "error.main",
              },
            }}
          >
            Decline
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            sx={{
              borderRadius: 30,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/**========================================================================open model Dialog===================================== */}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderdate: PropTypes.string.isRequired,
    pickupaddress: PropTypes.string.isRequired,
    customername: PropTypes.string.isRequired,
    customertelephone: PropTypes.string.isRequired,
    deliverydetails: PropTypes.arrayOf(
      PropTypes.shape({
        deliveryaddress: PropTypes.string.isRequired,
        receivername: PropTypes.string.isRequired,
        receivertelephone: PropTypes.string.isRequired,
        deliverydate: PropTypes.string.isRequired,
        vehiclename: PropTypes.string.isRequired,
        vehicleno: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      })
    ).isRequired,
    orderno: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "01",
    "2021-07-04",
    "Saman Perera",
    "0718462159",
    "No 12 Nagolla matale",
    500,
    100
  ),
  
];

export default function Newrequest() {
  return (
    <div>
      <Grid
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor:"white",
          p:{lg:4,xs:4},
          mt:{lg:10,xs:5},
          ml:{lg:4,xs:2},
          mr:{lg:4,xs:2},
          borderRadius:2
        }}
      >
       <Typography variant="h3" >
          NEW ORDER REQUESTS
        </Typography>
      </Grid>

      <Grid
        container
        direction={"row"}
        sx={{
          p: { xs: 2, sm: 2, md: 2, lg: 4 },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead sx={{ height: 80, backgroundColor:"#D4DCF7" }}>
              <TableRow>
                <TableCell />
                <TableCell>Order No</TableCell>
                <TableCell align="left">Order Date</TableCell>
                <TableCell align="left">Customer Name</TableCell>
                <TableCell align="left">Customer Tel.No</TableCell>
                <TableCell align="left">Pick up Address</TableCell>
                <TableCell align="left">Accept</TableCell>
                <TableCell align="left">Decline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.orderno} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
