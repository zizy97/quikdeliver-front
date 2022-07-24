import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from "@mui/material";
import getFirebase from '../../firebaseConfig';
// import useInput from '../useInput';
import AUTH from '../../utils/constants';
import React from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  // const email = useInput('');
  // const password = useInput('');

  const firebaseInstance = getFirebase();

  const signUp = async (email, password) => {

    try {
      if (firebaseInstance) {
        console.log(email);
        const user = await firebaseInstance.auth().signInWithEmailAndPassword(email, password);

        if (user) {
          sessionStorage.setItem(AUTH.REFRESH_TOKEN, user.user.refreshToken);
          sessionStorage.setItem(AUTH.EMAIL, user.user.email);

          firebaseInstance.auth().onAuthStateChanged(function(user) {
            if (user) {
              user.getIdToken().then(function(idToken) {
                sessionStorage.setItem(AUTH.TOKEN, idToken);
                console.log(idToken);
                navigate('/admin/dashboard', { replace: true });
                // window.location.reload();
                return idToken;
              });
            }
          });

        }
      }
    } catch (error) {
      console.log('error', error);
      alert(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}

      >

        <Container maxWidth='sm'   style={{
          width:'100%',
          position:'relative',
          left:'50%',
          margin:'50px',

        }}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required(),
              password: Yup.string().max(255).required()
            })}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              return signUp(values.email, values.password);
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
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color='textPrimary'
                    variant='h2'
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color='textSecondary'
                    gutterBottom
                    variant='body2'
                  >
                    Sign in on the booking platform
                  </Typography>
                </Box>

                {/*<Box*/}
                {/*  sx={{*/}
                {/*    pb: 1,*/}
                {/*    pt: 3*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <Typography*/}
                {/*    align='center'*/}
                {/*    color='textSecondary'*/}
                {/*    variant='body1'*/}
                {/*  >*/}
                {/*    login with email address*/}
                {/*  </Typography>*/}
                {/*</Box>*/}
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label='Email Address'
                  margin='normal'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type='email'
                  value={values.email}
                  variant='outlined' 
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label='Password'
                  margin='normal'
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type='password'
                  value={values.password}usePlacesWidget
                  variant='outlined' 
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color='primary'
                    disabled={isSubmitting}
                    fullWidth
                    size='large'
                    type='button' onClick={handleSubmit}
                    variant='contained'
                  >
                    Sign in now
                  </Button>
                </Box>
                {/*<Typography*/}
                {/*  color='textSecondary'*/}
                {/*  variant='body1'*/}
                {/*>*/}
                {/*  Don&apos;t have an account?*/}
                {/*  {' '}*/}
                {/*  <Link*/}
                {/*    component={RouterLink}*/}
                {/*    to='/register'*/}
                {/*    variant='h6'*/}
                {/*  >*/}
                {/*    Sign up*/}
                {/*  </Link>*/}
                {/*</Typography>*/}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
      <div style={{display:'flex',
        backgroundImage: "url('https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')",
        width:'50%',
        position:'absolute',
        top:'10px',
        right:'50%',
        height:'100%',
        backgroundSize: "cover",}}>

      </div>


    </>
  );
};
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <LoginPage></LoginPage>
    );
  }
}
