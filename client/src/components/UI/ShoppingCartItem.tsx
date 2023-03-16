import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
    <Container>
      <Row className="d-flex justify-content-center md-5">
        <Col md={4}>{cartItem.name}</Col>
        <Button onClick={() => deleteBascet(cartItem.id)}>
          Удалить из корзины
        </Button>
      </Row>
    </Container>
  );
}
