import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { EditIcon,DeleteIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';

import {
  Box, Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { Link } from 'react-router-dom';
import { changeStatus } from '../../utils/changestatus';

const VehicleList = ({ vehicles, ...rest }) => {


  const [selectedallocationIds, setSelectedallocationIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedallocationIds;

    if (event.target.checked) {
      newSelectedallocationIds = vehicles.map((allocation) => allocation.id);
    } else {
      newSelectedallocationIds = [];
    }

    setSelectedallocationIds(newSelectedallocationIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedallocationIds.indexOf(id);
    let newSelectedallocationIds = [];

    if (selectedIndex === -1) {
      newSelectedallocationIds = newSelectedallocationIds.concat(selectedallocationIds, id);
    } else if (selectedIndex === 0) {
      newSelectedallocationIds = newSelectedallocationIds.concat(selectedallocationIds.slice(1));
    } else if (selectedIndex === selectedallocationIds.length - 1) {
      newSelectedallocationIds = newSelectedallocationIds.concat(selectedallocationIds.slice(0, -1));
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

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Registration Number
                </TableCell>
                <TableCell>
                  Model
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.slice(0, limit).map((vehicle) => (
                <TableRow
                  hover
                  key={vehicle.id}
                  selected={selectedallocationIds.indexOf(vehicle.id) !== -1}
                >
                  <TableCell>
                    {vehicle.registrationNumber}
                  </TableCell>
                  <TableCell>
                    {vehicle.model}
                  </TableCell>
                  <TableCell>
                    {changeStatus(vehicle.type)}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit"><Button component={Link} to={`/admin/vehicles/${vehicle.id}/edit`}><EditIcon color="#652341" width="32" height="32" /></Button></Tooltip>
                    <Tooltip title="Delete"><Button component={Link} to={`/admin/vehicles/${vehicle.id}/delete`}><DeleteIcon color="#652341" width="32" height="32" /></Button></Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={vehicles.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired
};

export default VehicleList;
