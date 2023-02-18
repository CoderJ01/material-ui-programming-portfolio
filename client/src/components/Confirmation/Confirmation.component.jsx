import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid rgb(0, 4, 55)',
    boxShadow: 24,
    p: 4,
};

export default function Confirmation({ pop, unpop }) {
  return (
    <Modal
        open={pop}
        onClose={unpop}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: 'rgb(0, 4, 55)', textAlign: 'center', fontWeight: 575}}>
                Confirmation
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: 'rgb(0, 4, 55)', marginTop: '0'}}>
                Your message will be received shortly. Wait for up to 48 hours for a response. Have a nice day!
            </Typography>
        </Box>
    </Modal>
  );
}