import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  ListItem,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Add, Remove } from '@mui/icons-material';
import { Drink } from '../../types';

type OneCardProps = {
  drink: Drink
}

export default function OneCard({drink}: OneCardProps):JSX.Element {
  const handleOrder = () => {
    // Handle order button click
  };

  return (
    <Card sx={{ 
      maxWidth: 235,
      height: 'auto',
      margin: 2,
      backgroundColor: '#FAFAFA',
      boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.5)',
      borderRadius: '8px',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.5)',
      }
    }}>
        <CardMedia
        sx={{marginTop:"10px", borderRadius:2}}
          component="img"
          height="140"
          image={drink.strDrinkThumb}
          alt={drink.strDrink}
          
        />
        <CardContent>
  <Grid container spacing={3} justifyContent="space-between" alignItems="center">
    <Grid item>
    <IconButton size="small" style={{ borderRadius: '50%', border: '1px solid black' }}>
  <Remove />
</IconButton>
    </Grid>
    <Grid item>
    <Typography align="center" sx={{wordWrap: "break-word"}}>{drink.strDrink}</Typography>
    </Grid>
    <Grid item>
    <IconButton size="small" style={{ borderRadius: '50%', border: '1px solid black' }}>
  <Add />
</IconButton>
    </Grid>
  </Grid>
</CardContent>
        <CardActions>
          <Button variant="contained" fullWidth onClick={handleOrder}>
            Заказать
          </Button>
        </CardActions>
      </Card>
  );
};