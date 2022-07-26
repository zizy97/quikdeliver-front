import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( orderno,
    orderdate,
    customername,
    customertelephone,
    pickupaddress, deliverydate,
    receivername,
    receivertelephone,
    deliveryaddress,
    vehiclename,
    vehicleno,
    weight,
    height) {
  return { 
    orderno,
    orderdate,
    customername,
    customertelephone,
    pickupaddress, deliverydate,
    receivername,
    receivertelephone,
    deliveryaddress,
    vehiclename,
    vehicleno,
    weight,
    height};
}

const rows = [
  createData("01","2021-07-04","Saman Perera","0718462159","No 12 Nagolla matale","2020-01-05","Nimal perera" ,"0748452123","no 12 Maharagama","van","qw1234",12,34),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#D4DCF7" }}>
            <TableCell>Order No</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Customer.Tel</TableCell>
            <TableCell align="left">Pickup Address</TableCell>
            <TableCell align="left">Delivery Date</TableCell>
            <TableCell align="left">Reciever</TableCell>
            <TableCell align="left">Receiver.Tel</TableCell>
            <TableCell align="left">Delivery Address</TableCell>
            <TableCell align="left">Vehicle Name</TableCell>
            <TableCell align="left">Vehicle No</TableCell>
            <TableCell align="left">Weight</TableCell>
            <TableCell align="left">Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderno}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderno}
              </TableCell>
              <TableCell align="left">{row.orderdate}</TableCell>
              <TableCell align="left">{row.customername}</TableCell>
              <TableCell align="left">{row.customertelephone}</TableCell>
              <TableCell align="left">{row.pickupaddress}</TableCell>
              <TableCell align="left">{row.deliverydate}</TableCell>
              <TableCell align="left">{row.receivername}</TableCell>
              <TableCell align="left">{row.receivertelephone}</TableCell>
              <TableCell align="left">{row.deliveryaddress}</TableCell>
              <TableCell align="left">{row.vehiclename}</TableCell>
              <TableCell align="left">{row.vehicleno}</TableCell>
              <TableCell align="left">{row.weight}</TableCell>
              <TableCell align="left">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
