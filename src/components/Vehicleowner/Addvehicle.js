import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { Grid, Button, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 90, height: 200 },
  {
    field: "vehiclename",
    headerName: "Vehicle Name",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "vehicleno",
    headerName: "Vehicle No",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, vehiclename: "Snow", firstName: "Jon", vehicleno: 35 },
  { id: 2, vehiclename: "Lannister", firstName: "Cersei", vehicleno: 42 },
  { id: 3, vehiclename: "Lannister", firstName: "Jaime", vehicleno: 45 },
  { id: 4, vehiclename: "Stark", firstName: "Arya", vehicleno: 16 },
  { id: 5, vehiclename: "Targaryen", firstName: "Daenerys", vehicleno: null },
  { id: 6, vehiclename: "Melisandre", firstName: null, vehicleno: 150 },
  { id: 7, vehiclename: "Clifford", firstName: "Ferrara", vehicleno: 44 },
  { id: 8, vehiclename: "Frances", firstName: "Rossini", vehicleno: 36 },
  { id: 9, vehiclename: "Roxie", firstName: "Harvey", vehicleno: 65 },
];

function Addvehicle() {
  return (
    <div>
      <Grid>
        <Grid item lg={12} sm={12} md={6} xs={12}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={
                <AddCircleIcon
                  sx={{
                    fontSize: { xs: "28px", lg: "40px" },
                  }}
                />
              }
              sx={{
                marginLeft: "auto",
                width: { lg: 120 },
                height: { lg: 50 },
                mr: 3,
              }}
            >
              Add
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Typography
            sx={{
              fontSize: { lg: 20, md: 16, sm: 16 },
              fontWeight: "bold",
              color: "#737374",
            }}
          >
            Vehicle List
          </Typography>
          <Box sx={{ height: 550, width: "80%", mt: 2 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Addvehicle;
