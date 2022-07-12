import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box, Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ReportTable = ({ allocations, limit, page, setLimit, setPage, ...rest }) => {
  const navigate = useNavigate();
  console.log(allocations);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Delivery Date
                </TableCell>
                <TableCell>
                  Delivery
                </TableCell>
                <TableCell>
                  Driver Name
                </TableCell>
                <TableCell>
                  Vehicle
                </TableCell>
                <TableCell>
                  Hours
                </TableCell>
                <TableCell>
                  Wage (/Hr)
                </TableCell>
                <TableCell>
                  Sub Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocations.slice(0, limit).map((allocation) => (
                <TableRow
                  hover
                  key={allocation.id}>
                  <TableCell>
                    {moment(allocation.deliveryDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>{navigate(`/admin/delivery/requests/${allocation.packageDeliveryRequest.id}`)}} >View</Button>
                  </TableCell>
                  <TableCell>
                    {allocation.driver.name}
                  </TableCell>
                  <TableCell>
                    {allocation.vehicle.registrationNumber} - {allocation.vehicle.vehicleDescription} 
                  </TableCell>
                  <TableCell>
                    {allocation.deliveryDuration}
                  </TableCell>
                  <TableCell>
                    {allocation.driver.hourlyWage}
                  </TableCell>
                  <TableCell>
                    {allocation.deliveryDuration * allocation.driver.hourlyWage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={5}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[2, 5, 10, 25]}
      />
    </Card>
  );
};

ReportTable.propTypes = {
  allocations: PropTypes.array.isRequired
};

export default ReportTable;
