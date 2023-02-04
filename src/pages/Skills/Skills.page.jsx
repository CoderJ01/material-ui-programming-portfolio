import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Skills and Knowlegde</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={10} sx={{ marginTop: '10px' }}>
                        <Grid xs={6}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={6}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Skills;