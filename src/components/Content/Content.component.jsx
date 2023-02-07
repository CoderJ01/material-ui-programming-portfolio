import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import './Content.style.css';

const Content = ({ heading1, heading2, link, image }) => {
    return (
        <Grid item xs={12} sm={7} md={8} lg={8} xl={6} className="content-grid">
            <div className="content-heading-group">
                <Typography variant="h5" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }} className="content-heading-1">{heading1}</Typography>
                <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)', marginTop: '-3%', textTransform: 'uppercase' }} className="content-heading-2">{heading2}</Typography>
            </div>
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
                className="content-box"
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