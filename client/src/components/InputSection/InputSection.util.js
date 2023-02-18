import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SelectInputSectionType = (placeholder, value, setState, multiLine) => {
    let section; 
    if(multiLine === true) {
        section = 
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
                placeholder={placeholder}
                value={value}
                onChange={e => {
                    setState(e.target.value)
                }}
                />
        </Box>
    }
    else {
        section = 
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
                placeholder={placeholder}
                value={value}
                onChange={e => {
                    setState(e.target.value)
                }}
            />
        </Box>
    }

    return section;
}