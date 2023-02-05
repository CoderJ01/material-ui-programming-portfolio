import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import { isValidEmail } from './Form.utils';
import InputSection from '../InputSection/InputSection.component';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if(name && isValidEmail(email) && subject && message) {
            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const userId = process.env.REACT_APP_USER_ID;
            const templateParams = {
                name,
                email,
                subject,
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
        <Card sx={{ minWidth: 275 }}>
            <InputSection label={"Name"} placeholder={"Name"} value={name} setState={setName}/>
            <InputSection fromTop={'-5%'} label={"Email"} placeholder={"Email"} value={email} setState={setEmail}/>
            <InputSection fromTop={'-5%'} label={"Subject"} placeholder={"Subject"} value={subject} setState={setSubject}/>
            
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
    );
}

export default Form;