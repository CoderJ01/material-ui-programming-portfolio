import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const Content = ({ heading1, heading2, link, image }) => {
    return (
        <Grid item xs={10}>
        <Typography variant="h5" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{heading1}</Typography>
        <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', marginTop: '-3%', textTransform: 'uppercase' }}>{heading2}</Typography>
            <Box
                sx={{
                    width: '100%',
                    height: 310,
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                    border: '5px solid rgb(0, 4, 55)',
                    borderRadius: '2%'
                }}
            >
                <a href={link} target="_blank" rel="noreferrer">
                    <img 
                        src={image}
                        alt=""
                        height="100%"
                        width="100%" 
                    />
                </a>
            </Box>
        </Grid>
    );
}

export default Content;