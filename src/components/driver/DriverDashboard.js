import { Box, Container, Grid } from '@mui/material';
import { Income } from '../dashboard/Income';
import { LatestOrders } from '../dashboard/LatestOrders';
import { DeliveryRequest } from '../dashboard/DeliveryRequest';
import { IncomeStats } from '../dashboard/IncomeStats';
import { DeliverProgress } from '../dashboard/DeliverProgress';
import { TotalDrivers } from '../dashboard/TotalDrivers';
import { TotalVehicles } from '../dashboard/TotalVehicles';
import { StatByVehicle } from '../dashboard/StatByVehicle';

const DriverDashboard = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Income />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalDrivers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            
            <TotalVehicles sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <DeliverProgress />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <IncomeStats />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <StatByVehicle sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <DeliveryRequest sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default DriverDashboard;
