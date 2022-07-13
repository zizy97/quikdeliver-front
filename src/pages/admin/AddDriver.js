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
    CircularProgress,
} from '@mui/material';
import DriverService from '../../service/DriverService';
import {useParams, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ConfirmDialog from '../../components/dialog/InformationDialog';
import { usePlacesWidget } from 'react-google-autocomplete';
import { AddUserIcon } from '../../components/common/icons/Icons';


const AddDriver = (props) => {
    const driverService = new DriverService();
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [packageDeliveryRequest, setPackageDeliveryRequest] = useState({
        status: '',
        hourlyWage: 0.0
    });

    const [formattedAddress, setFormattedAddress] = useState('');
    const [origin, setOrigin] = useState('');
    const [country, setCountry] = useState("au");

    const [showModal, setShowModal] = useState(false);

    const { ref: addressRef } = usePlacesWidget({
        apiKey: 'AIzaSyDpL0YWqm79YWD9b0SwEdrrWtrHFxNjXg8',
        onPlaceSelected: (place) => {
          if (!place.address_components || place.address_components.length < 2) {
            addressRef.current.value = '';
            return;
          }
          setOrigin(place.formatted_address);
          setFormattedAddress(place.formatted_address); console.log(place);
        },
        inputAutocompleteValue: "country",
        options: {
          types: ["address"],
          componentRestrictions: { country },
        },
      });

    return (
        <>
            <Helmet>
                <title>Add New Driver</title>
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
                                    title={`Add New Driver`}
                                />

                            </Card>
                            <Container maxWidth='md'>
                                {showModal?<ConfirmDialog title={'Done'} msg={'New Driver Added Successfully.'} handleOk={()=>navigate('../', { replace: true })}/>:null}
                                <Formik
                                    initialValues={{
                                        name: '',
                                        address: '',
                                        email: '',
                                        telephoneNumber: '',
                                        license: '',
                                        emergencyContactNumber: '',
                                        otherDetails: '',
                                        hourlyWage: 0.0

                                    }}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string().required('Name is required'),
                                        telephoneNumber: Yup.string().max(10).min(9).required('Phone is required'),
                                        email: Yup.string().email('Must be a valid email').max(255),
                                        hourlyWage: Yup.number().min(1).required('Hourly wage is required'),
                                        address: Yup.string(),
                                        license: Yup.string().required('License number is required'),
                                        otherDetails: Yup.string(),
                                        emergencyContactNumber: Yup.string().max(10)
                                      })}
                                    onSubmit={async (values, { resetForm }) => {
                                        values['address'] = formattedAddress;
                                        console.log(values);
                                        setLoading(true);
                                        const addedDriver = await driverService.addNewDriver(values);
                                        setLoading(false);
                                        console.log('Added driver', addedDriver);
                                        setShowModal(true);
                                        resetForm();
                                        setFormattedAddress('');
                                        addressRef.current.value = '';
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
                                                <Grid item xs={5}>
                                                    <TextField
                                                        error={Boolean(touched.name && errors.name)}
                                                        fullWidth
                                                        helperText={touched.name && errors.name}
                                                        label='Name*'
                                                        margin='normal'
                                                        name='name'
                                                        id="name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='text'
                                                        value={values.name}
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                                <Grid item xs={1}/>
                                                <Grid item xs={5}>
                                                    <TextField
                                                        autoComplete="off"
                                                        autofill="off"
                                                        error={Boolean(touched.address && errors.address)}
                                                        helperText={touched.address && errors.address}
                                                        label='Address*'
                                                        fullWidth
                                                        margin='normal'
                                                        color="secondary"
                                                        variant="outlined"
                                                        name='address'
                                                        id='address'
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        inputRef={addressRef}
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item xs={5}>
                                                    <TextField
                                                        error={Boolean(touched.email && errors.email)}
                                                        fullWidth
                                                        helperText={touched.email && errors.email}
                                                        label='Email'
                                                        margin='normal'
                                                        name='email'
                                                        id='email'
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='email'
                                                        value={values.email}
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                                <Grid item xs={1}/>
                                                <Grid item xs={5}>
                                                    <TextField
                                                        error={Boolean(touched.telephoneNumber && errors.telephoneNumber)}
                                                        fullWidth
                                                        helperText={touched.telephoneNumber && errors.telephoneNumber}
                                                        label='Phone*'
                                                        margin='normal'
                                                        name='telephoneNumber'
                                                        id='telephoneNumber'
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='number'
                                                        value={values.telephoneNumber}
                                                        variant='outlined'
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item xs={3}>
                                                <TextField
                                                        error={Boolean(touched.license && errors.license)}
                                                        fullWidth
                                                        helperText={touched.license && errors.license}
                                                        label='License*'
                                                        margin='normal'
                                                        name='license'
                                                        id="license"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='text'
                                                        value={values.license}
                                                        variant='outlined'
                                                    />

                                                </Grid>
                                                <Grid item xs={1}/>
                                                <Grid item xs={3}>
                                                <TextField
                                                        error={Boolean(touched.hourlyWage && errors.hourlyWage)}
                                                        fullWidth
                                                        helperText={touched.hourlyWage && errors.hourlyWage}
                                                        label='Hourly Wage(Rs.)*'
                                                        margin='normal'
                                                        name='hourlyWage'
                                                        id="hourlyWage"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        InputProps={{ inputProps: { min: 0} }}
                                                        type='number'
                                                        value={values.hourlyWage}
                                                        variant='outlined'
                                                    />

                                                </Grid>
                                                <Grid item xs={1}/>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        error={Boolean(touched.emergencyContactNumber && errors.emergencyContactNumber)}
                                                        fullWidth
                                                        helperText={touched.emergencyContactNumber && errors.emergencyContactNumber}
                                                        label='Emergency Contact Number'
                                                        margin='normal'
                                                        name='emergencyContactNumber'
                                                        id='emergencyContactNumber'
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='telephone'
                                                        value={values.emergencyContactNumber}
                                                        variant='outlined'
                                                    />

                                                </Grid>
                                            </Grid>

                                            <Grid container>
                                                <Grid item xs={11}>
                                                    <TextField
                                                        error={Boolean(touched.otherDetails && errors.otherDetails)}
                                                        fullWidth
                                                        multiline
                                                        minRows={5}
                                                        maxRows={5}
                                                        helperText={touched.otherDetails && errors.otherDetails}
                                                        label='Other details'
                                                        margin='normal'
                                                        name='otherDetails'
                                                        id='otherDetails'
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        type='number'
                                                        value={values.otherDetails}
                                                        variant='outlined'
                                                    />
                                                </Grid>
                                            </Grid>
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
                                        <Grid container>
                                            <Grid item xs={11}>
                                            <Box sx={{ py: 2 }} style={{textAlign:'center'}}>
                                                <Button
                                                    color='primary'
                                                    fullWidth
                                                    disabled={isSubmitting}
                                                    style={{textAlign:'center'}}
                                                    size='large'
                                                    type='button' onClick={handleSubmit}
                                                    variant='contained'
                                                ><AddUserIcon width="32" height="32"/><span style={{width:"10px"}}/>
                                                    Add
                                                </Button>
                                            </Box>
                                            </Grid>
                                          </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </Container>
                        </Box>
                    </Box>
                    <PerfectScrollbar>
                        <Box sx={{ minWidth: 1050 }}>

                        </Box>
                    </PerfectScrollbar>
                </Container>
            </Box>
        </>
    );
};


export default AddDriver;
