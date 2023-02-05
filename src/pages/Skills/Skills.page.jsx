import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import CardList from '../../components/CardList/CardList.component';
import { 
    frontend, 
    backend, 
    database, 
    miscellaneous,
    description } 
from './Skills.data';
import Paper from '@mui/material/Paper';

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ height: '220vh', backgroundColor: 'rgb(255, 253, 208)' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)', textAlign: 'center', marginTop: '6%'}}>Skills and Knowledge</Typography>
                    <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: '100%',
                            height: 200,
                            },
                        }}
                        >
                        <Paper elevation={8} sx={{ textAlign: 'center'}}>
                            <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>Description</Typography>
                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{description}</Typography>
                        </Paper>
                    </Box>
                    </Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={10} sx={{ marginTop: '10px' }}>
                            <CardList dataObj={frontend}/>
                            <CardList dataObj={backend}/>
                            <CardList dataObj={database}/>
                            <CardList dataObj={miscellaneous}/>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Skills;