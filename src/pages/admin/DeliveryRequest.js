/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Button,
  CardHeader,
  Container,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  CircularProgress
} from '@mui/material';
import PackageService from '../../service/PackageService';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ConfirmDialog from '../../components/dialog/InformationDialog';
import Modal from 'react-modal';
import Base64Image from '../../components/common/Base64Image';
import { usePlacesWidget } from 'react-google-autocomplete';
import {
  AcceptIcon,
  RejectIcon,
  RejectTask,
  SaveIcon,
  ViewIcon
} from '../../components/common/icons/Icons';

Modal.setAppElement('#root');

const DeliveryRequest = () => {
  const packageService = new PackageService();
  const { id } = useParams();
  const [origin, setOrigin] = useState('');
  const [payslipData, setPayslipData] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('au');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState({ text: '0', value: 0 });
  const [destination, setDestination] = useState('');
  const [formattedPickupAddress, setFormattedPickupAddress] = useState('');
  const [formattedDropoffAddress, setFormattedDropoffAddress] = useState('');
  const [isValuesLoaded, setIsValuesLoaded] = useState(false);
  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [deliveryRejectedModalIsOpen, setDeliveryRejectedModalIsOpen] =
    useState(false);
  const [stateChange, setstateChange] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [packageDeliveryRequest, setPackageDeliveryRequest] = useState({
    status: '',
    pickupTime: '',
    deliveryFee: 0,
    paidAmount: 0,
    customer: {
      customerName: '',
      customerEmail: '',
      customerPhone: ''
    }
  });

  const [originalStatus, setOriginalStatus] = useState('');

  // useEffect(async () => {
  //   if (origin && destination) {
  //     setLoading(true);
  //     const distance = await packageService.calculateDistance(
  //       origin,
  //       destination
  //     );
  //     setLoading(false);
  //     const d = {
  //       text: distance.data.rows[0].elements[0].distance.text,
  //       value: distance.data.rows[0].elements[0].distance.value
  //     };
  //     setDistance(d);
  //     console.log(d);
  //   }
  // }, [origin, destination]);

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
      borderColor: '#652341'
    }
  };

  const handlePay = async () => {
    setLoading(true);
    const paymentUpdatedDeliveryPackage = await packageService.doPayment(
      id,
      packageDeliveryRequest.paidAmount,
      newPaymentAmount
    );
    setPackageDeliveryRequest(paymentUpdatedDeliveryPackage.data);
    setLoading(false);
    setShowModal(true);
    closeModal();
  };

  const showPaymentSlip = async (delievryRequestId) => {
    const data = await packageService.paymentProofDownload(delievryRequestId);
    setPayslipData(data.data);
    setLoading(false);
    openModal();
    console.log(data);
  };

  // useEffect(async () => {
  //   console.log(id);
  //   setLoading(true);
  //   const packageDeliveryRequest =
  //     await packageService.findPackageDeliveryRequest(id);
  //   setPackageDeliveryRequest(packageDeliveryRequest.data);
  //   setIsValuesLoaded(true);
  //   setLoading(false);
  //   setOriginalStatus(packageDeliveryRequest.data.status);
  //   pickupAddressRef.current.value = packageDeliveryRequest.data.pickupAddress;
  //   dropoffAddressRef.current.value =
  //     packageDeliveryRequest.data.dropOffAddress;
  //   console.log(packageDeliveryRequest.data);
  // }, []);

  const handleAccept = async () => {
    setLoading(true);
    const updatedPackageDeliveryRequest =
      await packageService.updateDeliveryPackageStatus(id, 'ADMIN_APPROVED');
    setPackageDeliveryRequest(updatedPackageDeliveryRequest.data);
    setLoading(false);
  };

  const handleReject = async (id, rejectReason) => {
    setLoading(true);
    const updatedPackageDeliveryRequest =
      await packageService.RejectDeliveryPackageStatus(id, rejectReason);
    console.log(updatedPackageDeliveryRequest.data);
    setPackageDeliveryRequest(updatedPackageDeliveryRequest.data);
    setLoading(false);
  };

  const handleDeliveryStatusChange = (value) => {
    if (value === 'ADMIN_REJECTED') {
      setDeliveryRejectedModalIsOpen(true);
    }
    setPackageDeliveryRequest({
      ...packageDeliveryRequest,
      status: value
    });
  };

  const handleDeliveryStatusChangeUpdate = async () => {
    setLoading(true);
    const updatedPackageDeliveryRequest =
      await packageService.updateDeliveryPackageStatus(
        id,
        packageDeliveryRequest.status
      );
    setPackageDeliveryRequest(updatedPackageDeliveryRequest.data);
    setLoading(false);
    setShowModal(true);
  };

  const handlePickupTimeSlotChange = (value) => {
    setPackageDeliveryRequest({
      ...packageDeliveryRequest,
      pickupTime: value
    });
  };

  const { ref: pickupAddressRef } = usePlacesWidget({
    apiKey: 'AIzaSyDpL0YWqm79YWD9b0SwEdrrWtrHFxNjXg8',
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        pickupAddressRef.current.value = '';
        return;
      }
      setOrigin(place.formatted_address);
      setFormattedPickupAddress(place.formatted_address);
      console.log(place);
    },
    inputAutocompleteValue: 'country',
    options: {
      types: ['address'],
      componentRestrictions: { country }
    }
  });
  const { ref: dropoffAddressRef } = usePlacesWidget({
    apiKey: 'AIzaSyDpL0YWqm79YWD9b0SwEdrrWtrHFxNjXg8',
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        dropoffAddressRef.current.value = '';
        return;
      }
      setDestination(place.formatted_address);
      setFormattedDropoffAddress(place.formatted_address);
    },
    inputAutocompleteValue: 'country',
    options: {
      types: ['address'],
      componentRestrictions: { country }
    }
  });

  return (
    <>
      <Helmet>
        <title>Package Delivery Request</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={true}>
          <Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardHeader
                  title={`Package Delivery Request No: ${packageDeliveryRequest?.id}`}
                />
              </Card>
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
              <Container maxWidth="md">
                {showModal ? (
                  <ConfirmDialog
                    title={'Done'}
                    msg={'Package successfully updated.'}
                    handleOk={() => setShowModal(false)}
                  />
                ) : null}
                <Formik
                  // onSubmit={async (values, { resetForm }) => {
                  //   const packageDeliveryRequest = {
                  //     customer: {
                  //       customerName: values.name,
                  //       customerPhone: values.phone,
                  //       customerEmail: values.email
                  //     },
                  //     pickupAddress: formattedPickupAddress,
                  //     dropOffAddress: formattedDropoffAddress,
                  //     specialRemarks: values.specialRemarks,
                  //     packageDescription: values.packageDescription,
                  //     weight: values.weight,
                  //     pickupDate: values.pickupDate,
                  //     pickupTime: values.pickupTime,
                  //     deliveryFee: calculateDeliveryFee(distance.value)
                  //   };
                  //   console.log(packageDeliveryRequest);
                  //   try {
                  //     const res = await createPackageDeliveryRequest(
                  //       packageDeliveryRequest
                  //     );
                  //     const createdPackageDeliveryRequestId = res.data.id;
                  //     const imageUploadRes = await uploadPackageImages(
                  //       files,
                  //       createdPackageDeliveryRequestId
                  //     );
                  //     console.log(res);
                  //     console.log(imageUploadRes);
                  //     setShowModal(true);
                  //     resetForm();
                  //     setFormattedPickupAddress('');
                  //     setFormattedDropoffAddress('');
                  //     pickupAddressRef.current.value = '';
                  //     dropoffAddressRef.current.value = '';
                  //   } catch (e) {
                  //     console.log(e);
                  //   }
                  // }}
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
                      <p
                        style={{
                          fontWeight: '600',
                          marginTop: '2rem',
                          fontFamily: 'Poppins , Sans-serif'
                        }}
                      >
                        BASIC DETAILS
                      </p>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Name</label>
                          </div>
                          <TextField
                            error={Boolean(touched.name && errors.name)}
                            fullWidth
                            disabled
                            helperText={touched.name && errors.name}
                            // label='Name'
                            margin="normal"
                            name="name"
                            id="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={
                              packageDeliveryRequest?.customer?.customerName
                            }
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Email</label>
                          </div>
                          <TextField
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            // label='Email'
                            disabled
                            margin="normal"
                            name="email"
                            id="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="email"
                            value={
                              packageDeliveryRequest?.customer?.customerEmail
                            }
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Phone Number</label>
                          </div>
                          <TextField
                            error={Boolean(touched.phone && errors.phone)}
                            fullWidth
                            helperText={touched.phone && errors.phone}
                            disabled
                            margin="normal"
                            name="phone"
                            // id="phone"
                            onBlur={handleBlur}
                            onChange={(event) => {
                              if (event.target.value.length < 10) {
                                handleChange(event);
                              } else {
                                event.target.value = event.target.value.slice(
                                  0,
                                  9
                                );
                                handleChange(event);
                              }
                            }}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="telephone"
                            value={
                              packageDeliveryRequest?.customer?.customerPhone
                                ? '+61 ' +
                                  packageDeliveryRequest.customer.customerPhone
                                : ''
                            }
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Special Remarks</label>
                          </div>
                          <TextField
                            error={Boolean(
                              touched.specialRemarks && errors.specialRemarks
                            )}
                            fullWidth
                            disabled
                            helperText={
                              touched.specialRemarks && errors.specialRemarks
                            }
                            // label='Special Remarks'
                            margin="normal"
                            name="specialRemarks"
                            id="specialRemarks"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={packageDeliveryRequest?.specialRemarks}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <p
                        style={{
                          fontWeight: '600',
                          marginTop: '2rem',
                          fontFamily: 'Poppins , Sans-serif'
                        }}
                      >
                        DELIVERY DETAILS
                      </p>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Pickup Address</label>
                          </div>
                          <TextField
                            error={Boolean(
                              touched.pickupAddress && errors.pickupAddress
                            )}
                            fullWidth
                            helperText={
                              touched.pickupAddress && errors.pickupAddress
                            }
                            // label='Pickup Address'
                            disabled
                            margin="normal"
                            name="pickupAddress"
                            id="pickupAddress"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={packageDeliveryRequest?.pickupAddress}
                            variant="outlined"
                            ref={pickupAddressRef}
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Drop off Address</label>
                          </div>
                          <TextField
                            error={Boolean(
                              touched.dropOffAddress && errors.dropOffAddress
                            )}
                            fullWidth
                            helperText={
                              touched.dropOffAddress && errors.dropOffAddress
                            }
                            // label='Pickup Address'
                            margin="normal"
                            name="dropOffAddress"
                            disabled
                            id="dropOffAddress"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={packageDeliveryRequest?.dropOffAddress}
                            variant="outlined"
                            ref={dropoffAddressRef}
                          />
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Approximate Weight</label>
                          </div>
                          <TextField
                            error={Boolean(touched.weight && errors.weight)}
                            fullWidth
                            helperText={touched.weight && errors.weight}
                            // label='Approximate Weight'
                            margin="normal"
                            disabled
                            name="weight"
                            id="weight"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="number"
                            value={packageDeliveryRequest?.weight}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Distance(Km)</label>
                          </div>
                          <TextField
                            fullWidth
                            // label='Distance(Km)'
                            margin="normal"
                            name="distance"
                            id="distance"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            disabled
                            type="text"
                            variant="outlined"
                            value={packageDeliveryRequest?.distance / 1000}
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={11}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Package Description</label>
                          </div>
                          <TextField
                            error={Boolean(
                              touched.packageDescription &&
                                errors.packageDescription
                            )}
                            helperText={
                              touched.packageDescription &&
                              errors.packageDescription
                            }
                            fullWidth
                            // label='Package Description'
                            margin="normal"
                            name="packageDescription"
                            disabled
                            id="packageDescription"
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(event) => {
                              if (event.target.value.length <= 250) {
                                handleChange(event);
                              } else {
                                event.target.value = event.target.value.slice(
                                  0,
                                  250
                                );
                                handleChange(event);
                              }
                            }}
                            multiline
                            value={packageDeliveryRequest?.packageDescription}
                            InputLabelProps={{
                              shrink: true
                            }}
                            rows={2}
                            rowsmax={4}
                          />
                        </Grid>
                      </Grid>
                      <p
                        style={{
                          fontWeight: '600',
                          marginTop: '2rem',
                          fontFamily: 'Poppins , Sans-serif'
                        }}
                      >
                        DATE AND TIME
                      </p>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Pickup Date</label>
                          </div>
                          <TextField
                            error={Boolean(
                              touched.pickupDate && errors.pickupDate
                            )}
                            fullWidth
                            helperText={touched.pickupDate && errors.pickupDate}
                            // label='Pickup Date'
                            margin="normal"
                            name="pickupDate"
                            id="pickupDate"
                            disabled
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="date"
                            value={packageDeliveryRequest?.pickupDate}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <FormControl
                            variant="outlined"
                            fullWidth
                            error={Boolean(
                              touched.pickupTime && errors.pickupTime
                            )}
                            helperText={touched.pickupTime && errors.pickupTime}
                          >
                            {/*<InputLabel htmlFor="pickupTime" id="demo-simple-select-helper-label">Pickup Time</InputLabel>*/}
                            <div
                              style={{
                                margin: '14px 10px 7px 0',
                                color: '#808080'
                              }}
                            >
                              <label>Pickup Time</label>
                            </div>
                            <Select
                              error={Boolean(
                                touched.pickupTime && errors.pickupTime
                              )}
                              helperText={
                                touched.pickupTime && errors.pickupTime
                              }
                              labelId="demo-simple-select-helper-label"
                              name="pickupTime"
                              id="pickupTime"
                              margin="normal"
                              disabled
                              InputLabelProps={{
                                shrink: true
                              }}
                              onBlur={handleBlur}
                              // onChange={(e)=>setPackageDeliveryRequest({...packageDeliveryRequest,  pickupTime:e.target.value})}
                              onChange={handleChange}
                              value={packageDeliveryRequest?.pickupTime}
                              // label="Pickup Time"
                            >
                              <MenuItem value={'06.00AM-07.00AM'}>
                                06.00AM - 07.00AM
                              </MenuItem>
                              <MenuItem value={'07.00AM-08.00AM'}>
                                07.00AM - 08.00AM
                              </MenuItem>
                              <MenuItem value={'08.00AM-09.00AM'}>
                                08.00AM - 09.00AM
                              </MenuItem>
                              <MenuItem value={'09.00AM-10.00AM'}>
                                09.00AM - 10.00AM
                              </MenuItem>
                              <MenuItem value={'10.00AM-11.00AM'}>
                                10.00AM - 11.00AM
                              </MenuItem>
                              <MenuItem value={'11.00AM-12.00PM'}>
                                11.00AM - 12.00PM
                              </MenuItem>
                              <MenuItem value={'12.00PM-01.00PM'}>
                                12.00PM - 01.00PM
                              </MenuItem>
                              <MenuItem value={'01.00PM-02.00PM'}>
                                01.00PM - 02.00PM
                              </MenuItem>
                              <MenuItem value={'02.00PM-03.00PM'}>
                                02.00PM - 03.00PM
                              </MenuItem>
                              <MenuItem value={'03.00PM-04.00PM'}>
                                03.00PM - 04.00PM
                              </MenuItem>
                              <MenuItem value={'04.00PM-05.00PM'}>
                                04.00PM - 05.00PM
                              </MenuItem>
                              <MenuItem value={'05.00PM-06.00PM'}>
                                05.00PM - 06.00PM
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <p
                        style={{
                          fontWeight: '600',
                          marginTop: '2rem',
                          fontFamily: 'Poppins , Sans-serif'
                        }}
                      >
                        PAYMENTS
                      </p>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Delivery Fee(AUD)</label>
                          </div>
                          <TextField
                            fullWidth
                            // label='Delivery Fee (AUD)'
                            margin="normal"
                            name="distance"
                            id="distance"
                            disabled
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={parseFloat(
                              packageDeliveryRequest?.deliveryFee
                            ).toFixed(2)}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: '15px 10px -10px 0',
                              color: '#808080'
                            }}
                          >
                            <label>Outstanding Amount (AUD)</label>
                          </div>
                          <TextField
                            fullWidth
                            // label='Outstanding Amount (AUD)'
                            margin="normal"
                            name="outstandingAmount"
                            disabled
                            id="outstandingAmount"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={parseFloat(
                              packageDeliveryRequest?.deliveryFee -
                                packageDeliveryRequest?.paidAmount
                            ).toFixed(2)}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={5}>
                          <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '16px' }}
                          >
                            {/*<InputLabel htmlFor="deliveryStatus" id="demo-simple-select-helper-label">Delivery Status</InputLabel>*/}
                            <div
                              style={{
                                margin: '14px 10px 7px 0',
                                color: '#808080'
                              }}
                            >
                              <label>Delivery Status</label>
                            </div>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              name="deliveryStatus"
                              id="deliveryStatus"
                              InputLabelProps={{
                                shrink: true
                              }}
                              // onBlur={handleBlur}
                              onChange={(e) =>
                                handleDeliveryStatusChange(e.target.value)
                              }
                              value={
                                packageDeliveryRequest.status ===
                                'ADMIN_REJECTED'
                                  ? stateChange
                                    ? 'ADMIN_REJECTED'
                                    : originalStatus
                                  : packageDeliveryRequest.status
                              }
                              // label="Delivery Status"
                            >
                              <MenuItem value={'PAYMENT_PENDING'}>
                                PAYMENT_PENDING
                              </MenuItem>
                              <MenuItem value={'ADMIN_APPROVAL_PENDING'}>
                                ADMIN_APPROVAL_PENDING
                              </MenuItem>
                              <MenuItem value={'ADMIN_APPROVED'}>
                                ADMIN_APPROVED
                              </MenuItem>
                              <MenuItem value={'ADMIN_REJECTED'}>
                                ADMIN_REJECTED
                              </MenuItem>
                              <MenuItem value={'DELIVERY_IN_PROGRESS'}>
                                DELIVERY_IN_PROGRESS
                              </MenuItem>
                              <MenuItem value={'DELIVERY_COMPLETED'}>
                                DELIVERY_COMPLETED
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <Button
                            style={{ marginTop: '50px', marginLeft: '10px' }}
                            disabled={
                              packageDeliveryRequest?.status ===
                              'PAYMENT_PENDING'
                            }
                            size="large"
                            type="button"
                            onClick={() => showPaymentSlip(id)}
                            variant="contained"
                          >
                            <ViewIcon height="24" width="24" />
                            <span style={{ width: '10px' }} />
                            Show Payment Slip
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container style={{ marginTop: '20px' }}>
                        <Grid item xs={5}>
                          <Button
                            style={{ backgroundColor: '#12824C' }}
                            disabled={
                              packageDeliveryRequest?.status ===
                                'ADMIN_APPROVED' ||
                              packageDeliveryRequest?.status ===
                                'DELIVERY_IN_PROGRESS' ||
                              packageDeliveryRequest?.status ===
                                'DELIVERY_COMPLETED'
                            }
                            fullWidth
                            size="large"
                            type="button"
                            onClick={handleAccept}
                            variant="contained"
                          >
                            <AcceptIcon height="24" width="24" />
                            <span style={{ width: '10px' }} />
                            ACCEPT
                          </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <Button
                            color="secondary"
                            disabled={
                              packageDeliveryRequest?.status ===
                                'DELIVERY_COMPLETED' ||
                              packageDeliveryRequest?.status ===
                                'ADMIN_REJECTED'
                            }
                            fullWidth
                            size="large"
                            type="button"
                            onClick={()=>setDeliveryRejectedModalIsOpen(true)}
                            variant="contained"
                          >
                            <RejectIcon height="24" width="24" />
                            <span style={{ width: '10px' }} />
                            Reject
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid item xs={11}>
                        <Box sx={{ py: 2 }} style={{ textAlign: 'center' }}>
                          <Button
                            color="primary"
                            fullWidth
                            disabled={
                              packageDeliveryRequest.status === originalStatus
                            }
                            style={{ textAlign: 'center' }}
                            size="large"
                            type="button"
                            onClick={() => handleDeliveryStatusChangeUpdate()}
                            variant="contained"
                          >
                            <SaveIcon height="24" width="24" />
                            <span style={{ width: '10px' }} />
                            Save
                          </Button>
                        </Box>
                      </Grid>
                    </form>
                  )}
                </Formik>
              </Container>
            </Box>
          </Box>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
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
              <Container maxWidth={true}>
                <Box>
                  <Box>
                    <Container maxWidth="md">
                      {showModal ? (
                        <ConfirmDialog
                          title={'Done'}
                          msg={'New Vehicle Added Successfully.'}
                          // handleOk={() => navigate('../', { replace: true })}
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
                          type: Yup.string()
                            .max(255)
                            .required('Type is required')
                        })}
                        // onSubmit={async (values, { resetForm }) => {
                        //   values['currentAllocationStatus'] = false;
                        //   console.log(values);
                        //   const addedVehicle =
                        //     await vehicleService.addNewVehicle(values);
                        //   console.log('Added vehicle', addedVehicle.data);
                        //   setShowModal(true);
                        //   resetForm();
                        // }}
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
                            <Grid container style={{ textAlign: 'center' }}>
                              <Grid item xs={3} />
                              <Grid item xs={6}>
                                <Base64Image data={payslipData} />
                              </Grid>
                            </Grid>
                            <Grid container>
                              <Grid item xs={12}>
                                <TextField
                                  error={Boolean(
                                    touched.paidAmount && errors.paidAmount
                                  )}
                                  fullWidth
                                  helperText={
                                    touched.paidAmount && errors.paidAmount
                                  }
                                  label="Paid Amount in the Bill*"
                                  margin="normal"
                                  name="paidAmount"
                                  id="paidAmount"
                                  onBlur={handleBlur}
                                  onChange={(e) =>
                                    setNewPaymentAmount(e.target.value)
                                  }
                                  InputLabelProps={{
                                    shrink: true
                                  }}
                                  type="number"
                                  value={values.paidAmount}
                                  variant="outlined"
                                />
                              </Grid>
                            </Grid>

                            <Box sx={{ py: 2 }} style={{ textAlign: 'center' }}>
                              <Button
                                color="primary"
                                fullWidth
                                disabled={
                                  packageDeliveryRequest.deliveryFee <=
                                  packageDeliveryRequest.paidAmount
                                }
                                style={{ textAlign: 'center' }}
                                size="large"
                                type="button"
                                onClick={handlePay}
                                variant="contained"
                              >
                                Add as Paid Amount
                              </Button>
                              <Button onClick={closeModal}>Close</Button>
                            </Box>
                          </form>
                        )}
                      </Formik>
                    </Container>
                  </Box>
                </Box>
                <PerfectScrollbar>
                  <Box sx={{ minWidth: 1050 }}></Box>
                </PerfectScrollbar>
              </Container>
            </Box>
          </Modal>
          <Modal
            isOpen={deliveryRejectedModalIsOpen}
            onRequestClose={() => setDeliveryRejectedModalIsOpen(false)}
            style={customStyles}
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
                        <Formik
                          initialValues={{
                            rejectReason: ''
                          }}
                          validationSchema={Yup.object().shape({
                            rejectReason:
                              Yup.string().required('Reason is required').min(10, 'Reason must be at least 10 characters long')
                          })}
                          onSubmit={async (values, { resetForm }) => {
                            if(values.rejectReason.length >= 10){
                              setstateChange(true);
                              await handleReject(id, rejectReason).catch(err => {
                                alert(err.message);
                              });
                              setDeliveryRejectedModalIsOpen(false);}
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
                                      touched.rejectReason &&
                                        errors.rejectReason
                                    )}
                                    fullWidth
                                    helperText={
                                      touched.rejectReason &&
                                      errors.rejectReason
                                    }
                                    label="Specify The Reason To Reject*"
                                    margin="normal"
                                    name="rejectReason"
                                    id="rejectReason"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                      shrink: true
                                    }}
                                    type="text"
                                    value={values.rejectReason}
                                    variant="outlined"
                                  />
                                </Grid>
                              </Grid>

                              <Box
                                sx={{ py: 2 }}
                                style={{ textAlign: 'center' }}
                              >
                                <Button
                                  color="primary"
                                  fullWidth
                                  style={{ textAlign: 'center' }}
                                  size="large"
                                  type="submit"
                                  // onClick={async() => {
                                  //   if(errors.rejectReason===undefined) {
                                  //     handleSubmit();
                                  //   }
                                  // }}
                                  variant="contained"
                                >
                                  <RejectTask height="24" width="24" />
                                  <span style={{ width: '10px' }} />
                                  Reject the Delivery
                                </Button>
                                <Button
                                  onClick={() => {
                                    setstateChange(false);
                                    setDeliveryRejectedModalIsOpen(false);
                                  }}
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
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}></Box>
          </PerfectScrollbar>
        </Container>
      </Box>
    </>
  );
};

export default DeliveryRequest;
