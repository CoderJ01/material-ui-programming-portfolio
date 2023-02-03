import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Content from '../../components/Content/Content.component';

const Section = ({ dataObj = [] }) => {
    return (
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center' }}>
            <Container maxWidth="md">
                <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{dataObj.title}</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
                        <Content/>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Section;