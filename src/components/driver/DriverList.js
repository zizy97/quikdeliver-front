import { useState } from 'react';
import PropTypes from 'prop-types';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { EditIcon, DeleteIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';

import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import DriverService from '../../service/DriverService';

const DriverList = ({ drivers, ...rest }) => {
  const navigate = useNavigate();
  console.log(drivers);
  const driverService = new DriverService();

  const [selectedallocationIds, setSelectedallocationIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedallocationIds;

    if (event.target.checked) {
      newSelectedallocationIds = drivers.map((allocation) => allocation.id);
    } else {
      newSelectedallocationIds = [];
    }

    setSelectedallocationIds(newSelectedallocationIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedallocationIds.indexOf(id);
    let newSelectedallocationIds = [];

    if (selectedIndex === -1) {
      newSelectedallocationIds = newSelectedallocationIds.concat(
        selectedallocationIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedallocationIds = newSelectedallocationIds.concat(
        selectedallocationIds.slice(1)
      );
    } else if (selectedIndex === selectedallocationIds.length - 1) {
      newSelectedallocationIds = newSelectedallocationIds.concat(
        selectedallocationIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedallocationIds = newSelectedallocationIds.concat(
        selectedallocationIds.slice(0, selectedIndex),
        selectedallocationIds.slice(selectedIndex + 1)
      );
    }

    setSelectedallocationIds(newSelectedallocationIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDriverDelete = async (deliveryId) => {
    console.log(deliveryId);
    await driverService.deleteDriver(deliveryId);
    console.log('success');
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Emergency Contact Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.slice(0, limit).map((driver) => (
                <TableRow
                  hover
                  key={driver.id}
                  selected={selectedallocationIds.indexOf(driver.id) !== -1}
                >
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.telephoneNumber}</TableCell>
                  <TableCell>{driver.email}</TableCell>
                  <TableCell>{driver.address}</TableCell>
                  <TableCell>{driver.license}</TableCell>
                  <TableCell>{driver.emergencyContactNumber}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <Button
                        onClick={(params) => {
                          navigate(`/admin/drivers/${params.id}/edit`);
                        }}
                      >
                        <EditIcon color="#652341" width="32" height="32" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Button
                        onClick={(params) => {
                          handleDriverDelete();
                          navigate(`/admin/vehicles/${params.id}/delete`);
                        }}
                      >
                        <DeleteIcon color="#652341" width="32" height="32" />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={drivers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

DriverList.propTypes = {
  drivers: PropTypes.array.isRequired
};

export default DriverList;
