import { Container, Grid } from '@mui/material';
import React from 'react';

const ViewMap = () => {
    return (
        <Container 
            sx={{
                height:'100vh',
            }}
        >
            <Grid
                sx={{
                    border:'1px solid blue',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:"center",
                    mt:8,
                }}
            >
                <Grid 
                    item 
                    xs={8} 
                    sx={{
                        border:'1px solid blue'
                    }}>
                        B
                </Grid>
                <Grid 
                    item 
                    xs={4} 
                    sx={{
                        border:'1px solid blue'
                    }}>
                        C
                </Grid>
            </Grid>
        </Container>
    );
};

export default ViewMap;