import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Portfolio = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                    <Container maxWidth="md">
                        <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Before Bootcamp</Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Bootcamp</Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Self-Taught</Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Certificates</Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Box sx={{ bgcolor: 'blue', height: '100vh', textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Résumé</Typography>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Portfolio;