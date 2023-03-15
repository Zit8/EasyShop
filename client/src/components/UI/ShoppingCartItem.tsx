import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import type { ProductType } from '../../types';

type PropsType = {
  cartItem: ProductType;
};
export default function ShoppingCartItem({ cartItem }: PropsType): JSX.Element {
  return (
    <Container>
      <Row className="d-flex justify-content-center md-5">
        <Col md={4}>{cartItem.name}</Col>
      </Row>
    </Container>
  );
}
