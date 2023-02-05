import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import { isValidEmail } from './ContactMe.utils';

if(process.env.NODE_ENV) {
    require('dotenv').config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`
    });   
}
else {
    require('dotenv').config();
}

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if(name && isValidEmail(email) && subject && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        }
        else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ height: '100vh', marginTop: '9%', textAlign: 'center' }}>
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
                            <TextField 
                                id="outlined-basic" 
                                variant="outlined" 
                                placeholder="Name"
                                value={name}
                                onChange={e => {
                                    setName(e.target.value)
                                }}
                            />
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
                            <TextField 
                                id="outlined-basic" 
                                variant="outlined"
                                placeholder='Email'
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }}
                            />
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
                            <TextField 
                                id="outlined-basic" 
                                variant="outlined"
                                placeholder="Subject"
                                value={subject}
                                onChange={e => {
                                    setSubject(e.target.value)
                                }}
                            />
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
                            placeholder="Message"
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value)
                            }}
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
                            }}
                            onClick={submit}
                        >Submit</Button>
                    </CardActions>
                    <span className={emailSent ? 'visible' : null }>Thank you for your message, we will be in touch in no time!</span>
                </Card>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ContactMe;