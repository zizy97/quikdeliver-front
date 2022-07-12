/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  Grid
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
// import getFirebase from '../firebase';
import './input.css';
import PackageService from '../../service/PackageService';
import ConfirmDialog from '../../components/dialog/InformationDialog';

import FileUpload from '../../components/fileupload/FileUpload';

const PackageDeliveryRequestPage = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState('au');
  const packageService = new PackageService();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState({ text: '0', value: 0 });

  // const firebaseInstance = getFirebase();

  const [formattedPickupAddress, setFormattedPickupAddress] = useState('');
  const [formattedDropoffAddress, setFormattedDropoffAddress] = useState('');
  const [change, setchange] = useState(false)

  const [showModal, setShowModal] = useState(false);
  const [agreeToTermsAndConditions, setAgreeToTermsAndConditions] =
    useState(false);

  const datePickerRef = useRef();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { ref: pickupAddressRef } = usePlacesWidget({
    apiKey: 'AIzaSyDpL0YWqm79YWD9b0SwEdrrWtrHFxNjXg8',
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        pickupAddressRef.current.value = '';
        return;
      }
      // console.log(place.address_components);
      setOrigin(place.formatted_address);
      setFormattedPickupAddress(place.formatted_address);
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


  const createPackageDeliveryRequest = (packageDeliveryRequest) =>
    packageService.createPackageDeliveryRequest(packageDeliveryRequest);

  useEffect(async () => {
    if (origin && destination) {
      const distance = await packageService.calculateDistance(
        origin,
        destination
      );
      const d = {
        text: distance.data.rows[0].elements[0].distance.text,
        value: distance.data.rows[0].elements[0].distance.value
      };
      setDistance(d);
      console.log(d);
    }
  }, [origin, destination]);

  const uploadPackageImages = (files, requestId) =>
    packageService.packageImagesUpload(files, requestId);

  const updateUploadedFiles = (files) => setFiles(files);

  const calculateDeliveryFee = (distanceValue) => {
    console.log(distanceValue);
    if (distanceValue <= 10000) {
      return 80;
    }
    if (distanceValue <= 20000) {
      return 100;
    }
    if (distanceValue <= 30000) {
      return 120;
    }
    return 140;
  };

  useEffect(() => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ''; // Legacy method for cross browser support
      }
      return ''; // Legacy method for cross browser support
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>New Delivery Request</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          // height: '100%',
          marginTop: '2%',
          justifyContent: 'center'
        }}
      >
        <div style={{ margin: '1rem 3rem' }}>
          {/* <Container maxWidth='sm'> */}
          {showModal ? (
            <ConfirmDialog
              title="Package Delivery Request submitted successfully"
              msg="Please check your email for the quotation."
              handleOk={() => setShowModal(false)}
            />
          ) : null}
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              pickupAddress: '',
              dropOffAddress: '',
              specialRemarks: '',
              weight: 0,
              pickupDate: '',
              packageDescription: '',
              pickupTime: '',
              itemImages: []
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is required'),
              phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(9)
                .max(10)
                .required('Phone is required'),
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              pickupAddress: Yup.string().required(
                'Please select a valid address or nearest location (Street name, Aparment name,  etc.. )'
              ),
              dropOffAddress: Yup.string().required(
                'Please select a valid address or nearest location (Street name, Aparment name, etc.. )'
              ),
              specialRemarks: Yup.string(),
              packageDescription: Yup.string().required(
                'Please enter a package description'
              ),
              weight: Yup.number('Weight must be a number')
                .moreThan(0)
                .required('Weight is required'),
              pickupDate: Yup.date().required('Pickup date is required').min(new Date(new Date().setDate(new Date().getDate()-1)), 'Pickup date must be today or later'),
              pickupTime: Yup.string().required('Pickup time is required')
            })}
            //&&pickupDate.equals(new Date()).Yup.string().min(new Time(), 'Pickup time must be after current time')
            onSubmit={async (values, { resetForm }) => {
              console.log('sssssssssssss');
              setLoading(true);
              const packageDeliveryRequest = {
                customer: {
                  customerName: values.name,
                  customerPhone: values.phone,
                  customerEmail: values.email
                },
                pickupAddress: formattedPickupAddress,
                dropOffAddress: formattedDropoffAddress,
                specialRemarks: values.specialRemarks,
                packageDescription: values.packageDescription,
                weight: values.weight,
                pickupDate: values.pickupDate,
                pickupTime: values.pickupTime,
                deliveryFee: calculateDeliveryFee(distance.value),
                distance: distance.value
              };
              console.log(packageDeliveryRequest);
              try {
                const res = await createPackageDeliveryRequest(
                  packageDeliveryRequest
                );
                const createdPackageDeliveryRequestId = res.data.id;
                const imageUploadRes = await uploadPackageImages(
                  files,
                  createdPackageDeliveryRequestId
                );
                setLoading(false);
                console.log(res);
                console.log(imageUploadRes);
                setShowModal(true);
                resetForm();
                setFormattedPickupAddress('');
                setFormattedDropoffAddress('');
                pickupAddressRef.current.value = '';
                dropoffAddressRef.current.value = '';
                setFilesU({});
                setDistance(0);
                setAgreeToTermsAndConditions(false);
              } catch (e) {
                console.log(e);
              }
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
              <form onSubmit={handleSubmit} autoComplete="off">
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Package Delivery Request
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Request a package delivery
                  </Typography>
                </Box>

                <div>
                  <p style={{ fontWeight: '600', marginTop: '2rem' }}>
                    WHEN DO YOU PLAN TO MOVE*
                  </p>
                  <Grid item lg={6} md={6} sm={12}>
                    <TextField
                      error={Boolean(touched.pickupDate && errors.pickupDate)}
                      fullWidth
                      helperText={touched.pickupDate && errors.pickupDate}
                      label="Pickup Date*"
                      margin="normal"
                      name="pickupDate"
                      id="pickupDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true
                      }}
                      type="date"
                      value={values.pickupDate}
                      variant="outlined"
                      defaultValue="2017-05-24"
                      ref={datePickerRef}
                    />

                    <FormControl
                      variant="outlined"
                      fullWidth
                      error={Boolean(touched.pickupTime && errors.pickupTime)}
                      helperText={touched.pickupTime && errors.pickupTime}
                    >
                      <InputLabel
                        htmlFor="pickupTime"
                        id="demo-simple-select-helper-label"
                      >
                        Pickup Time
                      </InputLabel>
                      <Select
                        error={Boolean(touched.pickupTime && errors.pickupTime)}
                        helperText={touched.pickupTime && errors.pickupTime}
                        labelId="demo-simple-select-helper-label"
                        name="pickupTime"
                        id="pickupTime"
                        InputLabelProps={{
                          shrink: true
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pickupTime}
                        label="Pickup Time"
                      >
                        <MenuItem value="06.00AM-07.00AM">
                          06.00AM - 07.00AM
                        </MenuItem>
                        <MenuItem value="07.00AM-08.00AM">
                          07.00AM - 08.00AM
                        </MenuItem>
                        <MenuItem value="08.00AM-09.00AM">
                          08.00AM - 09.00AM
                        </MenuItem>
                        <MenuItem value="09.00AM-10.00AM">
                          09.00AM - 10.00AM
                        </MenuItem>
                        <MenuItem value="10.00AM-11.00AM">
                          10.00AM - 11.00AM
                        </MenuItem>
                        <MenuItem value="11.00AM-12.00PM">
                          11.00AM - 12.00PM
                        </MenuItem>
                        <MenuItem value="12.00PM-01.00PM">
                          12.00PM - 01.00PM
                        </MenuItem>
                        <MenuItem value="01.00PM-02.00PM">
                          01.00PM - 02.00PM
                        </MenuItem>
                        <MenuItem value="02.00PM-03.00PM">
                          02.00PM - 03.00PM
                        </MenuItem>
                        <MenuItem value="03.00PM-04.00PM">
                          03.00PM - 04.00PM
                        </MenuItem>
                        <MenuItem value="04.00PM-05.00PM">
                          04.00PM - 05.00PM
                        </MenuItem>
                        <MenuItem value="05.00PM-06.00PM">
                          05.00PM - 06.00PM
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </div>

                <div>
                  <p style={{ fontWeight: '600', marginTop: '2rem' }}>
                    ENTER YOUR PICKUP & DROPOFF ADDRESS
                  </p>
                    <Grid  lg={6} md={6} sm={12}>
                    <TextField
                      autoComplete="off"
                      autofill="off"
                      error={Boolean(
                        touched.pickupAddress && errors.pickupAddress
                      )}
                      helperText={touched.pickupAddress && errors.pickupAddress}
                      label="Pickup Address*"
                      fullWidth
                      margin="normal"
                      color="secondary"
                      variant="outlined"
                      name="pickupAddress"
                      id="pickupAddress"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputProps={{
                        autocomplete: 'new-password',
                        form: {
                          autocomplete: 'off'
                        }
                      }}
                      inputRef={pickupAddressRef}
                    />
                    </Grid>
                    {/* <FormControl
                      variant="outlined"
                      fullWidth
                      error={Boolean(touched.type && errors.type)}
                      helperText={touched.type && errors.type}
                    >
                      <InputLabel
                        htmlFor="type"
                        id="demo-simple-select-helper-label"
                      >
                        Type*
                      </InputLabel>
                      <Select
                        error={Boolean(touched.type && errors.type)}
                        helperText={touched.type && errors.type}
                        labelId="demo-simple-select-helper-label"
                        name="type"
                        id="type"
                        InputLabelProps={{
                          shrink: true
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.type}
                        label="Type"
                      >
                        <MenuItem value={'TWO_TON_VAN'}>TWO TON VAN</MenuItem>
                        <MenuItem value={'FOUR_TON_TRUCK'}>
                          FOUR TON TRUCK
                        </MenuItem>
                        <MenuItem value={'EIGHT_TON_TRUCK'}>
                          EIGHT TON TRUCK
                        </MenuItem>
                        <MenuItem value={'TEN_TON_TRUCK'}>
                          TEN TON TRUCK
                        </MenuItem>
                      </Select>
                    </FormControl> */}
                    <Grid lg={6} md={6} sm={12}>
                    <TextField
                      error={Boolean(
                        touched.dropOffAddress && errors.dropOffAddress
                      )}
                      helperText={
                        touched.dropOffAddress && errors.dropOffAddress
                      }
                      label="Dropoff Address*"
                      fullWidth
                      margin="normal"
                      color="secondary"
                      variant="outlined"
                      name="dropOffAddress"
                      id="dropOffAddress"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputRef={dropoffAddressRef}
                    />
                    </Grid>
                  <Grid lg={1} md={1} sm={3} xs={4}>
                    <TextField
                      fullWidth
                      label="Distance"
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
                      value={distance.text}
                      variant="outlined"
                    />
                  </Grid>
                </div>

                <div>
                  <p style={{ fontWeight: '600', marginTop: '2rem' }}>
                    WHAT ARE YOU PLANING TO MOVE?
                  </p>
                  <div>
                    <TextField
                      error={Boolean(
                        touched.packageDescription && errors.packageDescription
                      )}
                      helperText={
                        touched.packageDescription && errors.packageDescription
                      }
                      fullWidth
                      label="Package Description (Max 250 characters)*"
                      margin="normal"
                      name="packageDescription"
                      id="packageDescription"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={(event) => {
                        if (event.target.value.length <= 250) {
                          handleChange(event);
                        } else {
                          event.target.value = event.target.value.slice(0, 250);
                          handleChange(event);
                        }
                      }}
                      multiline
                      value={values.packageDescription}
                      InputLabelProps={{
                        shrink: true
                      }}
                      rows={2}
                      rowsmax={4}
                    />
                    <Grid item lg={6} md={6} sm={12}>
                      <TextField
                        error={Boolean(touched.weight && errors.weight)}
                        fullWidth
                        helperText={touched.weight && errors.weight}
                        label="Approximate Weight(Kg)*"
                        margin="normal"
                        name="weight"
                        id="weight"
                        onBlur={handleBlur}
                        onChange={(e) => {if(e.target.value>=0){handleChange(e);}}}
                        InputLabelProps={{
                          shrink: true
                        }}
                        type="number"
                        value={values.weight}
                        variant="outlined"
                        InputProps={{ inputProps: { min: 0 } }}
                      />
                      <TextField
                        error={Boolean(
                          touched.specialRemarks && errors.specialRemarks
                        )}
                        fullWidth
                        helperText={
                          touched.specialRemarks && errors.specialRemarks
                        }
                        label="Special Remarks(Max 250 characters)*"
                        margin="normal"
                        name="specialRemarks"
                        id="specialRemarks"
                        onBlur={handleBlur}
                        onChange={(event) => {
                          if (event.target.value.length <= 250) {
                            handleChange(event);
                          } else {
                            event.target.value = event.target.value.slice(0, 250);
                            handleChange(event);
                          }
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        // type="text"
                        value={values.specialRemarks}
                        variant="outlined"
                        multiline
                        rows={2}
                        rowsmax={4}
                      />
                    </Grid>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: '600', marginTop: '2rem' }}>
                    ABOUT YOURSELF
                  </p>
                  <div />
                </div>
                <Grid item lg={6} md={6} sm={12}>
                  <TextField
                    autoComplete="off"
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Name*"
                    margin="normal"
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="text"
                    value={values.name}
                    variant="outlined"
                  />
                  <div id="input-wrapper">
                    <label htmlFor="number" id="label" className="label">
                      +61
                    </label>
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Phone*"
                      margin="normal"
                      name="phone"
                      id="phone"
                      onBlur={handleBlur}
                      onChange={(event) => {
                        if (event.target.value.length < 10) {
                          handleChange(event);
                        } else {
                          event.target.value = event.target.value.slice(0, 9);
                          handleChange(event);
                        }
                      }}
                      InputLabelProps={{
                        shrink: true
                      }}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                    />
                  </div>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email*"
                    margin="normal"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>

                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  multiple
                  label="Package Image(s)"
                  files={filesU}
                  setFiles={setFilesU}
                  updateFilesCb={updateUploadedFiles}
                />

                <Checkbox
                  name="termsAndConditions"
                  id="termsAndConditions"
                  color="primary"
                  onChange={(e) =>
                    setAgreeToTermsAndConditions(e.target.checked)
                  }
                />
                <Typography style={{ display: 'inline' }} variant="h5">
                  Agree to{' '}
                  <a href="/terms" target="_blank">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.gradeamovers.com.au/privacy-policy/"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Typography>

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={!agreeToTermsAndConditions || loading}
                    fullWidth
                    size="large"
                    type="button"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Request
                  </Button>
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
                </Box>
              </form>
            )}
          </Formik>
        </div>
        {/* </Container> */}
      </Box>
    </>
  );
};
export default class PackageDeliveryRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* <Header /> */}
        <PackageDeliveryRequestPage />
        {/* <Footer /> */}
      </>
    );
  }
}
