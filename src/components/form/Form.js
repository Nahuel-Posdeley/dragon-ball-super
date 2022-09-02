import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css'

const theme = createTheme();

export default function Form({
  data,
  setData,
}) {
  const [name,setName] = useState('')
  const [specie,setSpecie] = useState('')
  const [role,setRole] = useState('')
  const [universe,setUniverse] = useState('')
  const [characterImg,setCharacterImg] = useState('')
  function handleSubmit(e){
    e.preventDefault();
    if(![name,specie,role,universe,characterImg].includes('')){
      let obj = {
        id: data.length + 1,
        name,
        specie,
        role,
        universe,
        imageUrl: characterImg,
      }
      setData([...data,obj])
      setName('')
      setRole('')
      setSpecie('')
      setUniverse('')
      setCharacterImg('')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{
          }} fontSize='40px' fontWeight='bold' color='#000' variant="h5">
            New character
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField
              margin="normal"
              type="text"
              placeholder='Name'
              fullWidth
              value={name}
              onChange={(e)=> setName(e.target.value)}
              sx={{
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <TextField
              margin="normal"
              type="text"
              placeholder='Specie'
              fullWidth
              value={specie}
              onChange={(e)=> setSpecie(e.target.value)}
              sx={{
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <TextField
              margin="normal"
              type="text"
              placeholder='Role'
              fullWidth
              value={role}
              onChange={(e)=> setRole(e.target.value)}
              sx={{
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <TextField
              margin="normal"
              type="text"
              placeholder='Universe'
              fullWidth
              value={universe}
              onChange={(e)=> setUniverse(e.target.value)}
              sx={{
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <TextField
              margin="normal"
              type="text"
              fullWidth
              value={characterImg}
              onChange={(e)=> setCharacterImg(e.target.value)}
              placeholder='Link image'
              required
              sx={{
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,background: '#f3ca4c' }}
            >
              ADD
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}