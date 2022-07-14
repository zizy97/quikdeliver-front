/*eslint-disable */
import React, { useEffect } from 'react';
import { EditIcon, DeleteIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarColumnsButton
} from '@mui/x-data-grid';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DriverService from '../../service/DriverService';

export default function DriverListTest({ drivers, ...rest }) {
  console.log(drivers);
  const navigate = useNavigate();
  const [gridHeight, setGridHeight] = React.useState(
    window.innerHeight - window.innerHeight * 0.35
  );
  useEffect(() => {
    function handleResize() {
      setGridHeight(window.innerHeight - window.innerHeight * 0.35);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  const driverService = new DriverService();
  const handleDriverDelete = async (deliveryId) => {
    console.log(deliveryId);
    await driverService.deleteDriver(deliveryId);
    console.log('success');
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      align: 'center'
    },
    {
      field: 'name',
      headerName: 'Name',
      sortable: false,
      width: 200,
      align: 'left'
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 250
    },
    {
      field: 'license',
      headerName: 'License',
      width: 150
    },
    {
      field: 'ecNumber',
      headerName: 'Emergency Contact Number',
      width: 200
    },
    {
      field: 'actions',
      headerName: 'Actions',
      alignHeader: 'center',
      width: 200,
      sortable: false,
      align: 'left',
      disableExport: true,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <Button
              onClick={() => {
                navigate(`/admin/drivers/${params.id}/edit`);
              }}
            >
              <EditIcon color="#652341" width="32" height="32" />
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              onClick={() => {
                handleDriverDelete();
                navigate(`/admin/vehicles/${params.id}/delete`);
              }}
            >
              <DeleteIcon color="#652341" width="32" height="32" />
            </Button>
          </Tooltip>
        </>
      )
    }
  ];

  const rows = drivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    phone: '+94 ' + driver.telephoneNumber,
    email: driver.email,
    address: driver.address,
    license: driver.license,
    ecNumber: '+94 ' + driver.emergencyContactNumber,
    actions: driver.id
  }));
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport
          printOptions={{
            fields: [
              'id',
              'name',
              'phone',
              'email',
              'address',
              'license',
              'ecNumber'
            ]
          }}
        />
      </GridToolbarContainer>
    );
  }
  return (
    <div style={{ height: gridHeight }}>
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
