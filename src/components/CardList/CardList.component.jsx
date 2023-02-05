import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import SetCheckmarkColor from './CardList.util';

const CardList = ({ dataObj = [] }) => {
    let checkColor;
    return (
        <Grid xs={6}>
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
            >
                <Paper elevation={8}>
                    <Container sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{dataObj.title}</Typography>
                    </Container>
                    <Grid container spacing={2} sx={{ marginTop: '-11%', marginLeft: '-5%'}}>
                    {
                        Array.apply(0, Array(dataObj.langauge.length)).map(function(x, i) {
                            checkColor = SetCheckmarkColor(dataObj.langauge[i].proficiency);
                            return (
                                <Grid item xs={6}>
                                <Container>
                                    <CheckCircleIcon sx={{ fill: checkColor, marginTop: '4%'}}></CheckCircleIcon>
                                    <Container sx={{ marginTop: '-36%', marginLeft: '6%' }}>
                                        <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva'}}>{dataObj.langauge[i].name}</Typography>
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

export default CardList;