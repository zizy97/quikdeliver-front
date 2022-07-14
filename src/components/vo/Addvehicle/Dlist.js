import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, InputAdornment, SvgIcon } from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "drivername", headerName: "Driver name", width: 150 },
  {
    field: "drivernic",
    headerName: "Driver NIC",
    width: 150,
  },
];

const rows = [
  { id: 1, drivername: "saman perera", drivernic: "961254842V" },
  {
    id: 2,
    drivername: "saman perera",

    drivernic: "961254842V",
  },
  {
    id: 3,
    drivername: "saman perera",

    drivernic: "961254842V",
  },
  { id: 4, drivername: "saman perera", drivernic: "968545123V" },
  {
    id: 5,
    drivername: "saman perera",

    drivernic: "961254842V",
  },
  { id: 6, drivername: "saman perera", drivernic: "35hj54" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <TextField
        sx={{ width: 300, p: 1 }}
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
