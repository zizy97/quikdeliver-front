import { Helmet } from 'react-helmet';
import {
  Box, Card, CardHeader,
  CircularProgress,
  Container,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import PackageService from '../../service/PackageService';
import TestDemo from '../../components/package_delivery_requests/TestDemo';

export default function ExpiredDeliveries() {
  const packageService = new PackageService();
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const deliveryPackageRes = await packageService.findExpiredPackageDeliveryRequests();
      console.log(deliveryPackageRes.data);
      const deliveryPackageDrop = deliveryPackageRes.data.map(delivery => {
        return {
          ...delivery,
          label: delivery.id
        };
      });
      console.log(deliveryPackageDrop);
      setDeliveries(deliveryPackageDrop);
      setLoading(false);
    }
    getData();
  },[]);

  return (
    <>
      <Helmet>
        <title>Expired Deliveries</title>
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
                <CardHeader
                  title='Dashboard Expired Deliveries'
                />
              </Card>
            </Box>
          </Box>
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
          <Box sx={{ pt: 3 }}>
            {/* <PackageDeliveryRequestList deliveryRequests={deliveries} /> */}
            <TestDemo deliveryRequests={deliveries} />
          </Box>
        </Container>
      </Box>
    </>
  );
}