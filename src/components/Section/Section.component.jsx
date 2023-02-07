import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Content from '../../components/Content/Content.component';
// import './Section.style.css';

const Section = ({ dataObj = [], fromTop = 10 }) => {
    return (
        <Container maxWidth="md" sx={{ marginTop: fromTop + '%'}}>
            <Box sx={{ minHeight: '0vh', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{dataObj.title}</Typography>
                <Box sx={{ flexGrow: 1 }} className='.box'>
                    <Grid container spacing={4} sx={{ justifyContent: 'center'}} className="section-grid">
                    {
                        Array.apply(0, Array(dataObj.content.length)).map(function(x, i) {
                            return (
                                <Content
                                    heading1={dataObj.content[i].heading1}
                                    heading2={dataObj.content[i].heading2}
                                    link={dataObj.content[i].link}
                                    image={dataObj.content[i].image}
                                />
                            );
                        })
                    }
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Section;