/* eslint-disable  */
import { React, useState } from 'react';


import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ViewIcon,CompleteTaskIcon,AllocateIcon,DocumentIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';

import {
  Box,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  Container,
  TextField,
  TableHead,
  TablePagination,
  TableRow,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PackageService from '../../service/PackageService';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AllocationService from '../../service/AllocationService';
import ConfirmDialog from '../dialog/InformationDialog';
import Base64Image from '../common/Base64Image';
import { changeStatus } from '../../utils/changestatus';

Modal.setAppElement('#root');

const PackageDeliveryRequestList = ({deliveryRequests, ...rest }) => {
  const packageService = new PackageService();
  const allocationService = new AllocationService();
  const [selectedDeliveryRequest, setSelectedDeliveryRequest] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [payslipData, setPayslipData] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deliveryCompleteModalIsOpen, setDeliveryCompleteModalIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const showPaymentSlip = async (delievryRequestId) => {
    setLoading(true);
    const data = await packageService.paymentProofDownload(delievryRequestId);
    setLoading(false);
    setPayslipData(data.data);
    openModal();
    console.log(data);
  };

  const handleDeliveryComplete = async (delivery) => {
    setSelectedDeliveryRequest(delivery);
    setDeliveryCompleteModalIsOpen(true);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Request ID
                </TableCell>
                <TableCell>
                  Customer Name
                </TableCell>
                <TableCell>
                  Delivery Fee (AUD)
                </TableCell>
                <TableCell>
                  Pickup Date
                </TableCell>
                <TableCell>
                  Pickup Address
                </TableCell>
                <TableCell>
                  Dropoff Address
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Payment Slip
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveryRequests.slice(0, limit).map((deliveryRequest) => (
                <TableRow
                  hover
                  key={deliveryRequest.id}
                >
                  <TableCell>
                    {deliveryRequest.id}
                  </TableCell>
                  <TableCell>
                    {deliveryRequest.customer.customerName}
                  </TableCell>
                  <TableCell>
                    {deliveryRequest.deliveryFee}
                  </TableCell>
                  <TableCell>
                    {moment(deliveryRequest.pickupDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {deliveryRequest.pickupAddress}
                  </TableCell>
                  <TableCell>
                    {deliveryRequest.dropOffAddress}
                  </TableCell>
                  <TableCell>
                    {changeStatus(deliveryRequest.status)}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Show"><Button sx={{color: deliveryRequest.paymentProofLinkUsed ? '#652341' : 'gray' }} disabled={!(deliveryRequest.paymentProofLinkUsed)} onClick={() => showPaymentSlip(deliveryRequest.id)}><DocumentIcon  width="32" height="32" /></Button></Tooltip>

                  </TableCell>
                  <TableCell>
                    
                  <Tooltip title="View"><Button sx={{border:"none"}} onClick={()=>{navigate(`/admin/delivery/requests/${deliveryRequest.id}`)}}><ViewIcon color="#652341" width="32" height="32" /></Button></Tooltip>
                    {(deliveryRequest.status === 'ADMIN_APPROVED' && !deliveryRequest.allocated) && <Tooltip title="Allocate"><Button sx={{ color: 'red' }} onClick={()=>{navigate(`/admin/allocations?deliveryId=${deliveryRequest.id}`)}}><AllocateIcon width="32" height="32" /></Button></Tooltip>}
                    {(deliveryRequest.status === 'DELIVERY_IN_PROGRESS') && <Tooltip title="Complete"><Button sx={{ color: 'green' }} onClick={() => handleDeliveryComplete(deliveryRequest)}><CompleteTaskIcon width="32" height="32" /></Button></Tooltip>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            sx={customStyles}
            contentLabel="Example Modal"
          >
            {/* <Base64Image data={payslipData} /> */}

            <Box
              sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
              }}
            >

              <Container maxWidth>
                <PerfectScrollbar>
                  <Box>
                    <Box>
                      <Container maxWidth='md'>
                        {showModal ? <ConfirmDialog title="Done" msg="New Vehicle Added Successfully." handleOk={() => navigate('../', { replace: true })} /> : null}
                        <Formik
                          initialValues={{
                            registrationNumber: '',
                            model: '',
                            type: ''
                          }}
                          validationSchema={Yup.object().shape({
                            registrationNumber: Yup.string().required('Vehicle registration number is required'),
                            model: Yup.string().max(255).required('Model is required'),
                            type: Yup.string().max(255).required('Type is required')
                          })}
                          onSubmit={async (values, { resetForm }) => {
                            values.currentAllocationStatus = false;
                            console.log(values);
                            const addedVehicle = await vehicleService.addNewVehicle(values);
                            console.log('Added vehicle', addedVehicle.data);
                            setShowModal(true);
                            resetForm();
                          }}
                        >
                          {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <Grid container sx={{ textAlign: 'center' }}>
                                <Grid item xs={3} />
                                <Grid item xs={6}>
                                  <Base64Image data={payslipData} />
                                </Grid>
                              </Grid>
                              <Box sx={{ py: 2 , textAlign: 'center' }}>
                                <Button variant='contained' onClick={closeModal}>Close</Button>
                              </Box>
                            </form>
                          )}
                        </Formik>
                      </Container>
                    </Box>
                  </Box>
                </PerfectScrollbar>
                <PerfectScrollbar>
                  <Box sx={{ minWidth: 1050 }} />
                </PerfectScrollbar>
              </Container>
            </Box>
          </Modal>

          <Modal
            isOpen={deliveryCompleteModalIsOpen}
            onRequestClose={closeModal}
            sx={customStyles}
            contentLabel="Delivery Complete Modal"
          >
            {/* <Base64Image data={payslipData} /> */}

            <Box
              sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
              }}
            >

              <Container maxWidth>
                <PerfectScrollbar>
                  <Box>
                    <Box>
                      <Container maxWidth='md'>
                        {showModal ? <ConfirmDialog title="Done" msg="Delivery Completion Success." handleOk={() => navigate('/admin/deliveries/completed', { replace: true })} /> : null}
                        <Formik
                          initialValues={{
                            deliveryDuration: ''
                          }}
                          validationSchema={Yup.object().shape({
                            deliveryDuration: Yup.string().required('Delivery duration is required'),
                          })}
                          onSubmit={async (values, { resetForm }) => {
                            console.log('Duration', values.deliveryDuration);
                            console.log('Delivery', selectedDeliveryRequest);
                            const res = await allocationService.updateAllocation(selectedDeliveryRequest, values.deliveryDuration);
                            console.log(res);
                            setShowModal(true);
                            resetForm();
                          }}
                        >
                          {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                          }) => (
                            <form onSubmit={handleSubmit}>

                              <Grid container>
                                <Grid item xs={12}>
                                  <TextField
                                    error={Boolean(touched.deliveryDuration && errors.deliveryDuration)}
                                    fullWidth
                                    helperText={touched.deliveryDuration && errors.deliveryDuration}
                                    label='Delivery Duration(Hrs)*'
                                    margin='normal'
                                    name='deliveryDuration'
                                    id='deliveryDuration'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    type='number'
                                    value={values.deliveryDuration}
                                    variant='outlined'
                                  />
                                </Grid>
                              </Grid>

                              <Box sx={{ py: 2,textAlign: 'center' }}>
                                <Button
                                  color='primary'
                                  fullWidth
                                  sx={{ textAlign: 'center' }}
                                  size='large'
                                  type='button'
                                  onClick={handleSubmit}
                                  variant='contained'
                                >
                                  <CompleteTaskIcon height="24" width="24" /><span sx={{width:"10px"}}/>Complete Delivery
                                </Button>
                                <Button onClick={() => setDeliveryCompleteModalIsOpen(false)}>Close</Button>
                              </Box>
                            </form>
                          )}
                        </Formik>
                      </Container>
                    </Box>
                  </Box>
                </PerfectScrollbar>
                <PerfectScrollbar>
                  <Box sx={{ minWidth: 1050 }} />
                </PerfectScrollbar>
              </Container>
            </Box>
          </Modal>

        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={deliveryRequests.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PackageDeliveryRequestList.propTypes = {
  deliveryRequests: PropTypes.array.isRequired
};
export default PackageDeliveryRequestList;
