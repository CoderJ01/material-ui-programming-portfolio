import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { SelectInputSectionType } from './InputSection.utils';

const InputSection = ({ fromTop = 0, label, placeholder, value, setState, multiLine = false }) => {
    let formBoxSection = SelectInputSectionType(placeholder, value, setState, multiLine);
    // if(multiLine === true) {
    //     formBoxSection = 
    //     <Box
    //         component="form"
    //         sx={{
    //             '& .MuiTextField-root': { m: 1, width: '96%', marginTop: '-1%' },
    //         }}
    //         noValidate
    //         autoComplete="off"
    //         >
    //             <TextField
    //             id="filled-multiline-static"
    //             multiline
    //             rows={4}
    //             variant="outlined"
    //             placeholder={placeholder}
    //             value={value}
    //             onChange={e => {
    //                 setState(e.target.value)
    //             }}
    //             />
    //     </Box>
    // }
    // else {
    //     formBoxSection = 
    //     <Box
    //         component="form"
    //         sx={{
    //             '& > :not(style)': { m: 1, width: '96%', marginTop: '-1%'}, 
    //         }}
    //         noValidate
    //         autoComplete="off"
    //         >
    //         <TextField 
    //             id="outlined-basic" 
    //             variant="outlined" 
    //             placeholder={placeholder}
    //             value={value}
    //             onChange={e => {
    //                 setState(e.target.value)
    //             }}
    //         />
    //     </Box>
    // }
    return (
        <CardContent sx={{ textAlign: 'left', marginTop: fromTop }}>
            <Container sx={{ marginLeft: '-3%'}}>
                <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>{label}</Typography>
                {formBoxSection}
            </Container>
        </CardContent>
    );
}

export default InputSection;