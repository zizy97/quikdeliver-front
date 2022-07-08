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
import { Grid } from "@mui/material";
import { SeverityPill } from "../SeverityPill";
function createData(
  orderno,
  orderdate,
  customername,
  customertel,
  drivername,
  driverid,
  drivertel,
  status,
  price
) {
  return {
    orderno,
    orderdate,
    customername,
    customertel,
    drivername,
    driverid,
    drivertel,
    status,
    price,
    detailmore: [
      {
        date: "2020-01-05",
        Receivername: "Nimal perera",
        Receivertel: "0768452123",
        Paddress: "No 12 Nagolla matale",
        Daddress: "No 12 Nagolla matale",
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
        <TableCell align="left">{row.customertel}</TableCell>
        <TableCell align="left">{row.drivername}</TableCell>
        <TableCell align="left">{row.driverid}</TableCell>
        <TableCell align="left">{row.drivertel}</TableCell>
        <TableCell align="left">
          {" "}
          <SeverityPill
            color={
              (row.status === "Accepted" && "success") ||
              (row.status === "pending" && "error") ||
              "warning"
            }
          >
            {row.status}
          </SeverityPill>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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
                    <TableCell align="left">vehicle Name</TableCell>
                    <TableCell align="left">Vehicle No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detailmore.map((detailmoreRow) => (
                    <TableRow key={detailmoreRow.date}>
                      <TableCell component="th" scope="row" align="left">
                        {detailmoreRow.date}
                      </TableCell>
                      <TableCell align="left">
                        {detailmoreRow.Receivername}
                      </TableCell>
                      <TableCell align="left">
                        {detailmoreRow.Receivertel}
                      </TableCell>
                      <TableCell align="left">
                        {detailmoreRow.Daddress}
                      </TableCell>
                      <TableCell align="left">
                        {detailmoreRow.Paddress}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {detailmoreRow.height}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {detailmoreRow.weight}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {detailmoreRow.vehiclename}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {detailmoreRow.vehicleno}
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
    customertel: PropTypes.string.isRequired,
    detailmore: PropTypes.arrayOf(
      PropTypes.shape({
        Daddress: PropTypes.string.isRequired,
        Receivername: PropTypes.string.isRequired,
        Receivertel: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        Paddress: PropTypes.string.isRequired,
        vehiclename: PropTypes.string.isRequired,
        vehicleno: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
      })
    ).isRequired,
    orderno: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    driverid: PropTypes.string.isRequired,
    drivertel: PropTypes.string.isRequired,
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
    "Deliverd"
  ),
  createData(
    "02",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
  createData(
    "03",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
  createData(
    "04",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
  createData(
    "05",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "kumara dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
  createData(
    "06",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
  createData(
    "07",
    "2021-07-04",
    "Saman Perera",
    "0714512236",
    "Kumara Dissanayake",
    "958475123v",
    "0741245126",
    "Deliverd"
  ),
];

export default function Newrequest() {
  return (
    <div>
      <Grid
        container
        direction={"row"}
        sx={{
          mt: 5,
          ml: 5,
        }}
      >
        <Typography variant="h4">Orders History</Typography>
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
