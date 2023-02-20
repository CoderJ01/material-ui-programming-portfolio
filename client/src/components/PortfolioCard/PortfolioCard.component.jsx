import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import SetCheckmarkColor from './PortfolioCard.util';

const PortfolioCard = ({ dataObj = [] }) => {
    let checkmarkColor;
    return (
        <Grid xs={12} sm={8} md={8} lg={6} sx={{ width: '100%'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 580,
                    backgroundColor: 'white',
                    },
                }}
            >
                <Paper elevation={8} className='portfolio-card-paper'>
                    <Container sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{dataObj.title}</Typography>
                    </Container>
                    <Grid container spacing={5}>
                    {
                        Array.apply(0, Array(dataObj.language.length)).map(function(x, i) {
                            checkmarkColor = SetCheckmarkColor(dataObj.language[i].proficiency);
                            return (
                                <Grid item xs={6}>
                                    <Container>
                                        <Container sx={{ display: 'flex'}}>
                                            <CheckCircleIcon sx={{ fill: checkmarkColor }}></CheckCircleIcon>
                                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva'}}>{dataObj.language[i].name}</Typography>
                                        </Container>
                                    </Container>
                                </Grid>
                            );
                        })
                    }
                    </Grid>
                </Paper>
            </Box>
        </Grid>
    );
}

export default PortfolioCard;