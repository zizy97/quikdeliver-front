/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
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
  Grid,
  FormHelperText,
} from "@mui/material";
import ConfirmDialog from "../../components/dialog/InformationDialog";
import { GoogleMap_API_KEY } from "../../config/keys";
import FileUpload from "../../components/fileupload/FileUpload";
import PackageService from "../../service/PackageService";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function PackageRequest() {
  const packageService = new PackageService();

  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("sl");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState({ text: "0", value: 0 });
  const [formattedPickupAddress, setFormattedPickupAddress] = useState("");
  const [formattedDropoffAddress, setFormattedDropoffAddress] = useState("");
  const [change, setchange] = useState(false);
  const [agreeToTermsAndConditions, setAgreeToTermsAndConditions] =
    useState(false);

  const datePickerRef = useRef();

  const { ref: pickupAddressRef } = usePlacesWidget({
    apiKey: { GoogleMap_API_KEY },
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        pickupAddressRef.current.value = "";
        return;
      }
      // console.log(place.address_components);
      setOrigin(place.formatted_address);
      setFormattedPickupAddress(place.formatted_address);
    },
    inputAutocompleteValue: "country",
    options: {
      types: ["address"],
      componentRestrictions: { country },
    },
  });

  const { ref: dropoffAddressRef } = usePlacesWidget({
    apiKey: { GoogleMap_API_KEY },
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        dropoffAddressRef.current.value = "";
        return;
      }
      setDestination(place.formatted_address);
      setFormattedDropoffAddress(place.formatted_address);
    },
    inputAutocompleteValue: "country",
    options: {
      types: ["address"],
      componentRestrictions: { country },
    },
  });

  const createPackageDeliveryRequest = (packageDeliveryRequest) =>
    packageService.createPackageDeliveryRequest(packageDeliveryRequest);

  useEffect(() => {
    const fetchData = async () => {
      if (origin && destination) {
        const distance = await packageService.calculateDistance(
          origin,
          destination
        );
        const d = {
          text: distance.data.rows[0].elements[0].distance.text,
          value: distance.data.rows[0].elements[0].distance.value,
        };
        setDistance(d);
        console.log(d);
      }
    };
    fetchData();
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

  return (
    <>
      <Helmet>
        <title>New Delivery Request</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          mt: "10%",
          mb: "10%",
          ml: 2,
          mr: 2,
          justifyContent: "center",
        }}
      >
        {showModal ? (
          <ConfirmDialog
            title="Package Delivery Request submitted successfully"
            msg="Please check your email for the quotation."
            handleOk={() => setShowModal(false)}
          />
        ) : null}
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            pickupAddress: "",
            dropOffAddress: "",
            specialRemarks: "",
            weight: 0,
            pickupDate: "",
            packageDescription: "",
            pickupTime: "",
            itemImages: [],
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            phone: Yup.string()
              .matches(phoneRegExp, "Phone number is not valid")
              .min(9)
              .max(10)
              .required("Phone is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            // pickupAddress: Yup.string().required(
            //   "Please select a valid address or nearest location (Street name, Aparment name,  etc.. )"
            // ),
            // dropOffAddress: Yup.string().required(
            //   "Please select a valid address or nearest location (Street name, Aparment name, etc.. )"
            // ),
            specialRemarks: Yup.string(),
            packageDescription: Yup.string().required(
              "Please enter a package description"
            ),
            weight: Yup.number("Weight must be a number")
              .moreThan(0)
              .required("Weight is required"),
            pickupDate: Yup.date()
              .required("Pickup date is required")
              .min(
                new Date(new Date().setDate(new Date().getDate() - 1)),
                "Pickup date must be today or later"
              ),
            pickupTime: Yup.string().required("Pickup time is required"),
          })}
          onSubmit={async (values, { resetForm }) => {
            console.log("sssssssssssss");
            setLoading(true);
            const packageDeliveryRequest = {
              customer: {
                customerName: values.name,
                customerPhone: values.phone,
                customerEmail: values.email,
              },
              // pickupAddress: formattedPickupAddress,
              // dropOffAddress: formattedDropoffAddress,              
              pickupAddress: "Sample pickup address",
              dropOffAddress: "Sample dropoff address",
              specialRemarks: values.specialRemarks,
              packageDescription: values.packageDescription,
              weight: values.weight,
              pickupDate: values.pickupDate,
              pickupTime: values.pickupTime,
              deliveryFee: calculateDeliveryFee(distance.value),
              // distance: distance.value,
              distance: 10,
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
              setFormattedPickupAddress("");
              setFormattedDropoffAddress("");
              pickupAddressRef.current.value = "";
              dropoffAddressRef.current.value = "";
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
            values,
          }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <Box sx={{ mb: 3 }}>
                <Typography color="textPrimary" variant="h3">
                  Package Delivery Request
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Request a package delivery
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{ fontWeight: "600", marginTop: "2rem" }}
                  color="textPrimary"
                >
                  WHEN DO YOU PLAN TO MOVE*
                </Typography>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                sx={{ backgroundColor: "white", p: 2,borderRadius: 2 }}
              >
                <TextField
                  sx={{ m: 1, minWidth: 200, width: "20%" }}
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
                    shrink: true,
                  }}
                  type="date"
                  value={values.pickupDate}
                  variant="outlined"
                  placeholder="2017-05-24"
                  // ref={}
                />
                <FormControl
                  sx={{ m: 1, minWidth: 200, width: "20%" }}
                  error={Boolean(touched.pickupTime && errors.pickupTime)}
                >
                  <InputLabel
                    htmlFor="pickupTime"
                    id="demo-simple-select-error-label"
                  >
                    Pickup Time
                  </InputLabel>
                  <Select
                    error={Boolean(touched.pickupTime && errors.pickupTime)}
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    name="pickupTime"
                    label="Pickup Time"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pickupTime}
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
                  <FormHelperText>
                    {touched.pickupTime && errors.pickupTime}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{ fontWeight: "600", marginTop: "2rem" }}
                  color="textPrimary"
                >
                  ENTER YOUR PICKUP & DROPOFF ADDRESS
                </Typography>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                sx={{ backgroundColor: "white", p: 2,borderRadius: 2 }}
              >
                <TextField
                  sx={{ m: 1, minWidth: 200, width: "40%" }}
                  autoComplete="off"
                  autofill="off"
                  error={Boolean(touched.pickupAddress && errors.pickupAddress)}
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
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                  inputRef={pickupAddressRef}
                />
                <TextField
                  sx={{ m: 1, minWidth: 200, width: "40%" }}
                  error={Boolean(
                    touched.dropOffAddress && errors.dropOffAddress
                  )}
                  helperText={touched.dropOffAddress && errors.dropOffAddress}
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
                <TextField
                  sx={{ m: 1, minWidth: 100, width: "10%" }}
                  fullWidth
                  label="Distance"
                  margin="normal"
                  name="distance"
                  id="distance"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  type="text"
                  value={distance.text}
                  variant="outlined"
                />
              </Grid>
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{ fontWeight: "600", marginTop: "2rem" }}
                  color="textPrimary"
                >
                  WHAT ARE YOU PLANING TO MOVE?
                </Typography>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                sx={{ backgroundColor: "white", p: 2,borderRadius: 2 }}
              >
                <TextField
                  sx={{ m: 1 }}
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
                    shrink: true,
                  }}
                  rows={2}
                  rowsmax={4}
                />
                <TextField
                  sx={{ m: 1, minWidth: 170, width: "20%" }}
                  error={Boolean(touched.weight && errors.weight)}
                  fullWidth
                  helperText={touched.weight && errors.weight}
                  label="Approximate Weight(Kg)*"
                  margin="normal"
                  name="weight"
                  id="weight"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    if (e.target.value >= 0) {
                      handleChange(e);
                    }
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="number"
                  value={values.weight}
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Grid>
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{ fontWeight: "600", marginTop: "2rem" }}
                  color="textPrimary"
                >
                  ABOUT YOURSELF
                </Typography>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                sx={{ backgroundColor: "white", p: 2,borderRadius: 2 }}
              >
                <TextField
                  sx={{ m: 1, minWidth: 200, width: "75%" }}
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
                    shrink: true,
                  }}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  sx={{ m: 1, minWidth: 200, width: "75%" }}
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
                    shrink: true,
                  }}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <Box
                  id="input-wrapper"
                  sx={{ margin: 1, minWidth: 200, width: "20%" }}
                >
                  <label
                    htmlFor="number"
                    style={{
                      zIndex: 99,
                      lineHeight: "25px",
                      padding: "2px",
                      marginLeft: "5px",
                      position: "absolute",
                      marginTop: "31px",
                      color: "#808080",
                    }}
                  >
                    +94
                  </label>
                  <TextField
                    inputProps={{
                      style: { textIndent: "30px" },
                    }}
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Phone*"
                    margin="normal"
                    name="phone"
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
                      shrink: true,
                    }}
                    type="number"
                    value={values.phone}
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{ fontWeight: "600", marginTop: "2rem" }}
                  color="textPrimary"
                >
                  Package Image
                </Typography>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                sx={{ backgroundColor: "white", p: 2,borderRadius: 2 }}
              >
                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  multiple
                  label="Package Image(s)"
                  files={filesU}
                  setFiles={setFilesU}
                  updateFilesCb={updateUploadedFiles}
                />
              </Grid>

              <Box sx={{ mt: 2 }}>
                <Checkbox
                  name="termsAndConditions"
                  id="termsAndConditions"
                  color="primary"
                  onChange={(e) =>
                    setAgreeToTermsAndConditions(e.target.checked)
                  }
                />
                <Typography sx={{ display: "inline" }} variant={"h6"}>
                  Agree to <Button sx={{ p: 0 }}>Terms and Conditions</Button>{" "}
                  and <Button sx={{ p: 0 }}>Privacy Policy</Button>{" "}
                </Typography>
              </Box>
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
                      color: "primary",
                      position: "fixed",
                      top: "50%",
                      left: "47%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
}
