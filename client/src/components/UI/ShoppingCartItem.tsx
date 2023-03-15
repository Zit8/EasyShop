import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

export default function ShoppingCartItem(): JSX.Element {
  return (
    <Container>
      <Row className="d-flex justify-content-center md-5">
        <Col md={4}>Бла</Col>
      </Row>
    </Container>
  );
}
