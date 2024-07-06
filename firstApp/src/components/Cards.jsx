import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card key={} sx={{ maxWidth: 345 }}>
    
      <CardMedia
        sx={{ height: 300 }}
        image="https://th.bing.com/th?id=OIF.hc0x%2b%2f16yTNb1%2fdD6x0krA&rs=1&pid=ImgDetMain"
        title="Kalki 2898 AD (2024)"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kalki 2898 AD (2024)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href='https://www.imdb.com/title/tt12735488/' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}