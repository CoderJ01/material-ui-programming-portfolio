import React from 'react';
import Button from '@mui/material/Button';
import Confirmation from '../Confirmation/Confirmation.component';

const Popup = () => {
    return (
        <Confirmation />
    );
}

const PortfolioButton = ({ event, label }) => {
    return (
        <div>
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
                onClick={() => {
                    // event();
                    Popup();
                }}
            >{label}
            </Button>
        </div>
    );
}

export default PortfolioButton;