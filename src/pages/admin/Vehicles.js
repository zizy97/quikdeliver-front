import { Helmet } from 'react-helmet';
import {
  Box, Button, Card, CardActions, CardContent, CardHeader,
  CircularProgress,
  Container,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import VehicleService from '../../service/VehicleService';
import { Link } from 'react-router-dom';
import { AddVehicleIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import VehicalTestList from '../../components/vehicles/VehicalTestList';

export default function Vehicles() {
    const vehicleService = new VehicleService();
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(async ()=>{
    //     setLoading(true);
    //     const vehicles = await vehicleService.getVehicles();
    //     setVehicles(vehicles.data);
    //     setLoading(false);
    // }, []);
    return (
        <>
            <Helmet>
               <title>Vehicles</title>
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
                  <CardHeader style = {{display: 'inline-block'}}
                    title='Vehicles'
                  />
                  <CardActions style = {{display: 'inline-block', float: 'right'}} >
                   <Tooltip title="Add Vehicle"><Button component={Link} to={'/admin/vehicles/new'} size="small" ><AddVehicleIcon  width="40" height="40" /></Button></Tooltip>
                </CardActions>
                </Card>
              </Box>
            </Box>
            <CardContent>


            </CardContent>
            <Box sx={{ pt: 3 }}>
              <VehicalTestList vehicles={vehicles} />
              {loading && (
                  <CircularProgress
                  size={100}
                  sx={{
                      color: 'primary',
                      position: 'fixed',
                      top: '50%',
                      left: '47%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                  }}
                  />
              )}
            </Box>
          </Container>
        </Box>
        </>
    )
};

