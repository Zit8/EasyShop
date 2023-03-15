import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';

export default function ShoppingCertPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.shoppingCart.shoppingCart.products);

  return (
    <Container>
      <Row className="d-flex justify-content-center md-5">
        <Col>Бла</Col>
      </Row>
    </Container>
  );
}
