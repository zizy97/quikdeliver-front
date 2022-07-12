import {useState } from 'react';
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
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import VehicleService from '../../service/VehicleService';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ConfirmDialog from '../../components/dialog/InformationDialog';
import { useNavigate } from 'react-router-dom';
import { AddVehicleIcon } from '../../components/common/icons/Icons';

const AddVehicle = () => {
  const vehicleService = new VehicleService();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Add New Vehicle</title>
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
                <CardHeader title={`Add New Vehicle`} />
              </Card>
              <Container maxWidth="md">
                {showModal ? (
                  <ConfirmDialog
                    title={'Done'}
                    msg={'New Vehicle Added Successfully.'}
                    handleOk={() => navigate('../', { replace: true })}
                  />
                ) : null}
                <Formik
                  initialValues={{
                    registrationNumber: '',
                    model: '',
                    type: '',
                    vehicleDescription: ''
                  }}
                  validationSchema={Yup.object().shape({
                    registrationNumber: Yup.string().required(
                      'Vehicle registration number is required'
                    ),
                    model: Yup.string().max(255).required('Model is required'),
                    type: Yup.string().max(255).required('Type is required'),
                    vehicleDescription: Yup.string()
                      .max(255)
                      .required('Vehicle description is required')
                  })}
                  onSubmit={async (values, { resetForm }) => {
                    values['currentAllocationStatus'] = false;
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
                      <Grid container>
                        <Grid item xs={12}>
                          <TextField
                            error={Boolean(
                              touched.registrationNumber &&
                                errors.registrationNumber
                            )}
                            fullWidth
                            helperText={
                              touched.registrationNumber &&
                              errors.registrationNumber
                            }
                            label="Vehicle Registration Number*"
                            margin="normal"
                            name="registrationNumber"
                            id="registrationNumber"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={values.registrationNumber}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <TextField
                            error={Boolean(touched.model && errors.model)}
                            fullWidth
                            helperText={touched.model && errors.model}
                            label="Model*"
                            margin="normal"
                            name="model"
                            id="model"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                            type="text"
                            value={values.model}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <FormControl
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
                              <MenuItem value={'TWO_TON_VAN'}>
                                TWO TON VAN
                              </MenuItem>
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
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12}>
                          <TextField
                            error={Boolean(
                              touched.vehicleDescription &&
                                errors.vehicleDescription
                            )}
                            helperText={
                              touched.vehicleDescription &&
                              errors.vehicleDescription
                            }
                            fullWidth
                            label="Vehicle Description*"
                            margin="normal"
                            name="vehicleDescription"
                            id="vehicleDescription"
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            multiline
                            value={values.vehicleDescription}
                            InputLabelProps={{
                              shrink: true
                            }}
                            rows={2}
                            rowsmax={4}
                          />
                        </Grid>
                      </Grid>

                      <Box sx={{ py: 2 }} style={{ textAlign: 'center' }}>
                        <Button
                          color="primary"
                          fullWidth
                          disabled={isSubmitting}
                          style={{ textAlign: 'center' }}
                          size="large"
                          type="button"
                          onClick={handleSubmit}
                          variant="contained"
                        ><AddVehicleIcon height="32" width="32" /><span style={{width:"10px"}}/>
                          Add
                        </Button>
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
    </>
  );
};

export default AddVehicle;
