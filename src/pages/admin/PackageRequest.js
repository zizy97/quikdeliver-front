/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  InputAdornment,
} from "@mui/material";
import ConfirmDialog from "../../components/dialog/InformationDialog";
import { GoogleMap_API_KEY } from "../../config/keys";
import FileUpload from "../../components/fileupload/FileUpload";
import PackageService from "../../service/PackageService";
import ca from "date-fns/esm/locale/ca/index.js";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function PackageRequest() {
  const [country, __setCountry] = useState("lk");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const packageService = new PackageService();

  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});
  const [loading, setLoading] = useState(false);

  const [agreeToTermsAndConditions, setAgreeToTermsAndConditions] =
    useState(false);

  useEffect(() => {
    if (origin && destination) {
      calculateDistance();
    }
  }, [origin, destination]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      pickupAddress: "",
      pickupCity: "",
      dropOffAddress: "",
      dropOffCity: "",
      distance: "",
      duration: "",
      specialRemarks: "",
      weight: 0,
      pickupDate: "",
      packageDescription: "",
      pickupTime: "",
      itemImages: [],
      agreed: false,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(9)
        .max(9)
        .required("Phone is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      pickupAddress: Yup.string().required("Pickup address is required"),
      pickupCity: Yup.string().required("Pickup City is required"),
      dropOffAddress: Yup.string().required("Drop off address is required"),
      dropOffCity: Yup.string().required("Drop off City is required"),
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
      agreed: Yup.boolean().oneOf(
        [true],
        "You must agree to the terms and conditions"
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const packageDeliveryRequest = {
        customer: {
          customerName: values.name,
          customerPhone: values.phone,
          customerEmail: values.email,
        },
        pickupAddress: values.pickupAddress + "," + values.pickupCity,
        dropOffAddress: values.dropOffAddress + "," + values.dropOffCity,
        specialRemarks: values.specialRemarks,
        packageDescription: values.packageDescription,
        weight: values.weight,
        pickupDate: values.pickupDate,
        pickupTime: values.pickupTime,
        distance: values.distance,
      };
      console.log(packageDeliveryRequest);
      try {
        const res = await createPackageDeliveryRequest(packageDeliveryRequest);
        const createdPackageDeliveryRequestId = res.data.id;
        const imageUploadRes = await uploadPackageImages(
          files,
          createdPackageDeliveryRequestId
        );
        setLoading(false);
        console.log(res);
        console.log(imageUploadRes);
        setShowModal(true);
        setFilesU({});
        setDistance(0);
        setAgreeToTermsAndConditions(false);
        resetForm();
      } catch (e) {
        console.log(e);
      }
    },
  });

  const { ref: pickupCityRef } = usePlacesWidget({
    apiKey: GoogleMap_API_KEY,
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        pickupCityRef.current.value = "";
        return;
      }
      formik.setFieldValue(
        "pickupCity",
        place.formatted_address.split(",").slice(0, -1).join(",")
      );
      setOrigin(place.formatted_address);
    },
    options: {
      types: ["(cities)"],
      componentRestrictions: { country },
    },
  });

  const { ref: dropOffCityRef } = usePlacesWidget({
    apiKey: GoogleMap_API_KEY,
    onPlaceSelected: (place) => {
      if (!place.address_components || place.address_components.length < 2) {
        dropOffCityRef.current.value = "";
        return;
      }
      formik.setFieldValue(
        "dropOffCity",
        place.formatted_address.split(",").slice(0, -1).join(",")
      );
      setDestination(place.formatted_address);
    },
    options: {
      types: ["(cities)"],
      componentRestrictions: { country },
    },
  });

  const calculateDistance = async () => {
    if (origin === "" || destination === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: origin,
      destination: destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(results);
    setDirectionsResponse(results);
    formik.setFieldValue("distance", results.routes[0].legs[0].distance.text);
    formik.setFieldValue("duration", results.routes[0].legs[0].duration.text);
  };

  const createPackageDeliveryRequest = (packageDeliveryRequest) =>
    packageService.createPackageDeliveryRequest(packageDeliveryRequest);

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
        <form onSubmit={formik.handleSubmit} autoComplete="off">
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
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
          >
            <TextField
              sx={{ m: 1, minWidth: 200, width: "20%" }}
              error={Boolean(
                formik.touched.pickupDate && formik.errors.pickupDate
              )}
              fullWidth
              helperText={formik.touched.pickupDate && formik.errors.pickupDate}
              label="Pickup Date*"
              name="pickupDate"
              {...formik.getFieldProps("pickupDate")}
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              variant="outlined"
              placeholder="2017-05-24"
            />
            <FormControl
              sx={{ m: 1, minWidth: 200, width: "20%" }}
              error={Boolean(
                formik.touched.pickupTime && formik.errors.pickupTime
              )}
            >
              <InputLabel
                htmlFor="pickupTime"
                id="demo-simple-select-error-label"
              >
                Pickup Time
              </InputLabel>
              <Select
                error={Boolean(
                  formik.touched.pickupTime && formik.errors.pickupTime
                )}
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Pickup Time"
                name="pickupTime"
                {...formik.getFieldProps("pickupTime")}
              >
                <MenuItem value="06.00AM-07.00AM">06.00AM - 07.00AM</MenuItem>
                <MenuItem value="07.00AM-08.00AM">07.00AM - 08.00AM</MenuItem>
                <MenuItem value="08.00AM-09.00AM">08.00AM - 09.00AM</MenuItem>
                <MenuItem value="09.00AM-10.00AM">09.00AM - 10.00AM</MenuItem>
                <MenuItem value="10.00AM-11.00AM">10.00AM - 11.00AM</MenuItem>
                <MenuItem value="11.00AM-12.00PM">11.00AM - 12.00PM</MenuItem>
                <MenuItem value="12.00PM-01.00PM">12.00PM - 01.00PM</MenuItem>
                <MenuItem value="01.00PM-02.00PM">01.00PM - 02.00PM</MenuItem>
                <MenuItem value="02.00PM-03.00PM">02.00PM - 03.00PM</MenuItem>
                <MenuItem value="03.00PM-04.00PM">03.00PM - 04.00PM</MenuItem>
                <MenuItem value="04.00PM-05.00PM">04.00PM - 05.00PM</MenuItem>
                <MenuItem value="05.00PM-06.00PM">05.00PM - 06.00PM</MenuItem>
              </Select>
              <FormHelperText>
                {formik.touched.pickupTime && formik.errors.pickupTime}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "2rem" }}
              color="textPrimary"
            >
              ENTER YOUR PICKUP ADDRESS
            </Typography>
          </Box>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
          >
            <TextField
              sx={{ m: 1, minWidth: 200, width: "40%" }}
              autoComplete="off"
              autofill="off"
              error={Boolean(
                formik.touched.pickupAddress && formik.errors.pickupAddress
              )}
              helperText={
                formik.touched.pickupAddress && formik.errors.pickupAddress
              }
              label="Pickup Address*"
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              name="pickupAddress"
              {...formik.getFieldProps("pickupAddress")}
            />
            <TextField
              sx={{ m: 1, minWidth: 200, width: "20%" }}
              error={Boolean(
                formik.touched.pickupCity && formik.errors.pickupCity
              )}
              helperText={formik.touched.pickupCity && formik.errors.pickupCity}
              label="Pickup City*"
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              name="pickupCity"
              {...formik.getFieldProps("pickupCity")}
              inputRef={pickupCityRef}
            />
          </Grid>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "2rem" }}
              color="textPrimary"
            >
              ENTER YOUR DROP OFF ADDRESS
            </Typography>
          </Box>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
          >
            <TextField
              sx={{ m: 1, minWidth: 200, width: "40%" }}
              autoComplete="off"
              autofill="off"
              error={Boolean(
                formik.touched.dropOffAddress && formik.errors.dropOffAddress
              )}
              helperText={
                formik.touched.dropOffAddress && formik.errors.dropOffAddress
              }
              label="Drop Off Address*"
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              name="dropOffAddress"
              {...formik.getFieldProps("dropOffAddress")}
            />
            <TextField
              sx={{ m: 1, minWidth: 200, width: "20%" }}
              error={Boolean(
                formik.touched.dropOffCity && formik.errors.dropOffCity
              )}
              helperText={
                formik.touched.dropOffCity && formik.errors.dropOffCity
              }
              label="DropOff City*"
              fullWidth
              margin="normal"
              color="secondary"
              variant="outlined"
              name="dropOffCity"
              inputRef={dropOffCityRef}
              {...formik.getFieldProps("dropOffCity")}
            />
            <TextField
              sx={{ m: 1, minWidth: 100, width: "10%" }}
              fullWidth
              label="Distance"
              margin="normal"
              name="distance"
              disabled
              type="text"
              value={formik.values.distance}
              variant="outlined"
              autoFocus
            />
            <TextField
              sx={{ m: 1, minWidth: 100, width: "10%" }}
              fullWidth
              label="Duration"
              margin="normal"
              name="distance"
              disabled
              type="text"
              value={formik.values.duration}
              variant="outlined"
              autoFocus
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
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
          >
            <TextField
              sx={{ m: 1 }}
              error={Boolean(
                formik.touched.packageDescription &&
                  formik.errors.packageDescription
              )}
              helperText={
                formik.touched.packageDescription &&
                formik.errors.packageDescription
              }
              fullWidth
              label="Package Description (Max 250 characters)*"
              margin="normal"
              name="packageDescription"
              variant="outlined"
              multiline
              {...formik.getFieldProps("packageDescription")}
              InputLabelProps={{
                shrink: true,
              }}
              rows={2}
              rowsmax={4}
            />
            <TextField
              sx={{ m: 1, minWidth: 170, width: "20%" }}
              error={Boolean(formik.touched.weight && formik.errors.weight)}
              fullWidth
              helperText={formik.touched.weight && formik.errors.weight}
              label="Approximate Weight(Kg)*"
              margin="normal"
              name="weight"
              {...formik.getFieldProps("weight")}
              InputLabelProps={{
                shrink: true,
              }}
              type="number"
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
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
          >
            <TextField
              sx={{ m: 1, minWidth: 200, width: "40%" }}
              autoComplete="off"
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name*"
              margin="normal"
              name="name"
              {...formik.getFieldProps("name")}
              InputLabelProps={{
                shrink: true,
              }}
              type="text"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1, minWidth: 200, width: "30%" }}
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email*"
              margin="normal"
              name="email"
              {...formik.getFieldProps("email")}
              InputLabelProps={{
                shrink: true,
              }}
              type="email"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1, minWidth: 200, width: "20%" }}
              id="outlined-error-helper-text"
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone*"
              name="phone"
              {...formik.getFieldProps("phone")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+94</InputAdornment>
                ),
              }}
            />
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
            sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}
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
          <FormControl
            error={Boolean(formik.touched.agreed && formik.errors.agreed)}
          >
            <Box sx={{ mt: 2 }}>
              <Checkbox
                name="agreed"
                id="termsAndConditions"
                color="primary"
                {...formik.getFieldProps("agreed")}
              />
              <Typography sx={{ display: "inline" }} variant={"h6"}>
                Agree to <Button sx={{ p: 0 }}>Terms and Conditions</Button> and{" "}
                <Button sx={{ p: 0 }}>Privacy Policy</Button>{" "}
              </Typography>
              <FormHelperText>
                {formik.touched.agreed && formik.errors.agreed}
              </FormHelperText>
            </Box>
          </FormControl>
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={!formik.isValid || formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Request
            </Button>
            {formik.isSubmitting && (
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
      </Box>
    </>
  );
}
