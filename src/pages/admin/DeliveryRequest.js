/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PerfectScrollbar from "react-perfect-scrollbar";
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
  CircularProgress,
  Typography,
} from "@mui/material";
import PackageService from "../../service/PackageService";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import ConfirmDialog from "../../components/dialog/InformationDialog";
import Modal from "react-modal";
import Base64Image from "../../components/common/Base64Image";
import { usePlacesWidget } from "react-google-autocomplete";
import {
  AcceptIcon,
  RejectIcon,
  RejectTask,
  SaveIcon,
  ViewIcon,
} from "../../components/common/icons/Icons";

Modal.setAppElement("#root");

const DeliveryRequest = () => {
  const packageService = new PackageService();
  const { id } = useParams();
  const [origin, setOrigin] = useState("");
  const [payslipData, setPayslipData] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("au");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState({ text: "0", value: 0 });
  const [destination, setDestination] = useState("");
  const [isValuesLoaded, setIsValuesLoaded] = useState(false);
  const [newPaymentAmount, setNewPaymentAmount] = useState(0);
  const [deliveryRejectedModalIsOpen, setDeliveryRejectedModalIsOpen] =
    useState(false);
  const [stateChange, setstateChange] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [packageDeliveryRequest, setPackageDeliveryRequest] = useState({
    status: "",
    pickupTime: "",
    deliveryFee: 0,
    paidAmount: 0,
    pickupAddress: "",
    dropOffAddress: "",
    distance: 0,
    customer: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
    },
  });

  const [originalStatus, setOriginalStatus] = useState("");

  

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderColor: "#652341",
    },
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

  useEffect(() => {
    const getData = async () => {
      console.log(id);
      setLoading(true);
      const packageDeliveryRequest =
        await packageService.findPackageDeliveryRequest(id);
      setPackageDeliveryRequest(packageDeliveryRequest.data);
      setIsValuesLoaded(true);
      setLoading(false);
      setOriginalStatus(packageDeliveryRequest.data.status);
      console.log(packageDeliveryRequest.data);
    };
    getData();
  }, []);

  const handleAccept = async () => {
    setLoading(true);
    const updatedPackageDeliveryRequest =
      await packageService.updateDeliveryPackageStatus(id, "ADMIN_APPROVED");
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
    if (value === "ADMIN_REJECTED") {
      setDeliveryRejectedModalIsOpen(true);
    }
    setPackageDeliveryRequest({
      ...packageDeliveryRequest,
      status: value,
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

  return (
    <>
      <Helmet>
        <title>Package Delivery Request</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
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
                    color: "primary",
                    position: "fixed",
                    top: "50%",
                    left: "47%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
              <Container maxWidth="md">
                {showModal ? (
                  <ConfirmDialog
                    title={"Done"}
                    msg={"Package successfully updated."}
                    handleOk={() => setShowModal(false)}
                  />
                ) : null}
                <Formik
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
                    <form onSubmit={handleSubmit}>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          sx={{ fontWeight: "600", marginTop: "2rem" }}
                          color="textPrimary"
                        >
                          BASIC DETAILS
                        </Typography>
                      </Box>
                      <Box sx={{ p: 3,backgroundColor:"white",borderRadius:2}}>
                      <Grid container >
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
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
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
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
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
                            }}
                            type="telephone"
                            value={
                              packageDeliveryRequest?.customer?.customerPhone
                                ? "+94 " +
                                  packageDeliveryRequest.customer.customerPhone
                                : ""
                            }
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                            margin="normal"
                            name="specialRemarks"
                            id="specialRemarks"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            type="text"
                            value={packageDeliveryRequest?.specialRemarks}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          sx={{ fontWeight: "600", marginTop: "2rem" }}
                          color="textPrimary"
                        >
                          DELIVERY DETAILS
                        </Typography>
                      </Box>
                      <Box sx={{ p: 3,backgroundColor:"white",borderRadius:2}}>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
                            }}
                            type="text"
                            value={packageDeliveryRequest?.pickupAddress}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
                            }}
                            type="text"
                            value={packageDeliveryRequest?.dropOffAddress}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
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
                              margin: "15px 10px -10px 0",
                              color: "#808080",
                            }}
                          >
                            <label>Distance(Km)</label>
                          </div>
                          <TextField
                            fullWidth
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
                            variant="outlined"
                            value={packageDeliveryRequest?.distance / 1000}
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={11}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
                            }}
                            rows={2}
                            rowsmax={4}
                          />
                        </Grid>
                      </Grid>
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          sx={{ fontWeight: "600", marginTop: "2rem" }}
                          color="textPrimary"
                        >
                          DATE AND TIME
                        </Typography>
                      </Box>
                      <Box sx={{ p: 3,backgroundColor:"white",borderRadius:2}}>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
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
                              shrink: true,
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
                                margin: "14px 10px 7px 0",
                                color: "#808080",
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
                                shrink: true,
                              }}
                              onBlur={handleBlur}
                              // onChange={(e)=>setPackageDeliveryRequest({...packageDeliveryRequest,  pickupTime:e.target.value})}
                              onChange={handleChange}
                              value={packageDeliveryRequest?.pickupTime}
                            >
                              <MenuItem value={"06.00AM-07.00AM"}>
                                06.00AM - 07.00AM
                              </MenuItem>
                              <MenuItem value={"07.00AM-08.00AM"}>
                                07.00AM - 08.00AM
                              </MenuItem>
                              <MenuItem value={"08.00AM-09.00AM"}>
                                08.00AM - 09.00AM
                              </MenuItem>
                              <MenuItem value={"09.00AM-10.00AM"}>
                                09.00AM - 10.00AM
                              </MenuItem>
                              <MenuItem value={"10.00AM-11.00AM"}>
                                10.00AM - 11.00AM
                              </MenuItem>
                              <MenuItem value={"11.00AM-12.00PM"}>
                                11.00AM - 12.00PM
                              </MenuItem>
                              <MenuItem value={"12.00PM-01.00PM"}>
                                12.00PM - 01.00PM
                              </MenuItem>
                              <MenuItem value={"01.00PM-02.00PM"}>
                                01.00PM - 02.00PM
                              </MenuItem>
                              <MenuItem value={"02.00PM-03.00PM"}>
                                02.00PM - 03.00PM
                              </MenuItem>
                              <MenuItem value={"03.00PM-04.00PM"}>
                                03.00PM - 04.00PM
                              </MenuItem>
                              <MenuItem value={"04.00PM-05.00PM"}>
                                04.00PM - 05.00PM
                              </MenuItem>
                              <MenuItem value={"05.00PM-06.00PM"}>
                                05.00PM - 06.00PM
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          sx={{ fontWeight: "600", marginTop: "2rem" }}
                          color="textPrimary"
                        >
                          PAYMENTS
                        </Typography>
                      </Box>
                      <Box sx={{ p: 3,backgroundColor:"white",borderRadius:2}}>
                      <Grid container>
                        <Grid item xs={5}>
                          <div
                            style={{
                              margin: "15px 10px -10px 0",
                              color: "#808080",
                            }}
                          >
                            <label>Delivery Fee(LKR)</label>
                          </div>
                          <TextField
                            fullWidth
                            // label='Delivery Fee (LKR)'
                            margin="normal"
                            name="distance"
                            id="distance"
                            disabled
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true,
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
                              margin: "15px 10px -10px 0",
                              color: "#808080",
                            }}
                          >
                            <label>Outstanding Amount (LKR)</label>
                          </div>
                          <TextField
                            fullWidth
                            // label='Outstanding Amount (LKR)'
                            margin="normal"
                            name="outstandingAmount"
                            disabled
                            id="outstandingAmount"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true,
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
                            style={{ marginTop: "16px" }}
                          >
                            {/*<InputLabel htmlFor="deliveryStatus" id="demo-simple-select-helper-label">Delivery Status</InputLabel>*/}
                            <div
                              style={{
                                margin: "14px 10px 7px 0",
                                color: "#808080",
                              }}
                            >
                              <label>Delivery Status</label>
                            </div>
                            <Select
                              sx={{fontWeight:700}}
                              labelId="demo-simple-select-helper-label"
                              name="deliveryStatus"
                              id="deliveryStatus"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              // onBlur={handleBlur}
                              onChange={(e) =>
                                handleDeliveryStatusChange(e.target.value)
                              }
                              value={
                                packageDeliveryRequest.status ===
                                "ADMIN_REJECTED"
                                  ? stateChange
                                    ? "ADMIN_REJECTED"
                                    : originalStatus
                                  : packageDeliveryRequest.status
                              }
                              // label="Delivery Status"
                            >
                              <MenuItem value={"PAYMENT_PENDING"}>
                                PAYMENT_PENDING
                              </MenuItem>
                              <MenuItem value={"ADMIN_APPROVAL_PENDING"}>
                                ADMIN_APPROVAL_PENDING
                              </MenuItem>
                              <MenuItem value={"ADMIN_APPROVED"}>
                                ADMIN_APPROVED
                              </MenuItem>
                              <MenuItem value={"ADMIN_REJECTED"}>
                                ADMIN_REJECTED
                              </MenuItem>
                              <MenuItem value={"DELIVERY_IN_PROGRESS"}>
                                DELIVERY_IN_PROGRESS
                              </MenuItem>
                              <MenuItem value={"DELIVERY_COMPLETED"}>
                                DELIVERY_COMPLETED
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <Button
                            style={{ marginTop: "50px", marginLeft: "10px" }}
                            disabled={
                              packageDeliveryRequest?.status ===
                              "PAYMENT_PENDING"
                            }
                            size="large"
                            type="button"
                            onClick={() => showPaymentSlip(id)}
                            variant="contained"
                          >
                            <ViewIcon height="24" width="24" />
                            <span style={{ width: "10px" }} />
                            Show Payment Slip
                          </Button>
                        </Grid>
                      </Grid>
                      </Box>
                      <Grid container sx={{ marginTop: "20px" }}>
                        <Grid item xs={5}>
                          <Button
                            sx={{ backgroundColor: "green","&:disabled":{backgroundColor:""}}}
                            disabled={
                              packageDeliveryRequest?.status ===
                                "ADMIN_APPROVED" ||
                              packageDeliveryRequest?.status ===
                                "DELIVERY_IN_PROGRESS" ||
                              packageDeliveryRequest?.status ===
                                "DELIVERY_COMPLETED"
                            }
                            fullWidth
                            size="large"
                            type="button"
                            onClick={handleAccept}
                            variant="contained"
                          >
                            <AcceptIcon height="24" width="24" />
                            <span style={{ width: "10px" }} />
                            ACCEPT
                          </Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <Button
                            color="error"
                            disabled={
                              packageDeliveryRequest?.status ===
                                "DELIVERY_COMPLETED" ||
                              packageDeliveryRequest?.status ===
                                "ADMIN_REJECTED"
                            }
                            fullWidth
                            size="large"
                            type="button"
                            onClick={() => setDeliveryRejectedModalIsOpen(true)}
                            variant="contained"
                          >
                            <RejectIcon height="24" width="24" />
                            <span style={{ width: "10px" }} />
                            Reject
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid item xs={11}>
                        <Box sx={{ py: 2 }} style={{ textAlign: "center" }}>
                          <Button
                            color="primary"
                            fullWidth
                            disabled={
                              packageDeliveryRequest.status === originalStatus
                            }
                            style={{ textAlign: "center" }}
                            size="large"
                            type="button"
                            onClick={() => handleDeliveryStatusChangeUpdate()}
                            variant="contained"
                          >
                            <SaveIcon height="24" width="24" />
                            <span style={{ width: "10px" }} />
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
            isOpen={deliveryRejectedModalIsOpen}
            onRequestClose={() => setDeliveryRejectedModalIsOpen(false)}
            style={customStyles}
            contentLabel="Delivery Complete Modal"
          >
            {/* <Base64Image data={payslipData} /> */}
            <Box
              sx={{
                backgroundColor: "background.default",
                minHeight: "100%",
                py: 3,
              }}
            >
              <Container>
                <PerfectScrollbar>
                  <Box>
                      <Container>
                        <Formik
                          initialValues={{
                            rejectReason: "",
                          }}
                          validationSchema={Yup.object().shape({
                            rejectReason: Yup.string()
                              .required("Reason is required")
                              .min(
                                10,
                                "Reason must be at least 10 characters long"
                              ),
                          })}
                          onSubmit={async (values, { resetForm }) => {
                            if (values.rejectReason.length >= 10) {
                              setstateChange(true);
                              await handleReject(id, rejectReason).catch(
                                (err) => {
                                  alert(err.message);
                                }
                              );
                              setDeliveryRejectedModalIsOpen(false);
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
                            <form onSubmit={handleSubmit}>
                              <Grid container > 
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
                                      shrink: true,
                                    }}
                                    type="text"
                                    value={values.rejectReason}
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                  />
                                </Grid>
                              </Grid>

                              <Box
                                sx={{ py: 2 }}
                                style={{ textAlign: "center" }}
                              >
                                <Button
                                  color="primary"
                                  fullWidth
                                  style={{ textAlign: "center" }}
                                  size="large"
                                  type="submit"
                                  onClick={async() => {
                                    if(errors.rejectReason===undefined) {
                                      handleSubmit();
                                    }
                                  }}
                                  variant="contained"
                                >
                                  <RejectTask height="24" width="24" />
                                  <span style={{ width: "10px" }} />
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
