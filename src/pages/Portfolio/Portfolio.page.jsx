import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { sections } from './Portfolio.util';

const Portfolio = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                    {
                        sections.map(section => {
                            return (
                                <Container maxWidth="md">
                                    <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{section.title}</Typography>
                                    </Box>
                                </Container>
                            );
                        })
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Portfolio;