import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ContactMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginTop: '9%', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Contact Me</Typography>
                <Card sx={{ minWidth: 275 }}>
                    {/* one */}
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Container sx={{ marginLeft: '-3%'}}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>Name</Typography>
                        </Container>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '96%', marginTop: '-1%'}, 
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" variant="outlined"/>
                        </Box>
                    </CardContent>
                    {/* two  */}
                    <CardContent sx={{ textAlign: 'left', marginTop: '-5%' }}>
                        <Container sx={{ marginLeft: '-3%'}}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>Email</Typography>
                        </Container>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '96%', marginTop: '-1%'}, 
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" variant="outlined"/>
                        </Box>
                    </CardContent>
                    {/* three */}
                    <CardContent sx={{ textAlign: 'left', marginTop: '-5%' }}>
                        <Container sx={{ marginLeft: '-3%'}}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>Subject</Typography>
                        </Container>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '96%', marginTop: '-1%'}, 
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" variant="outlined"/>
                        </Box>
                    </CardContent>
                    {/* four */}
                    <CardContent sx={{ textAlign: 'left', marginTop: '-5%'}}>
                        <Container sx={{ marginLeft: '-3%'}}>
                            <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>Message</Typography>
                        </Container>
                        <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '96%', marginTop: '-1%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            variant="outlined"
                            />
                        </Box>
                    </CardContent>
                    {/* end */}
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