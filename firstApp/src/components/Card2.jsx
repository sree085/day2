import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 320 }}
        image="https://image.tmdb.org/t/p/w342/iSS17YFooUA33FKsJ0yJhWZzylb.jpg"
        title="Guruvayoor Ambalanadayil (2024)"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Guruvayoor Ambalanadayil (2024)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A young man who is set to get married but due to a web of unforeseen bad luck and circumstances, he marries a woman who hates him and has to suffer her wrath over it.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href='https://www.imdb.com/title/tt25400540/' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}