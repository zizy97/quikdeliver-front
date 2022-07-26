import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, InputAdornment, SvgIcon } from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
const columns = [
  { field: "id", headerName: "VEHICLE ID", width: 70 },
  { field: "vehiclename", headerName: "VEHICLE NAME", width: 160 },
  {
    field: "vehicleno",
    headerName: "VEHICLE NO",
    width: 160,
  },
  {
    field: "vehiclecolor",
    headerName: "VEHICLE COLOR	",
    width: 160,
  },
  {
    field: "vehiclefuel",
    headerName: "FUEL PER 1KM(L)",
    width: 160,
  },
];

const rows = [
  { id: 1, vehiclename: "Van", vehicleno: "CS1254" , vehiclecolor:"Black", vehiclefuel:12},
  { id: 2, vehiclename: "Car", vehicleno: "CAQ1243", vehiclecolor:"Black", vehiclefuel:12 },
  {id: 3,vehiclename: "Motor Bike", vehicleno: "HK1254", vehiclecolor:"Black", vehiclefuel:12},
  { id: 4, vehiclename: "Lorry", vehicleno: "KJ3452", vehiclecolor:"Black", vehiclefuel:12 },
  { id: 5,vehiclename: "Motor Bike",vehicleno: "TB4568", vehiclecolor:"Black", vehiclefuel:12 },
  { id: 6, vehiclename: "Lorry", vehicleno: "UT123H" ,vehiclecolor:"Black", vehiclefuel:12 },
];

export default function DataTable() {
  return (
   <div>
      <TextField
        sx={{ width: 400 }}
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
      <div  style={{ height: 400, width:"100%" }}>
      <DataGrid
        sx={{ borderColor: 'primary.main',mt:4,mr:4}}
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
