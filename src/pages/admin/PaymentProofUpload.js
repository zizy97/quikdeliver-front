/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";
import ConfirmDialog from "../../components/dialog/InformationDialog";

import FileUpload from "../../components/fileupload/FileUpload";

const PaymentProofUploadPage = () => {
  // const navigate = useNavigate();
  const packageService = new PackageService();
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});
  const [loading, setLoading] = useState(false);
  const [packageRequest, setPackageRequest] = useState();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const { requestId } = useParams();

  const createPackageDeliveryRequest = (file, requestId, description) => {
    return packageService.paymentProofUpload(
      file,
      packageRequest.id,
      description
    );
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const pack = await packageService.findPackageDeliveryRequestHash(
          requestId
        );
        console.log(pack.data);
        setPackageRequest(pack.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setShowErrorModal(true);
        setErrorMessage("Link has expired.");
      }
    };
    getData();
  }, [requestId]);

  const updateUploadedFiles = (files) => setFiles(files);

  return (
    <>
      <Helmet>
        <title>Payment Proof Upload</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          // height: '100%',
          marginTop: "2%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          {showModal ? (
            <ConfirmDialog
              title={"Successfull"}
              msg={"Payment proof upladed successfully."}
              handleOk={() => setShowModal(false)}
            />
          ) : null}
          {showErrorModal ? (
            <ConfirmDialog title={"Error"} msg={errorMessage} />
          ) : null}
          <Formik
            initialValues={{
              note: "",
              itemImages: [],
            }}
            validationSchema={Yup.object().shape({
              note: Yup.string(),
            })}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              console.log(files);
              console.log(values);
              console.log(requestId);
              try {
                const res = await createPackageDeliveryRequest(
                  files[0],
                  requestId,
                  values.note
                );
                console.log(res);
                setLoading(false);
                setShowModal(true);
                setFiles([]);
                resetForm();
                setFilesU({});
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
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 10 }}>
                  <Typography color="textPrimary" variant="h2">
                    Payment Proof Upload
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Please upload payment proof to proceed with the delivery.
                  </Typography>
                </Box>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Detail</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Pickup Address</TableCell>
                      <TableCell>{packageRequest?.pickupAddress}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Drop-off Address</TableCell>
                      <TableCell>{packageRequest?.dropOffAddress}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Distance(Km)</TableCell>
                      <TableCell>
                        {parseInt(packageRequest?.distance) / 1000}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>
                        {packageRequest?.packageDescription}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Special Remarks</TableCell>
                      <TableCell>{packageRequest?.specialRemarks}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Approximate weight(Kg)</TableCell>
                      <TableCell>{packageRequest?.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pickup Date</TableCell>
                      <TableCell>{packageRequest?.pickupDate}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pickup Time</TableCell>
                      <TableCell>{packageRequest?.pickupTime}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Delivery Fee (AUD)</TableCell>
                      <TableCell>{packageRequest?.deliveryFee}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  multiple
                  files={filesU}
                  setFiles={setFilesU}
                  label="Payment proof image"
                  updateFilesCb={updateUploadedFiles}
                />

                <TextField
                  error={Boolean(touched.note && errors.note)}
                  fullWidth
                  helperText={touched.note && errors.note}
                  label="Note"
                  margin="normal"
                  name="note"
                  id="note"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="text"
                  value={values.note}
                  variant="outlined"
                />

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="button"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Upload
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
        </Container>
      </Box>
    </>
  );
};

export default function PaymentProofUpload() {
  return (
    <>
      {/* <Header/> */}
      <PaymentProofUploadPage />
      {/* <Footer /> */}
    </>
  );
}
