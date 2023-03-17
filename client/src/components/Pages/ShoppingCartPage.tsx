import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { getShoppingCartThunk } from '../../features/Slices/shoppingCartSlice';
import ShoppingCartItem from '../UI/ShoppingCartItem';

export default function ShoppingCertPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.shoppingCart.totalPrice);
  const productsInCart = useAppSelector(
    (state) => state.shoppingCart.shoppingCart.products,
  );
  const shopName = useParams();

  useEffect(() => {
    dispatch(getShoppingCartThunk(shopName.name)).catch(() => {});
  }, []);

  return (
    <>
      <ListGroup style={{marginTop:'200px'}}>
        {productsInCart.map((cartItem) => (
          <ShoppingCartItem cartItem={cartItem} />
        ))}
      </ListGroup>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Итого: {totalPrice} руб</h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          style={{ backgroundColor: 'black', color: 'white', width: '30%' }}
          href="/orderform"
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}
