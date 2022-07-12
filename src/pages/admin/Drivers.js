import { Helmet } from 'react-helmet';
import {
  Box, Button, Card, CardActions, CardContent, CardHeader,
  CircularProgress,
  Container
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DriverService from '../../service/DriverService';
import { useNavigate } from 'react-router-dom';
import { AddUserIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import DriverListTest from '../../components/driver/DriverListTest';

export default function Drivers() {
  const navigate = useNavigate();
    const driverService = new DriverService();
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(async ()=>{
    //     setLoading(true);
    //     const drivers = await driverService.getDrivers();
    //     setDrivers(drivers.data);
    //     setLoading(false);
    // }, []);

    return (
        <>
            <Helmet>
               <title>Drivers</title>
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
                    title='Drivers'
                  />
                  <CardActions style = {{display: 'inline-block', float: 'right'}} >
                    <Tooltip title="Add Driver"><Button onClick={()=>{navigate('/admin/drivers/new')}} size="small" ><AddUserIcon color="#652341" width="48" height="48" /></Button></Tooltip>
                </CardActions>
                </Card>
              </Box>
            </Box>
            <CardContent>


            </CardContent>
            <Box sx={{ pt: 3 }}>
              {/* <DriverList drivers={drivers} /> */}
              <DriverListTest drivers={drivers} />
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

