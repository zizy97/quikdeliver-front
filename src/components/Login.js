import { Grid, Paper, Button,Avatar,Typography,TextField,FormControlLabel, Checkbox,Link } from '@mui/material';
import {Google} from '@mui/icons-material';
import React,{useState} from 'react';



const Login = () => {

    const [checked,setChecked] = useState(false);

    const check= () => {
        setChecked(!checked);
    };


    return(
      <Grid>
          <Paper elevation={10}
            sx={{
                padding:'35px 20px',     
                height:'65vh',
                width:'300px',
                margin:'15px auto',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'10px',
                
            }}
          >
                <Avatar
                  component="div"
                  src="/broken-image.jpg"
                  sx={{
                      bgcolor: '#BFD7ED',
                  }}
                >
                </Avatar>
                <Typography variant='h6'
                    sx={{
                        fontWeight:'bold',
                        color:'#0074B7'
                    }}
                >Sign In</Typography>

                <TextField 
                    sx={{
                        marginTop:'10px'
                    }}
                    label="Username" placeholder='Username' fullWidth required />

                <TextField label="Password" placeholder='Password' fullWidth required />

                <FormControlLabel
                    label="Keep me signed in"
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={check}
                            name="keepsigned "  
                            color="primary"
                        >
                           
                        </Checkbox>
                    }    
                ></FormControlLabel>

                <Button variant="contained"
                    sx={{
                        width:'220px',
                        bgcolor:'#0074B7'
                    }}
                >Sign In</Button>

                <Button variant='outlined'
                    startIcon={<Google/>}
                    sx={{
                        marginTop:'5px'
                    }}
                >
                    Sign in with Google
                </Button>

                
                <Typography 
                    sx={{
                        margin:'15px',
                        fontSize:'15px',
                        textAlign:'center'
                    }}
                >
                    <Link underline='none'>Forgot password?</Link>

                    <br/>
                
                    Don't have an account?. <Link underline='none'>Sign up</Link> here. 
                </Typography>
          </Paper>
      </Grid>  
    );
};

export default Login;