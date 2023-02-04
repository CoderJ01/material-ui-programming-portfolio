import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)', textAlign: 'center', marginTop: '6%', backgroundColor: 'white'  }}>Skills and Knowlegde</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={10} sx={{ marginTop: '10px' }}>
                        <Grid xs={6}>
                            <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                m: 1,
                                width: '100%',
                                height: 240,
                                backgroundColor: 'white'
                                },
                            }}
                            >
                                <Paper elevation={3}>
                                    <Container sx={{ textAlign: 'center' }}>
                                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>Heading</Typography>
                                    </Container>
                                    
                                    <Grid container spacing={2} sx={{ marginTop: '-11%', marginLeft: '-5%'}}>
                                        <Grid item xs={6}>
                                            <Container>
                                                <CheckCircleIcon sx={{ fill: 'green', marginTop: '4%'}}></CheckCircleIcon>
                                                <Container sx={{ marginTop: '-36%', marginLeft: '6%' }}>
                                                    <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva'}}>Language</Typography>
                                                </Container>
                                            </Container>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Skills;