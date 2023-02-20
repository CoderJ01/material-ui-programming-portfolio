import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import image from './images/01_avatar.png'
import { Typography } from '@mui/material';
import { paragraphs } from './AboutMe.data';

const AboutMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ minHeight: '155vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)'}}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>About Me</Typography>
                <div style={{ display: 'flex', justifyContent:'center'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{ width: 150, height: 150, border: '5px solid rgb(0, 4, 55)' }}
                    />
                </div>
                <Container maxWidth="sm" sx={{marginTop: '5%', border: '2px solid rgb(0, 4, 55)', background: 'white', borderRadius: '10px' }}>
                    <Box sx={{ minHeight: '100vh' }}>
                        {
                            paragraphs.map((paragraph, i) => {
                                return (
                                    <Typography variant="body1" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }} key={i}>{paragraph}</Typography>
                                );
                            })
                        }
                    </Box>
                </Container>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default AboutMe;