import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import SetCheckmarkColor from './PortfolioCard.util';
import './PortfolioCard.style.css';

const PortfolioCard = ({ dataObj = [] }) => {
    let checkmarkColor;
    return (
        <Grid xs={6} className='portfolio-card-grid'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 470,
                    backgroundColor: 'white'
                    },
                }}
                className='portfolio-card-box'
            >
                <Paper elevation={8} className='portfolio-card-paper'>
                    <Container sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }} className='portfolio-card-heading'>{dataObj.title}</Typography>
                    </Container>
                    <Grid container spacing={2} sx={{ marginTop: '-11%', marginLeft: '-5%'}} className='portfolio-card-grid-2'>
                    {
                        Array.apply(0, Array(dataObj.langauge.length)).map(function(x, i) {
                            checkmarkColor = SetCheckmarkColor(dataObj.langauge[i].proficiency);
                            return (
                                <Grid item xs={6}>
                                    <Container className='portfolio-card-container'>
                                        <CheckCircleIcon sx={{ fill: checkmarkColor, marginTop: '4%'}} className='portfolio-card-check'></CheckCircleIcon>
                                        <Container sx={{ marginTop: '-36%', marginLeft: '6%' }} className='language-container'>
                                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva'}} className='portfolio-card-language'>{dataObj.langauge[i].name}</Typography>
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