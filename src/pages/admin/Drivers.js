import { Box, Container } from '@mui/material';
import { DriverListResults } from '../../components/driver/DriverListResults';
import { DriverListToolbar } from '../../components/driver/DriverListToolbar';
import { drivers } from '../../__mocks__/drivers';

const Drivers = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <DriverListToolbar />
        <Box sx={{ mt: 3 }}>
          <DriverListResults drivers={drivers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Drivers;
