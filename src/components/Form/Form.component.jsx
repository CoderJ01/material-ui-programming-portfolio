import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
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
            <InputSection fromTop={'-5%'} label={"Message"} placeholder={"Messsage"} value={message} setState={setMessage} multiLine={true}/>
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