import { Helmet } from 'react-helmet';
import { Box, Button, Card, CardActions, CardHeader, CircularProgress, Container } from '@mui/material';
import React from 'react';
import PackageService from '../../service/PackageService';
import { useNavigate } from 'react-router-dom';
import { AddDeliverRequestIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import TestDemo from '../../components/package_delivery_requests/TestDemo';
import { useState } from 'react';

export default function PackageDeliveryRequests() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const [deliveryRequests, setdeliveryRequests] = useState([])
  return (
    <>
        <Helmet>
          <title>Package Delivery Requests</title>
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
                    title="Package Delivery Requests"
                  />
                  <CardActions style = {{display: 'inline-block', float: 'right'}} >
                    <Tooltip title="Add"><Button onClick={()=>{navigate('/delivery')}} size="small" ><AddDeliverRequestIcon height="32" width="32"/></Button></Tooltip>
                  </CardActions>
                </Card>
              </Box>
            </Box>
            <Box sx={{ pt: 3 }}>
              {<TestDemo deliveryRequests={deliveryRequests}/>}
              

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
}
