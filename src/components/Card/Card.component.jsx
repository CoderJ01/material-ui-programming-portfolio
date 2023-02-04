import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Card = ({ dataObj = [] }) => {
    return (
        <Paper elevation={3}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{dataObj.title}</Typography>
            </Container>
            <Grid container spacing={2} sx={{ marginTop: '-11%', marginLeft: '-5%'}}>
            {/* {
                dataObj.language.map(language => {
                    return (
                        <Grid item xs={6}>
                            <Container>
                                <CheckCircleIcon sx={{ fill: 'green', marginTop: '4%'}}></CheckCircleIcon>
                                <Container sx={{ marginTop: '-36%', marginLeft: '6%' }}>
                                    <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva'}}>{language.name}</Typography>
                                </Container>
                            </Container>
                        </Grid>
                    );
                })
            } */}
            </Grid>
        </Paper>
    );
}

export default Card;