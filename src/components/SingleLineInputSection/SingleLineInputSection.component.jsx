import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

const SingleLineInputSection = () => {
    const [name, setName] = useState('');
    return (
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
    );
}

export default SingleLineInputSection;