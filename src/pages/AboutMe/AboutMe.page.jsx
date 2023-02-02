import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const AboutMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', minheight: '100vh' }} />
            </Container>
        </React.Fragment>
    );
}

export default AboutMe;