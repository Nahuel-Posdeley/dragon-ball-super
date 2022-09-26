import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { yellow } from '@mui/material/colors';
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
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddCircleIcon sx={{color: yellow[900],fontSize: 50}} onClick={handleOpen}/>
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