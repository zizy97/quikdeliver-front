import { Grid, Paper,Card, CardMedia, Button,Avatar,Typography,TextField,FormControlLabel, Checkbox,Link, FormControl,InputAdornment, IconButton, OutlinedInput, InputLabel } from '@mui/material';
import {Google,Visibility, VisibilityOff} from '@mui/icons-material';
import React,{useState} from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked,setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const check= () => {
        setChecked(!checked);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChangeUn = (event) => {
        setUsername(event.target.value);
       // window.alert(username);
      };

    const handleChangeEmail = (event) => {
        SetEmail(event.target.value);
        //window.alert(email);
      };

    const handleChangePwd = (event) => {
      setPassword(event.target.value);
      //window.alert(password);
    };

    return(
        <Paper
        sx={{     
            padding:'10px',
            margin:'35px auto',
            height:'max-content',
            width:{lg:640,md:640,sm:300,xs:260},
            display:'flex',
            flexDirection:'column',
            alignSelf:'center',
            alignItems:'center',
            borderColor:'primary.main'           
        }}
      >
           <Grid container spacing={1}>
                <Grid item xs={12}
                    sx={{
                        justifyContent:'center',
                        alignItems:'center',
                        textAlign:'center'
                    }}
                >
                    <Avatar
                    component="div"
                    src="/broken-image.jpg"
                    sx={{
                        bgcolor: '#BFD7ED',
                        height:'50px',
                        width:'50px',
                        margin:'25px auto'
                    }}
                    >
                    </Avatar>

                <Typography variant='h6'
                    sx={{
                        fontWeight:'bold',
                        color:'#0074B7'
                    }}
                >Create new account</Typography>  
            </Grid>

            <Grid item xs={6} sx={{m:0}}>
            <FormControl sx={{m:1,width:1}} variant="outlined">
                    <TextField 
                        sx={{                            
                            width:{lg:300,md:300,sm:270,xs:240},
                            margin:'0 auto',
                                marginTop:'10px',
                            }}
                        label="Username"  
                        onChange={handleChangeUn}
                        required
                    />
                </FormControl>

                <FormControl sx={{m:1,width:1}} variant="outlined">
                    <TextField 
                        sx={{                            
                            width:{lg:300,md:300,sm:270,xs:240},
                            margin:'0 auto',
                            marginTop:'10px',
                        }}
                        id="email"
                        type='text'
                        label="Email"
                        placeholder="Email"
                        onChange={handleChangeEmail}
                    />
                </FormControl>

                <FormControl sx={{ m: 1,width:1 }} variant="outlined" required> 
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <OutlinedInput
                        id='password'
                        label='Password'
                        type={showPassword ? 'text' : 'password'}
                        required
                        sx={{
                            width:{lg:300,md:300,sm:270,xs:240},
                            margin:'0 auto',
                            marginTop:'10px',
                            borderColor:'blue'
                        }}
                        onChange={handleChangePwd}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            
            <Grid item xs={6} >
              <Card 
                 sx={{
                    marginTop:2, 
                    display:{xs:'none',sm:'none',md:'flex',lg:'flex'}        
                }}>
                  <CardMedia
                    component="img"
                    image={'public/assets/sign_in.jpg'}
                    sx={{
                        width:{lg:300,md:300,sm:270,xs:240},
                        height:'100%',
                        padding:'2px'
                    }}
                  />
              </Card>
            </Grid>

            <Grid item xs={12}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    margin:'0 auto',
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <FormControlLabel
                    label="Accept terms & conditions"
                    control={
                        <Checkbox
                            sx={{
                                width:{lg:40,md:30,sm:25,xs:20},
                                margin:'10px',
                                borderColor:'primary.main',
                                fontSize:{lg:15,md:14,sm:13,xs:12},
                            }}
                            checked={checked}
                            onChange={check}
                            name="keepsigned "  
                            color="primary"
                        />
                    }    
                ></FormControlLabel>

                <Button variant="contained"
                    sx={{
                        margin:'5px 0',
                        width:{lg:'20vw',md:'25vw',sm:220,xs:200},
                        bgcolor:'#0074B7',
                        fontSize:{xs:'12px',sm:'14px'}
                    }}
                >Create Account</Button>

                <Button variant='outlined'
                    startIcon={<Google/>}
                    sx={{
                        margin:'5px 0',
                        width:{lg:'20vw',md:'25vw',sm:220,xs:200},
                        fontSize:{xs:'12px',sm:'14px'}
                    }}
                >
                    Sign up with Google
                </Button>

            </Grid>

            <Grid item xs={12}>
            
                <Typography
                    sx={{
                        margin:{xs:'12px'},
                        fontSize:{lg:15,md:14,sm:13,xs:12},
                        textAlign:'center',
                    }}
                >
                
                    Already have <Link underline='none'>an account</Link>?.
                </Typography>
           
            </Grid>
        </Grid>
      </Paper>
     );
};

export default SignUp;