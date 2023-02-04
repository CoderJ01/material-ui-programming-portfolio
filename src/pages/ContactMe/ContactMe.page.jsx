import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const ContactMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginTop: '9%', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Contact Me</Typography>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        
                    </CardContent>
                    <CardActions sx={{justifyContent: 'center'}}>
                        <Button 
                        variant="contained" 
                        size="small" 
                        sx={{ 
                            backgroundColor: 'rgb(0, 4, 55)', 
                            color: 'rgb(255, 253, 190)',
                            ':hover': { 
                                backgroundColor: 'rgb(255, 253, 170)',
                                border: '2px solid rgb(0, 4, 55)',
                                color: 'rgb(0, 4, 55)',
                                fontWeight: 650
                            } 
                        }}>Submit</Button>
                    </CardActions>
                </Card>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ContactMe;