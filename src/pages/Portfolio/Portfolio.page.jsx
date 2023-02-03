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
                                                    <Item>xs=6</Item>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Item>xs=6</Item>
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