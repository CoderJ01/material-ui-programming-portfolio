import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import image from './images/01_avatar.png'
import { Typography } from '@mui/material';
import { paragraphs } from './AboutMe.data';
import './AboutMe.style.css';

const AboutMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ height: '155vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)'}}  className='about-me-box'>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }} className='about-me-heading'>About Me</Typography>
                <div style={{ display: 'flex', justifyContent:'center'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{ width: 150, height: 150, border: '5px solid rgb(0, 4, 55)' }}
                        className='about-me-avatar'
                    />
                </div>
                <Container maxWidth="sm" sx={{marginTop: '5%'}}>
                    <Box sx={{ height: '100vh' }}>
                        {
                            paragraphs.map(paragraph => {
                                return (
                                    <Typography variant="body1" gutterBottom sx={{ color: 'black' }} className='about-me-body'>{paragraph}</Typography>
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