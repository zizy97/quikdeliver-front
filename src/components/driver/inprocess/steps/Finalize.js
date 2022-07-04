import React from 'react';
import {Container,Grid} from '@mui/material';

const Finalize = () => {
    return (
        <Container 
            sx={{
                height:'100vh',
            }}
        >
            <Grid
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    mt:8,
                    justifyContent:"center"
                }}
            >
                <Grid 
                    item 
                    xs={12} 
                    sx={{
                        border:'1px solid blue'
                    }}>
                        B
                </Grid>
            </Grid>
        </Container>
    );
};

export default Finalize;