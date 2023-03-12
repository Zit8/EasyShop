import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getShopThunk } from '../../features/Slices/shopSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ShopPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.shop);
  console.log(shop);

  const shopName = useParams();
  console.log(shopName, '<<<<<<<<<<');

  useEffect(() => {
    dispatch(getShopThunk(shopName.name));
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col className="mt-3">1 of 2</Col>
      </Row>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col md="auto" style={{ width: '20%' }}>
          <Col style={{ fontWeight: 'bold' }}>Все категории</Col>
          <Col style={{ marginTop: '10px' }}>Шоколад ручной работы</Col>
          <Col>Макарунс</Col>
          <Col>Эклеры</Col>
          <Col>Профитроли</Col>
          <Col>Кексы</Col>
          <Col>Чизкейк</Col>
          <Col>Бенто торты</Col>
        </Col>
        <Col xs lg="2" style={{ width: '80%' }}>
          2 of 3
        </Col>
      </Row>
    </Container>

    // <Container style={{ display: 'flex' }}>
    //   <Row>
    //     <Container>
    //       <h1>{shop.shop.name}</h1>
    //     </Container>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <Container></Container>
    //     </Col>
    //     <Col>
    //       <Container></Container>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
