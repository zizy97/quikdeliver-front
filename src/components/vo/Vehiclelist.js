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
import { Grid, Button, TextField } from "@mui/material";
//=============model Dialolg box==========================================//
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//===========model Dialog box=============================================//
import { useNavigate, Link } from "react-router-dom";
function createData(
  vehicleid,
  regdate,
  vehiclename,
  vehicleno,
  vehiclecolor,
  vehiclefuel,
  vehicleprofile
) {
  return {
    vehicleid,
    regdate,
    vehiclename,
    vehicleno,
    vehiclecolor,
    vehiclefuel,
    vehicleprofile,
    deliverydetails: [
      {
        deliverydate: "2020-01-05",
        receivername: "Nimal perera",
        deliveryaddress: "No 12 Nagolla matale",
        receivertelephone: "0748452123",
        drivername: "Van-Nissan",
        drivernic: "85412567v",
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
  const Edit = (
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
      Edit
    </Button>
  );

  const Remove = (
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
      Remove
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
          {row.vehicleid}
        </TableCell>
        <TableCell align="left">{row.regdate}</TableCell>
        <TableCell align="left">
          {" "}
          <Link style={{ textDecoration: "none" }} to={row.vehicleprofile}>
            {row.vehiclename}
          </Link>
        </TableCell>
        <TableCell align="left">{row.vehicleno}</TableCell>
        <TableCell align="left">{row.vehiclecolor}</TableCell>
        <TableCell align="left">{row.vehiclefuel}</TableCell>
        <TableCell align="left">{Edit}</TableCell>

        <TableCell align="left">{Remove}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Previous Delivery
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ height: 30 }}>
                  <TableRow sx={{ backgroundColor: "grey" }}>
                    <TableCell align="left">Delivery Date</TableCell>
                    <TableCell align="left">Reciever's Name</TableCell>
                    <TableCell align="left">Reciever's Tel.No</TableCell>
                    <TableCell align="left">Delivery Address</TableCell>
                    <TableCell align="left">Driver Name</TableCell>
                    <TableCell align="left">Driver NIC</TableCell>
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
                        {deliverydetailsRow.drivername}
                      </TableCell>
                      <TableCell align="left">
                        {deliverydetailsRow.drivernic}
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
        <DialogTitle>Are you sure to Remove the vehicle ? if yes</DialogTitle>
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
            Remove
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
    regdate: PropTypes.string.isRequired,
    vehicleno: PropTypes.string.isRequired,
    vehiclename: PropTypes.string.isRequired,
    vehiclecolor: PropTypes.string.isRequired,
    vehiclefuel: PropTypes.number.isRequired,
    vehicleprofile: PropTypes.string.isRequired,
    deliverydetails: PropTypes.arrayOf(
      PropTypes.shape({
        deliveryaddress: PropTypes.string.isRequired,
        receivername: PropTypes.string.isRequired,
        receivertelephone: PropTypes.string.isRequired,
        deliverydate: PropTypes.string.isRequired,
        drivername: PropTypes.string.isRequired,
        drivernic: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      })
    ).isRequired,
    vehicleid: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "01",
    "2021-07-04",
    "Lorry",
    "QW23",
    "Black",
    2,
    "http://localhost:3000/vo/drivers"
  ),
  createData(
    "02",
    "2021-07-04",
    "Van",
    "QW23",
    "Black",
    1,
    "http://localhost:3000/vo/drivers"
  ),
];

export default function Newrequest() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          p: { xs: 2, sm: 2, md: 2, lg: 4 },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead sx={{ height: 80, backgroundColor: "#D4DCF7" }}>
              <TableRow>
                <TableCell />
                <TableCell>Vehicle ID</TableCell>
                <TableCell align="left">Reg.Date</TableCell>
                <TableCell align="left">Vehicle Name</TableCell>
                <TableCell align="left">Vehicle No</TableCell>
                <TableCell align="left">Vehicle Color</TableCell>
                <TableCell align="left">Fuel per 1km(L)</TableCell>
                <TableCell align="left">Edit</TableCell>
                <TableCell align="left">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.vehicleid} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
