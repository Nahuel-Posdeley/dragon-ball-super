import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'
import { red } from '@mui/material/colors';
const CardItem = ({
  removeItem,
  image,
  name,
  specie,
  role,
  universe,
}) => {
  return (
    <Card className='card__item' >
      <Box display='flex' justifyContent='end'>
      <DeleteIcon onClick={()=>removeItem()} sx={{color: red[800],fontSize: 30,margin:2}} />
      </Box>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          style={{
            objectFit : 'contain'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={'bold'} component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            specie: {specie}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            role: {role}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           universe: {universe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem