/*eslint-disable */
import React from 'react';
import moment from 'moment';
import {
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid,GridToolbarContainer,GridToolbarExport,GridToolbarDensitySelector,GridToolbarFilterButton,GridToolbarColumnsButton } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import { ViewIcon } from '../common/icons/Icons';

export default function ReportTableTest({ allocations, ...rest }) {
  const navigate = useNavigate();
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      align: 'center'
    },
    {
      field: 'dDate',
      headerName: 'Delivery Date',
      sortable: false,
      width: 150,
      align: 'left'
    },
    {
      field: 'delivery',
      headerName: 'Delivery',
      width: 100,
      align: 'center',
      disableExport: true,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <Button
              onClick={() => {navigate(`/admin/delivery/requests/${params.value.id}`)}}
            >
              <ViewIcon color="#652341" width="32" height="32" />
            </Button>
          </Tooltip>
        </>
      )
    },
    {
      field: 'driver',
      headerName: 'Driver Name',
      width: 200
    },
    {
      field: 'vehicle',
      headerName: 'Vehicle',
      width: 250
    },
    {
      field: 'hours',
      headerName: 'Hours',
      width: 150,
      align: 'center'
    },
    {
      field: 'wage',
      headerName: 'Wage (/Hr)',
      width: 200,
      align: 'center'
    },
    {
      field: 'subTotal',
      headerName: 'Sub Total',
      width: 150,
      align: 'right'
    }
  ];

  const rows = allocations.map((allocation) => ({
    id: allocation.id,
    dDate: moment(allocation.deliveryDate).format('DD/MM/YYYY'),
    delivery: allocation.packageDeliveryRequest,
    driver: allocation.driver.name,
    vehicle:
      allocation.vehicle.registrationNumber +
      '-' +
      allocation.vehicle.vehicleDescription,
    hours: allocation.deliveryDuration,
    wage: allocation.driver.hourlyWage,
    subTotal: parseFloat(allocation.deliveryDuration * allocation.driver.hourlyWage).toFixed(2)
  }));
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport printOptions={{ fields: ['id', 'dDate','driver','vehicle','hours','wage','subTotal'] }}/>
      </GridToolbarContainer>
    );
  }
  return (
    <div style={{ height: '500px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  );
}
