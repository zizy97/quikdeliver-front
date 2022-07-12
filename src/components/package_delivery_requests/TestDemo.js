/* eslint-disable  */
import { React, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  ViewIcon,
  CompleteTaskIcon,
  AllocateIcon,
  DocumentIcon
} from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';

import {
  Box,
  Button,
  Grid,
  Container,
  TextField,
  CircularProgress
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PackageService from '../../service/PackageService';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AllocationService from '../../service/AllocationService';
import ConfirmDialog from '../dialog/InformationDialog';
import Base64Image from '../common/Base64Image';
import { changeStatus } from '../../utils/changestatus';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarColumnsButton
} from '@mui/x-data-grid';
import styled from 'styled-components';

Modal.setAppElement('#root');

export default function TestDemo({ deliveryRequests, ...rest }) {
  const [gridHeight, setGridHeight] = useState(
    window.innerHeight - window.innerHeight * 0.35
  );
  useEffect(() => {
    function handleResize() {
      setGridHeight(window.innerHeight - window.innerHeight * 0.35);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const packageService = new PackageService();
  const allocationService = new AllocationService();
  const [selectedDeliveryRequest, setSelectedDeliveryRequest] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [payslipData, setPayslipData] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deliveryCompleteModalIsOpen, setDeliveryCompleteModalIsOpen] =
    useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const CustomModal = styled(Modal)`
    width: 50%;
    height: 100%;
  `;
  CustomModal.setAppElement('#root');

  const customStyles = {
    content: {
      width: '50%',
      // height: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '14px'
    }
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

  const columns = [
    {
      field: 'id',
      headerName: 'Delivery Id',
      width: 120,
      align: 'center'
    },
    {
      field: 'customerName',
      headerName: 'Customer Name',
      width: 150
    },
    {
      field: 'deliveryFee',
      headerName: 'Delivery Fee (Rs.)',
      type: 'number',
      width: 160,
      sortable: false
      // align: 'center'
    },
    {
      field: 'pickupDate',
      headerName: 'Pickup Date',
      sortable: false,
      width: 160,
      align: 'center'
    },
    {
      field: 'pickupAddress',
      headerName: 'Pickup Address',
      width: 250,
      sortable: false
    },
    {
      field: 'dropoffAddress',
      headerName: 'Dropoff Address',
      width: 250,
      sortable: false
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      sortable: false,
      align: 'center'
    },
    {
      field: 'paymentSlip',
      headerName: 'Payment Slip',
      width: 160,
      align: 'center',
      sortable: false,
      disableExport: true,
      renderCell: (params) => (
        <Tooltip title="Show">
          <span>
            <Button
              sx={{
                color: params.value.paymentProofLinkUsed ? '#652341' : 'gray'
              }}
              disabled={!params.value.paymentProofLinkUsed}
              onClick={() => showPaymentSlip(params.id)}
            >
              <DocumentIcon width="32" height="32" />
            </Button>
          </span>
        </Tooltip>
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 160,
      sortable: false,
      align: 'left',
      disableExport: true,
      renderCell: (params) => (
        <>
          <Tooltip title="View">
            <span>
              <Button
                sx={{ border: 'none' }}
                onClick={() => navigate(`/admin/delivery/requests/${params.id}`)}
              >
                <ViewIcon color="#652341" width="32" height="32" />
              </Button>
            </span>
          </Tooltip>
          {params.value.status === 'ADMIN_APPROVED' && !params.value.allocated && (
            <Tooltip title="Allocate">
              <span>
                <Button
                  sx={{ color: 'red' }}
                  onClick={() => navigate(`/admin/allocations?deliveryId=${params.id}`)}
                >
                  <AllocateIcon width="32" height="32" />
                </Button>
              </span>
            </Tooltip>
          )}
          {params.value.status === 'DELIVERY_IN_PROGRESS' && (
            <Tooltip title="Complete">
              <span>
                <Button
                  sx={{ color: 'green' }}
                  onClick={() => handleDeliveryComplete(params.value)}
                >
                  <CompleteTaskIcon width="32" height="32" />
                </Button>
              </span>
            </Tooltip>
          )}
        </>
      )
    }
  ];

  const rows = deliveryRequests.map((deliveryRequest) => {
    return {
      id: deliveryRequest.id,
      customerName: deliveryRequest.customer.customerName,
      // deliveryFee: deliveryRequest.deliveryFee+".00",
      deliveryFee: parseFloat(deliveryRequest.deliveryFee).toFixed(2),
      pickupDate: moment(deliveryRequest.pickupDate).format('DD/MM/YYYY'),
      pickupAddress: deliveryRequest.pickupAddress,
      dropoffAddress: deliveryRequest.dropOffAddress,
      status: changeStatus(deliveryRequest.status),
      paymentSlip: deliveryRequest,
      actions: deliveryRequest
    };
  });
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport
          printOptions={{
            fields: [
              'id',
              'customerName',
              'deliveryFee',
              'pickupDate',
              'pickupAddress',
              'dropoffAddress',
              'status'
            ]
          }}
        />
      </GridToolbarContainer>
    );
  }
  return (
    <>
      <div style={{ height: gridHeight }}>
        <DataGrid
          rows={rows}
          rowsPerPageOptions={[5, 10, 15, 25]}
          // hideFooterPagination={true}
          // autoPageSize = {true}
          columns={columns}
          disableColumnMenu
          components={{
            Toolbar: CustomToolbar
          }}
        />
      </div>
      {loading && (
        <CircularProgress
          size={100}
          sx={{
            color: 'primary',
            position: 'fixed',
            top: '50%',
            left: '47%',
            marginTop: '-12px',
            marginLeft: '-12px'
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
          <Container>
            <PerfectScrollbar>
              <Box>
                <Box>
                  <Container>
                    {showModal ? (
                      <ConfirmDialog
                        title="Done"
                        msg="New Vehicle Added Successfully."
                        handleOk={() => navigate('../', { replace: true })}
                      />
                    ) : null}
                    <Formik
                      initialValues={{
                        registrationNumber: '',
                        model: '',
                        type: ''
                      }}
                      validationSchema={Yup.object().shape({
                        registrationNumber: Yup.string().required(
                          'Vehicle registration number is required'
                        ),
                        model: Yup.string()
                          .max(255)
                          .required('Model is required'),
                        type: Yup.string().max(255).required('Type is required')
                      })}
                      onSubmit={async (values, { resetForm }) => {
                        values.currentAllocationStatus = false;
                        console.log(values);
                        const addedVehicle = await vehicleService.addNewVehicle(
                          values
                        );
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
                          <Box sx={{ py: 2, textAlign: 'center' }}>
                            <Button variant="contained" onClick={closeModal}>
                              Close
                            </Button>
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
          <Container>
            <PerfectScrollbar>
              <Box>
                <Box>
                  <Container>
                    {showModal ? (
                      <ConfirmDialog
                        title="Done"
                        msg="Delivery Completion Success."
                        handleOk={() =>
                          navigate('/admin/deliveries/completed', {
                            replace: true
                          })
                        }
                      />
                    ) : null}
                    <Formik
                      initialValues={{
                        deliveryDuration: ''
                      }}
                      validationSchema={Yup.object().shape({
                        deliveryDuration: Yup.string().required(
                          'Delivery duration is required'
                        )
                      })}
                      onSubmit={async (values, { resetForm }) => {
                        console.log('Duration', values.deliveryDuration);
                        console.log('Delivery', selectedDeliveryRequest);
                        const res = await allocationService.updateAllocation(
                          selectedDeliveryRequest,
                          values.deliveryDuration
                        );
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
                                error={Boolean(
                                  touched.deliveryDuration &&
                                    errors.deliveryDuration
                                )}
                                fullWidth
                                helperText={
                                  touched.deliveryDuration &&
                                  errors.deliveryDuration
                                }
                                label="Delivery Duration(Hrs)*"
                                margin="normal"
                                name="deliveryDuration"
                                id="deliveryDuration"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                InputLabelProps={{
                                  shrink: true
                                }}
                                type="number"
                                value={values.deliveryDuration}
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>

                          <Box sx={{ py: 2,textAlign: 'center' }}>
                            <Button
                              color="primary"
                              fullWidth
                              sx={{ textAlign: 'center' }}
                              size="large"
                              type="button"
                              onClick={handleSubmit}
                              variant="contained"
                            >
                              <CompleteTaskIcon height="24" width="24" />
                              <span sx={{ width: '10px' }} />
                              Complete Delivery
                            </Button>
                            <Button
                              onClick={() =>
                                setDeliveryCompleteModalIsOpen(false)
                              }
                            >
                              Close
                            </Button>
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
    </>
  );
}

TestDemo.propTypes = {
  deliveryRequests: PropTypes.array.isRequired
};
