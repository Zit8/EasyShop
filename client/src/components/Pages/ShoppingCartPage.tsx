import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { getShoppingCartThunk } from '../../features/Slices/shoppingCartSlice';
import ShoppingCartItem from '../UI/ShoppingCartItem';

export default function ShoppingCertPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.shoppingCart.totalPrice)
  const productsInCart = useAppSelector(
    (state) => state.shoppingCart.shoppingCart.products,
  );
  const shopName = useParams();

  useEffect(() => {
    dispatch(getShoppingCartThunk(shopName.name)).catch(() => {});
  }, []);

  return (
    <Container>
      <div>Итого: {totalPrice}</div>
      <Row className="d-flex justify-content-center md-5">
        {productsInCart.map((cartItem) => (
          <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Row>
    </Container>
  );
}
