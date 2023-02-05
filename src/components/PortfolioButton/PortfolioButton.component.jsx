import React from 'react';
import Button from '@mui/material/Button';
import Confirmation from '../Confirmation/Confirmation.component';

const PortfolioButton = ({ event, label }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
                    if(event()) {
                        handleOpen()
                    }
                }}
            >
                {label}
            </Button>
            <Confirmation pop={open} unpop={handleClose}/>
        </div>
    );
}

export default PortfolioButton;