import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './styles.css'
const CardItem = ({
  image,
  name,
  specie,
  role,
  universe,
}) => {
  return (
    <Card className='card__item' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
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