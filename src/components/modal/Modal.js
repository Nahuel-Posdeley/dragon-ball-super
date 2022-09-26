import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({
  children,
}, open, handleClose) {

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        disableEnforceFocus
        >
         <Box sx={style}>
         {children}
         </Box>
      </Modal>
    </>
  );
}
