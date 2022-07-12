import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, InputAdornment, SvgIcon } from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "vehiclename", headerName: "Vehicle name", width: 130 },
  {
    field: "vehicleno",
    headerName: "Vehicle No",
    width: 90,
  },
];

const rows = [
  { id: 1, vehiclename: "van", vehicleno: "35hj54" },
  {
    id: 2,
    vehiclename: "car",

    vehicleno: "35hj54",
  },
  {
    id: 3,
    vehiclename: "Motor Bike",

    vehicleno: "35hj54",
  },
  { id: 4, vehiclename: "Lorry", vehicleno: "35hj54" },
  {
    id: 5,
    vehiclename: "Motor Bike",

    vehicleno: "35hj54",
  },
  { id: 6, vehiclename: "Lorry", vehicleno: "35hj54" },
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
