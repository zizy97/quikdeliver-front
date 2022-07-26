import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, InputAdornment, SvgIcon } from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
const columns = [
  { field: "id", headerName: "DRIVER NO", width: 70 },
  { field: "drivername", headerName: "DRIVER NAME", width: 160 },
  {
    field: "drivernic",
    headerName: "DRIVER NIC",
    width: 160,
  },
  {
    field: "driveraddress",
    headerName: "DRIVER ADDRESS",
    width: 160,
  },
  {
    field: "driveremail",
    headerName: "DRIVER EMAIL",
    width: 160,
  },
];

const rows = [
  { id: 1, drivername: "Sadun Tharuka", drivernic: "981254842V" ,driveraddress:"No 12 Matale",driveremail:"test@gmail.com"},
  {id: 2,drivername: "Ruwan Hettiarchchi",drivernic: "861254842V",driveraddress:"No 12 Matale",driveremail:"test@gmail.com"},
  { id: 3,drivername: "Nadun Nethsara",drivernic: "781254842V",driveraddress:"No 12 Matale" ,driveremail:"test@gmail.com"},
  { id: 4, drivername: "Kamal Silva", drivernic: "831545123V",driveraddress:"No 12 Matale",driveremail:"test@gmail.com" },
  { id: 5, drivername: "Gimhana Perera",drivernic: "948554842V",driveraddress:"No 12 Matale",driveremail:"test@gmail.com"  },
  { id: 6, drivername: "Dasun Peris", drivernic: "715871713V",driveraddress:"No 12 Matale",driveremail:"test@gmail.com" },
];

export default function DataTable() {
  return (
    <div>
      <TextField
        sx={{ width: 400}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder="Search Vehicle"
        variant="outlined"
      />
       <div style={{ height:400, width: "100%" }}>
      <DataGrid
       
         sx={{borderColor: 'primary.main',mt:4,mr:4}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
