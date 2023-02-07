import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Form from '../../components/Form/Form.component';

const ContactMe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ minHeight: '85vh', marginTop: '9%', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>Contact Me</Typography>
                    <Form />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ContactMe;