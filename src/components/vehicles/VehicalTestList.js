/*eslint-disable*/
import React,{useEffect} from 'react';
import { EditIcon, DeleteIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import {
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { changeStatus } from '../../utils/changestatus';
import { DataGrid,GridToolbarContainer,GridToolbarExport,GridToolbarDensitySelector,GridToolbarFilterButton,GridToolbarColumnsButton } from '@mui/x-data-grid';

export default function VehicalTestList({ vehicles, ...rest }) {
  const navigate = useNavigate();
  const [gridHeight, setGridHeight] = React.useState(window.innerHeight - window.innerHeight * 0.35);
  useEffect(() => {
    function handleResize() {
      setGridHeight(window.innerHeight - window.innerHeight * 0.35);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      align: 'center',
    },
    {
      field: 'registrationNumber',
      headerName: 'Registration Number',
      sortable: false,
      width: 300,
      align: 'left'
    },
    {
      field: 'description',
      headerName: 'Description',
      sortable: false,
      width: 400,
      align: 'left'
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 200
    },
    {
      field: 'actions',
      headerName: 'Actions',
      alignHeader: 'center',
      width: 250,
      sortable: false,
      align: 'left',
      disableExport: true,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <Button onClick={()=>{navigate(`/admin/vehicles/${params.id}/edit`)}}>
              <EditIcon color="#652341" width="32" height="32" />
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              onClick={() => {navigate(`/admin/vehicles/${params.id}/delete`)}}
            >
              <DeleteIcon color="#652341" width="32" height="32" />
            </Button>
          </Tooltip>
        </>
      )
    }
  ];
  const rows = vehicles.map((vehicle) => ({
    id: vehicle.id,
    registrationNumber: vehicle.registrationNumber,
    description: vehicle.vehicleDescription,
    model: vehicle.model,
    status: changeStatus(vehicle.type),
    actions: vehicle.id
  }));
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport printOptions={{ fields: ['id', 'registrationNumber','description','model','status'] }}/>
      </GridToolbarContainer>
    );
  }
  return <div style={{ height: gridHeight}}>
    <DataGrid

        rows={rows}
        columns={columns}
        disableColumnMenu
        components={{
          Toolbar: CustomToolbar
        }}
      />
  </div>;
}
