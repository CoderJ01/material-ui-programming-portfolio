import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const Content = ({ heading1, heading2, link, image }) => {
    let topHeader;
    let bottomHeader;

    if(heading1 != null) {
        topHeader =  <Typography variant="h5" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>{heading1}</Typography>;
    }
    else {
        topHeader = "";
    }

    if(heading2 != null) {
        bottomHeader = <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', marginTop: '-3%', textTransform: 'uppercase' }}>{heading2}</Typography>
    }
    else {
        bottomHeader = "";
    }
    
    return (
        <Grid item xs={5}>
        {topHeader}
        {bottomHeader}
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