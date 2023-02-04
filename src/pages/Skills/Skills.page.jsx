import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import Card from '../../components/Card/Card.component';
import { 
    frontend, 
    backend, 
    database, 
    miscellaneous } 
from './Skills.data';

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ height: '185vh', backgroundColor: 'rgb(255, 253, 208)' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)', textAlign: 'center', marginTop: '6%'}}>Skills and Knowlegde</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={10} sx={{ marginTop: '10px' }}>
                            <Card dataObj={frontend}/>
                            <Card dataObj={backend}/>
                            <Card dataObj={database}/>
                            <Card dataObj={miscellaneous}/>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Skills;