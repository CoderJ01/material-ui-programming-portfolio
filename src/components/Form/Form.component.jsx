import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import emailjs from 'emailjs-com';
import { isValidEmail } from './Form.utils';
import InputSection from '../InputSection/InputSection.component';
import PortfolioButton from '../PortfolioButton/PortfolioButton.component';

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
        <Card sx={{ minWidth: 275, border: '5px solid rgb(0, 4, 55)', borderRadius: '10px' }}>
            <InputSection fromTop={'0'} label={"Name"} placeholder={"Name"} value={name} setState={setName}/>
            <InputSection label={"Email"} placeholder={"Email"} value={email} setState={setEmail}/>
            <InputSection label={"Subject"} placeholder={"Subject"} value={subject} setState={setSubject}/>
            <InputSection label={"Message"} placeholder={"Messsage"} value={message} setState={setMessage} multiLine={true}/>
            <CardActions sx={{justifyContent: 'center'}}>
                <PortfolioButton event={submit} label={"Submit"}/>
            </CardActions>
            <text className={emailSent ? 'visible' : null }>Thank you for your message, we will be in touch in no time!</text>
        </Card>
    );
}

export default Form;