import { Box, Container } from "@mui/material";
//import { vehicles } from "../../__mocks__/vehicles";
import { VehicleListToolbar } from "../../components/vehicles/VehicleListToolbar";
//import { VehicleCard } from "../../components/vehicles/VehicleCard";
import Vehiclelist from "../../components/vo/Vehiclelist";
const Vehicles = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <VehicleListToolbar />
        <Box sx={{ mt: 3 }}>
          {/** <Grid container spacing={3}>
            {vehicles.map((vehicle) => (
              <Grid item key={vehicle.id} lg={4} md={6} xs={12}>
                <VehicleCard vehicle={vehicle} />
              </Grid>
          ))}*/}
          <Vehiclelist />
          {/** </Box> </Grid>*/}
        </Box>
      </Container>
    </Box>
  </>
);

export default Vehicles;
