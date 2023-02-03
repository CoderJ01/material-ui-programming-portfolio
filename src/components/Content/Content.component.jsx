import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const Content = () => {
    return (
        <Grid item xs={5}>
        <Typography variant="h5" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>heading 1</Typography>
        <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', marginTop: '-3%', textTransform: 'uppercase' }}>heading 2</Typography>
            <Box
                sx={{
                    width: '100%',
                    height: 310,
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                    border: '5px solid rgb(0, 4, 55)'
                }}
            >
                <a href="https://github.com/CoderJ01/Project1" target="_blank" rel="noreferrer">
                    <img 
                        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format" 
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