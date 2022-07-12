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
import { Grid, Button } from "@mui/material";
import { SeverityPill } from "../SeverityPill"; //========Status changing needed=======//
import { useNavigate } from "react-router-dom";
function createData(
  orderno,
  orderdate,
  customername,
  customertelephone,
  drivername,
  drivernic,
  drivertelephone,
  status
) {
  return {
    orderno,
    orderdate,
    customername,
    customertelephone,
    drivername,
    drivernic,
    drivertelephone,
    status,
    deliverydetails: [
      {
        deliverydate: "2020-01-05",
        receivername: "Nimal perera",
        receivertelephone: "0768452123",
        pickupaddress: "No 12 Nagolla matale",
        deliveryaddress: "No 12 Nagolla matale",
        vehiclename: "nissan",
        vehicleno: "QW2018",
        height: 50,
        weight: 200,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  //====================================Change Buttons===========================//
  const navigate = useNavigate();
  const Change = (
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
      Change
    </Button>
  );
  const Changedisable = (
    <Button
      disabled
      variant="contained"
      size="small"
      sx={{
        borderRadius: 40,
      }}
    >
      Change
    </Button>
  );
  //====================================Change Buttons===========================//
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
        <TableCell align="left">{row.drivername}</TableCell>
        <TableCell align="left">{row.drivernic}</TableCell>
        <TableCell align="left">{row.drivertelephone}</TableCell>
        <TableCell align="left">
          {" "}
          <SeverityPill
            color={
              (row.status === "Accepted" && "success") ||
              (row.status === "pending" && "error") ||
              (row.status === "canceled" && "info") ||
              "warning"
            }
          >
            {row.status}
          </SeverityPill>
        </TableCell>
        <TableCell align="center">
          {" "}
          {row.status === "Accepted" ? Changedisable : Change}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Typography variant="h6" gutterBottom component="div">
                Delivery Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ height: 30 }}>
                  <TableRow sx={{ backgroundColor: "grey" }}>
                    <TableCell align="left">Delivery Date</TableCell>
                    <TableCell align="left">Reciever's Name</TableCell>
                    <TableCell align="left">Reciever's Tel.No</TableCell>
                    <TableCell align="left">Delivery Address</TableCell>
                    <TableCell align="left">Pickup Address</TableCell>
                    <TableCell align="left">Height</TableCell>
                    <TableCell align="left">Weight</TableCell>
                    <TableCell align="left">veh.Name</TableCell>
                    <TableCell align="left">Veh.No</TableCell>
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
                        {deliverydetailsRow.pickupaddress}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {deliverydetailsRow.height}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {deliverydetailsRow.weight}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {deliverydetailsRow.vehiclename}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {deliverydetailsRow.vehicleno}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderdate: PropTypes.string.isRequired,
    drivername: PropTypes.string.isRequired,
    customername: PropTypes.string.isRequired,
    customertelephone: PropTypes.string.isRequired,
    deliverydetails: PropTypes.arrayOf(
      PropTypes.shape({
        deliveryaddress: PropTypes.string.isRequired,
        receivername: PropTypes.string.isRequired,
        receivertelephone: PropTypes.string.isRequired,
        deliverydate: PropTypes.string.isRequired,
        pickupaddress: PropTypes.string.isRequired,
        vehiclename: PropTypes.string.isRequired,
        vehicleno: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
      })
    ).isRequired,
    orderno: PropTypes.string.isRequired,
    drivernic: PropTypes.string.isRequired,
    drivertelephone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "01",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "pending"
  ),
  createData(
    "02",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "canceled"
  ),
  createData(
    "03",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "pending"
  ),
  createData(
    "04",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "kumara Dissanayake",
    "958475123v",
    "0741245126",
    "pending"
  ),
  createData(
    "05",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "kumara dissanayake",
    "958475123v",
    "0741245126",
    "Accepted"
  ),
  createData(
    "06",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "pending"
  ),
  createData(
    "07",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Accepted"
  ),
];

export default function Newrequest() {
  return (
    <div>
      <Grid
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" sx={{ ml: 4, mt: 4 }}>
          Orders in Process
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
            <TableHead sx={{ height: 80, backgroundColor: "#D4DCF7" }}>
              <TableRow>
                <TableCell />
                <TableCell>Order No</TableCell>
                <TableCell align="left">Order Date</TableCell>
                <TableCell align="left">Customer Name</TableCell>
                <TableCell align="left">Customer Tel.No</TableCell>
                <TableCell align="left">Driver Name</TableCell>
                <TableCell align="left">Driver ID</TableCell>
                <TableCell align="left">Driver Tel.No</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Change Vehicle/Driver</TableCell>
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
