import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Section from '../../components/Section/Section.component';
import { GET_ALL_SECTIONS_WITH_DETAILS } from '../../graphql/queries/Section.query';
import { useQuery } from '@apollo/client';
import Loader from '../../components/Loader/Loader.component';

const Portfolio = () => {
    
    const { loading, error, data } = useQuery(GET_ALL_SECTIONS_WITH_DETAILS);

    if(loading) {
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
                        <Box sx={{ minHeight: '50vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)' }}>
                            <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Portfolio</Typography>
                            <Container sx={{ marginTop: '6%' }}>
                                <Section dataObj={data.sections[0]} fromTop={0} key={0}/>
                                {
                                    Array.apply(0, Array(data.sections.length)).map(function(x, i) {
                                        if(i !== 0 && data.sections[i].title !== 'Résumé') {
                                            return (
                                                <Section dataObj={data.sections[i]} key={i}/>
                                            )
                                        }
                                        else {
                                            return <span></span>;
                                        }
                                    })
                                }
                            </Container>
                        </Box>
                    </Container>
                </React.Fragment>
            )
        }
        </>
    );
}

export default Portfolio;