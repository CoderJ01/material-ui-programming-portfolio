import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { 
    beforeBootcamp, 
    bootcamp, 
    selfTaught, 
    certificates, 
    resumeObj 
} from './Portfolio.data';
import Section from '../../components/Section/Section.component';

const Portfolio = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ height: '1225vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                    <Section dataObj={beforeBootcamp} />
                    <Section dataObj={bootcamp}/>
                    <Section dataObj={selfTaught}/>
                    <Section dataObj={certificates}/>
                    <Section dataObj={resumeObj}/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Portfolio;