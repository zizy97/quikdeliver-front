import { Box, Container, Grid, Pagination } from '@mui/material';
import { vehicles } from '../__mocks__/vehicles';
import { VehicleListToolbar } from '../components/vehicles/VehicleListToolbar';
import { VehicleCard } from '../components/vehicles/VehicleCard';

const Vehicles = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <VehicleListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {vehicles.map((vehicle) => (
              <Grid
                item
                key={vehicle.id}
                lg={4}
                md={6}
                xs={12}
              >
                <VehicleCard vehicle={vehicle} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default Vehicles;
