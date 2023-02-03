import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { 
    beforeBootcamp, 
    bootcamp, 
    selfTaught, 
    // certificates, 
    // resumeObj 
} from './Portfolio.data';
import Section from '../../components/Section/Section.component';

const Portfolio = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '1000vh', textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                    <Section dataObj={beforeBootcamp} fromTop={40} sectionHeight={75}/>
                    <Section dataObj={bootcamp} fromTop={-120} sectionHeight={580}/>
                    <Section dataObj={selfTaught} fromTop={3200}/>
                    {/* <Section dataObj={certificates}/> */}
                    {/* <Section dataObj={resumeObj}/> */}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Portfolio;