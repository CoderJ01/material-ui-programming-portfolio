import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import image from './images/01_avatar.png'

const AboutMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 150, height: 150 }}
                />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default AboutMe;