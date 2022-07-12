/*eslint-disable*/
import React,{useEffect} from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { changeStatus } from '../../utils/changestatus';
import { Tooltip } from '@mui/material';
import { DataGrid,GridToolbarContainer,GridToolbarExport,GridToolbarDensitySelector,GridToolbarFilterButton,GridToolbarColumnsButton } from '@mui/x-data-grid';
import { ViewIcon } from '../common/icons/Icons';
import {
  Button,
} from "@mui/material";

export default function AllocationTestList({ allocations, ...rest }) {
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
      headerName: 'Delivery Id',
      width: 120,
      align: 'center'
    },
    {
      field: 'pickupDate',
      headerName: 'Pickup Date',
      sortable: false,
      width: 160,
      align: 'center'
    },
    {
      field: 'deliverName',
      headerName: 'Driver Name',
      width: 200,

    },
    {
      field: 'vrNumber',
      headerName: 'Vehicle Registration No.',
      width: 200,
      sortable: false,
      align: 'center'
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      sortable: false,
      align: 'center'
    },
    {
      field: 'actions',
      headerName: 'Actions',
      alignHeader: 'center',
      width: 160,
      sortable: false,
      align: 'center',
      disableExport: true,
      renderCell: (params) => (
        <>
          <Tooltip title="View">
            <span>
              <Button
                sx={{ border: 'none' }}
                onClick={() => {
                  navigate(`/admin/delivery/requests/${params.value.id}`);
                }}
              >
                <ViewIcon color="#652341" width="32" height="32" />
              </Button>
            </span>
          </Tooltip>
        </>
      )
    }
  ];
  const rows = allocations.map((allocation) => ({
    id: allocation.id,
    pickupDate: moment(allocation.packageDeliveryRequest.pickupDate).format('DD/MM/YYYY'),
    deliverName: allocation.driver.name,
    vrNumber: allocation.vehicle.registrationNumber,
    status: changeStatus(allocation.packageDeliveryRequest.status),
    actions: allocation.packageDeliveryRequest
  }));
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport printOptions={{ fields: ['id', 'pickupDate','deliverName','vrNumber','status'] }}/>
      </GridToolbarContainer>
    );
  }
  return (
    <div style={{ height: gridHeight}}>

      <DataGrid
        rows={rows}
        // hideFooterPagination={true}
        columns={columns}
        disableColumnMenu
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  );
}
