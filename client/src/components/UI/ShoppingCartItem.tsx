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
import { ListGroup } from 'react-bootstrap';
import type { ProductType } from '../../types';
import { useAppDispatch } from '../../features/reduxHooks';
import { removeItem } from '../../features/Slices/shoppingCartSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type PropsType = {
  cartItem: ProductType;
};
export default function ShoppingCartItem({ cartItem }: PropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteBascet = (id: number): void => {
    dispatch(removeItem(cartItem));
  };

  return (
    <ListGroup.Item
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <div>Наименование товара: {cartItem.name}</div>
        <div>Цена: {cartItem.price}руб.</div>
        <div>Кол-во: {cartItem.orderCount}</div>
      </div>
      <div>
        <DeleteForeverIcon
          variant="contained"
          fullWidth
          onClick={() => deleteBascet(cartItem.id)}
        >
          Удалить из корзины
        </DeleteForeverIcon>
      </div>
    </ListGroup.Item>
  );
}
