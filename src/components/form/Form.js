import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn() {

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
            textShadow: '3px 3px #f3ca4c'
          }} fontSize='40px' fontWeight='bold' color='#fff' variant="h5">
            New character
          </Typography>
          <Box>
          <TextField
              margin="normal"
              type="text"
              placeholder='Name'
              fullWidth
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}