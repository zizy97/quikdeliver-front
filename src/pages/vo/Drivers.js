import { Box, Container } from "@mui/material";
//import { DriverListResults } from '../../components/driver/DriverListResults';
import { DriverListToolbar } from "../../components/driver/DriverListToolbar";
import Driverlist from "../../components/vo/Driverlist";
//import { drivers } from '../../__mocks__/drivers';

const Driversvo = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <DriverListToolbar />
        <Box sx={{ mt: 3 }}>
          {/** <DriverListResults drivers={drivers} />*/}
          <Driverlist />
        </Box>
      </Container>
    </Box>
  </>
);

export default Driversvo;
