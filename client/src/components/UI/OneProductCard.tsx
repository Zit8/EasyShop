import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material';
import type { ProductType } from '../../types';

type OneProductCardProps = {
  product: ProductType;
};

export default function OneProductCard({
  product,
}: OneProductCardProps): JSX.Element {
  const [count, setCount] = useState(0);

  const handleOrder = (): void => {
    // Handle order button click
  };

  const handleIncrement = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (): void => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
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
        image={product.image}
        alt="херня"
      />
      <CardContent>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
          <IconButton
  size="small"
  style={{ borderRadius: '50%', border: '1px solid black', transform: 'scale(0.8)' }}
  onClick={handleDecrement}
>
  <Remove />
</IconButton>

          </Grid>
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
              {product.name}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="small"
              style={{ borderRadius: '50%', border: '1px solid black',transform: 'scale(0.8)' }}
              onClick={handleIncrement}
            >
              <Add />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Количество"
            defaultValue="Hello World"
            sx={{ display: 'block', margin: '0 auto' }}
            value={count}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </div>
      </Box>
      <CardActions>
        <Button variant="contained" fullWidth onClick={handleOrder}>
          Заказать
        </Button>
      </CardActions>
    </Card>
  );
}
