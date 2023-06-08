import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard.component';
import Paper from '@mui/material/Paper';
import { GET_ALL_SKILL_CATEGORIES_WITH_DETAILS } from '../../graphql/queries/Skill.query';
import { GET_ALL_DESCRIPTIONS } from '../../graphql/queries/Description.query';
import { useQuery } from '@apollo/client';
import Loader from '../../components/Loader/Loader.component';

const Skills = () => {
    
    const { loading: skillLoading, error, data: skillData } = useQuery(GET_ALL_SKILL_CATEGORIES_WITH_DETAILS);
    const { loading: descriptionLoading, data: descriptionData } = useQuery(GET_ALL_DESCRIPTIONS);

    if(skillLoading || descriptionLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <>
        {
            !error && 
            (
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Box sx={{ minHeight: '220vh', backgroundColor: 'rgb(255, 253, 208)', paddingBottom: '10vh' }}>
                            <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)', textAlign: 'center', marginTop: '6%'}}>Skills and Knowledge</Typography>
                            <Container>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                        m: 1,
                                        width: '100%',
                                        minHeight: 200,
                                        },
                                    }}
                                    >
                                    <Paper elevation={8} sx={{ textAlign: 'center'}}>
                                        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{descriptionData.descriptions[0].title}</Typography>
                                        <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', fontFamily: 'Monotype Corsiva' }}>{descriptionData.descriptions[0].text}</Typography>
                                    </Paper>
                                </Box>
                            </Container>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={4} sx={{ marginTop: '10px', justifyContent: 'center' }}>
                                    {
                                        Array.apply(0, Array(skillData.skillCategories.length)).map(function(x, i) {
                                            return (
                                                <PortfolioCard dataObj={skillData.skillCategories[i]} key={i}/>
                                            );
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </React.Fragment>
            )
        }
        </>
    );
}

export default Skills;