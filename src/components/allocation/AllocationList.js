import { useState } from 'react';
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
// import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import { changeStatus } from '../../utils/changestatus';
import { ViewIcon } from '../common/icons/Icons';
import { Tooltip } from '@mui/material';

const AllocationList = ({ allocations, ...rest }) => {
  console.log(allocations);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


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
                  Allocation ID
                </TableCell>
                <TableCell>
                  Pickup Date
                </TableCell>
                <TableCell>
                  Driver Name
                </TableCell>
                <TableCell>
                  Vehicle Registration No.
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocations.slice(0, limit).map((allocation) => (
                <TableRow
                  hover
                  key={allocation.id}>
                  <TableCell>
                    {allocation.id}
                  </TableCell>
                  <TableCell>
                    {moment(allocation.packageDeliveryRequest.pickupDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {allocation.driver.name}
                  </TableCell>
                  <TableCell>
                    {allocation.vehicle.registrationNumber}
                  </TableCell>
                  <TableCell>
                    {changeStatus(allocation.packageDeliveryRequest.status)}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View"><Button onClick={()=>{navigate(`/admin/delivery/requests/${allocation.packageDeliveryRequest.id}`)}} ><ViewIcon width="32" height="32"/></Button></Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={allocations.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AllocationList.propTypes = {
  allocations: PropTypes.array.isRequired
};

export default AllocationList;
