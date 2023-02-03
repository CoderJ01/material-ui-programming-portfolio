import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { sections } from './Portfolio.util';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={4} sx={{ justifyContent: 'center', marginTop: '1%'}}>
                                                <Grid item xs={5}>
                                                <Typography variant="h5" gutterBottom sx={{ color: 'rgb(0, 4, 55)', padding: '-10%' }}>h heading</Typography>
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                            height: 310,
                                                            '&:hover': {
                                                            backgroundColor: 'primary.main',
                                                            opacity: [0.9, 0.8, 0.7],
                                                            },
                                                            border: '5px solid rgb(0, 4, 55)'
                                                        }}
                                                    >
                                                        <img 
                                                            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format" 
                                                            alt=""
                                                            height="100%"
                                                            width="100%" 
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
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