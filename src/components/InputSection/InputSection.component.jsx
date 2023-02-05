import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { SelectInputSectionType } from './InputSection.utils';

const InputSection = ({ fromTop = -5, label, placeholder, value, setState, multiLine = false }) => {
    let formBoxSection = SelectInputSectionType(placeholder, value, setState, multiLine);
    return (
        <CardContent sx={{ textAlign: 'left', marginTop: fromTop + '%' }}>
            <Container sx={{ marginLeft: '-3%'}}>
                <Typography variant="h6" gutterBottom sx={{ color: 'rgb(0, 4, 55)'}}>{label}</Typography>
            </Container>
            {formBoxSection}
        </CardContent>
    );
}

export default InputSection;