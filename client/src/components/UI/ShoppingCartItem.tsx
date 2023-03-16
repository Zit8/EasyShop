import React from 'react';
import Button from 'react-bootstrap/Button';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import type { ProductType } from '../../types';
import { useAppDispatch } from '../../features/reduxHooks';
import { removeItem } from '../../features/Slices/shoppingCartSlice';

type PropsType = {
  cartItem: ProductType;
};
export default function ShoppingCartItem({ cartItem }: PropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteBascet = (id: number): void => {
    dispatch(removeItem(id));
  };

  return (
    

    <Card
      sx={{
        maxWidth: 235,
        height: 'auto',
        margin: 2,
        backgroundColor: '#FAFAFA',
        boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.5)',
        borderRadius: '8px',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.5)',
        },
      }}
    >
      <CardMedia
        sx={{
          marginTop: '10px',
          borderRadius: 2,
          maxWidth: '100%',
          height: 'auto',
        }}
        component="img"
        height="140"
        image={cartItem.image}
        alt="херня"
      />
      <CardContent>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item />
          <Grid item>
            <Typography
              align="center"
              sx={{
                wordWrap: 'break-word',
                fontSize: 14,
                p: 1,
                textAlign: 'center',
              }}
            >
              {cartItem.name}
            </Typography>
            <Typography
              align="center"
              sx={{
                wordWrap: 'break-word',
                fontSize: 14,
                p: 1,
                textAlign: 'center',
              }}
            >
              {cartItem.price}
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
      </CardContent>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      />
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={() => deleteBascet(cartItem.id)}
        >
          Удалить из корзины
        </Button>
      </CardActions>
    </Card>
  );
}
