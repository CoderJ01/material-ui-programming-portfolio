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
    resume 
} from './Portfolio.data';
import Section from '../../components/Section/Section.component';

const Portfolio = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ minHeight: '50vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                    <Container sx={{ marginTop: '6%' }}>
                        <Section dataObj={beforeBootcamp} fromTop={0}/>
                        <Section dataObj={bootcamp}/>
                        <Section dataObj={selfTaught}/>
                        <Section dataObj={certificates}/>
                        <Section dataObj={resume}/>
                    </Container>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Portfolio;