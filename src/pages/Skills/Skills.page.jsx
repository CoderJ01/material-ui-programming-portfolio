import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard.component';
import { 
    frontend, 
    backend, 
    database, 
    miscellaneous,
    description } 
from './Skills.data';
import Paper from '@mui/material/Paper';
import './Skills.style.css'

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className='skills-container-top'>
                <Box sx={{ height: '220vh', backgroundColor: 'rgb(255, 253, 208)' }} className='skills-box'>
                    <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)', textAlign: 'center', marginTop: '6%'}} className='skills-heading'>Skills and Knowledge</Typography>
                    <Container className='skills-container'>
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
                            className='skills-box'
                            >
                            <Paper elevation={8} sx={{ textAlign: 'center'}}  className='skills-paper'>
                                <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }} className='skills-description-heading'>Description</Typography>
                                <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }} className='skills-description'>{description}</Typography>
                            </Paper>
                        </Box>
                    </Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={10} sx={{ marginTop: '10px' }} className="skills-grid">
                            <PortfolioCard dataObj={frontend}/>
                            <PortfolioCard dataObj={backend}/>
                            <PortfolioCard dataObj={database}/>
                            <PortfolioCard dataObj={miscellaneous}/>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Skills;