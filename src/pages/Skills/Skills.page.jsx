import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import Card from '../../components/Card/Card.component';
import { frontend } from './Skills.data';

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
                                height: 400,
                                backgroundColor: 'white'
                                },
                            }}
                            >
                                <Card dataObj={frontend}/>
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