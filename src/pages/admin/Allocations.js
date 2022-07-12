import { Helmet } from 'react-helmet';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import PackageService from '../../service/PackageService';
import AllocationService from '../../service/AllocationService';
import { useLocation } from 'react-router-dom';
import { AllocateIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import AllocationTestList from '../../components/allocation/AllocationTestList';

export default function Allocations() {
  const packageService = new PackageService();
  const allocationService = new AllocationService();
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [allocations, setAllocations] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [selectedDriver, setSelectedDriver] = useState();
  const [selectedDelivery, setSelectedDelivery] = useState();
  const [loading, setLoading] = useState(false);
  const [directedAllocation, setDirectedAllocation] = useState(false);

  const search = useLocation().search;

  // useEffect(async () => {
  //   const vehiclesRes = await packageService.findAllVehicles();
  //   const vehicleDrop = vehiclesRes.data
  //     .filter((vehicle) => !vehicle.currentAllocationStatus)
  //     .map((vehicle) => {
  //       return {
  //         ...vehicle,
  //         label: vehicle.registrationNumber
  //       };
  //     });
  //   console.log(vehicleDrop);
  //   setVehicles(vehicleDrop);
  // }, []);

  // useEffect(async () => {
  //   const driversRes = await packageService.findAllDrivers();
  //   const driversDrop = driversRes.data
  //     .filter((driver) => !driver.currentAllocationStatus)
  //     .map((driver) => {
  //       return {
  //         ...driver,
  //         label: driver.name
  //       };
  //     });
  //   console.log(driversDrop);
  //   setDrivers(driversDrop);
  // }, []);

  // useEffect(async () => {
  //   const deliveryPackageRes =
  //     await packageService.findNotAllocatedPackageDeliveryRequests();
  //   console.log(deliveryPackageRes.data);
  //   const deliveryPackageDrop = deliveryPackageRes.data.map((delivery) => {
  //     return {
  //       ...delivery,
  //       label: delivery.id
  //     };
  //   });
  //   console.log(deliveryPackageDrop);
  //   setDeliveries(deliveryPackageDrop);

  //   const deliveryId = new URLSearchParams(search).get('deliveryId');
  //   console.log(deliveryId);
  //   if (deliveryId) {
  //     setDirectedAllocation(true);
  //     const deli = deliveryPackageDrop.find((delivery) => {
  //       console.log(`${delivery.id} = ${deliveryId}`);
  //       return delivery.id == deliveryId;
  //     });
  //     console.log(deli);
  //     console.log(deli.id);
  //     setSelectedDelivery(deli);
  //   }
  // }, []);

  // useEffect(async () => {
  //   setLoading(true);
  //   const allocationsRes = await allocationService.findAllAllocations();
  //   console.log(allocationsRes.data);
  //   setAllocations(allocationsRes.data);
  //   setLoading(false);
  // }, []);

  const handleAllocation = async () => {
    setLoading(true);
    console.log(selectedDelivery);
    const allocation = {
      vehicle: selectedVehicle,
      driver: selectedDriver,
      packageDeliveryRequest: selectedDelivery
    };
    console.log(allocation);
    const allocationsRes = await allocationService.createAllocation(allocation);
    console.log(allocationsRes.data);
    setAllocations([...allocations, allocationsRes.data]);
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Allocations</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardHeader title="Dashboard Driver & Vehicle Allocation" />
              </Card>
            </Box>
          </Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Autocomplete
                  autoHighlight
                  disablePortal
                  onChange={(event, value) => setSelectedVehicle(value)}
                  id="combo-box-demo"
                  options={vehicles}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label={'Vehicle Number'} />
                  )}
                />
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Autocomplete
                  autoHighlight
                  disablePortal
                  onChange={(event, value) => setSelectedDriver(value)}
                  id="combo-box-demo"
                  options={drivers}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label={'Driver Name'} />
                  )}
                />
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                {directedAllocation ? (
                  <TextField
                    value={selectedDelivery?.id}
                    label={'Delivery Id'}
                    disabled
                  />
                ) : (
                  <Autocomplete
                    autoHighlight
                    disablePortal
                    onChange={(event, value) => {
                      setSelectedDelivery(value);
                      console.log(value);
                    }}
                    id="combo-box-demo"
                    options={deliveries}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label={'Delivery ID'} />
                    )}
                  />
                )}
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Tooltip title="Allocate">
                  <Button onClick={() => handleAllocation()}>
                    <AllocateIcon width="48" height="48" />
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </CardContent>
          {loading && (
            <CircularProgress
              size={100}
              sx={{
                color: 'primary',
                position: 'fixed',
                top: '50%',
                left: '47%',
                marginTop: '-12px',
                marginLeft: '-12px'
              }}
            />
          )}
          <Box sx={{ pt: 3 }}>
            {/* <AllocationList allocations={allocations} /> */}
            <AllocationTestList allocations={allocations} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
