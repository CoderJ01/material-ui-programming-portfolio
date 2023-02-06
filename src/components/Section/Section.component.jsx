import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Content from '../../components/Content/Content.component';

const Section = ({ dataObj = [], fromTop = 100 }) => {
    return (
        <Container maxWidth="md">
            <Box sx={{ minHeight: '70vh', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{dataObj.title}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
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