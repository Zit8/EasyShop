import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Input } from 'antd';
import { getShopThunk } from '../../features/Slices/shopSlice';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { getProductsThunk } from '../../features/Slices/productsSlice';
import OneProductCard from '../UI/OneProductCard';
import { ProductType } from '../../types';
// import { SearchOutlined } from '@ant-design/icons';

// type ProductsProps = {
//   products: ProductType[];
// };

export default function ShopPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.shop);
  const products = useAppSelector((state) => state.products);
  console.log(products, '<<<<<<');

  console.log(shop, 'SHOOOOP');

  const shopName = useParams();
  console.log(shopName, '<<<<<<<<<<');

  useEffect(() => {
    dispatch(getShopThunk(shopName.name)).catch(() => {});
    dispatch(getProductsThunk(shopName.name)).catch(() => {});
  }, []);

  return (
    <Container>
      <h1>{shop.shop.name}</h1>
      <Row className="mt-5" style={{ display: 'flex' }}>
        <Col
          className="mt-3"
          style={{ width: '300px', display: 'flex', justifyContent: 'end' }}
        >
          <img
            src="https://img.icons8.com/ios/50/null/search--v1.png"
            style={{ width: '29px', height: '29px', marginRight: '4px' }}
          />
          <Input
            placeholder="Найти товар..."
            style={{
              width: '300px',
              borderRadius: '15px',
              borderColor: 'black',
            }}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col md="auto" style={{ width: '20%' }}>
          <Col style={{ fontWeight: 'bold' }}>Все категории</Col>
          {products.products.map((product) => (
            <Col>{product.SubCategory.name}</Col>
          ))}
          {/* <Col style={{ marginTop: '10px' }}>Шоколад ручной работы</Col>
          <Col>Макарунс</Col>
          <Col>Эклеры</Col>
          <Col>Профитроли</Col>
          <Col>Кексы</Col>
          <Col>Чизкейк</Col>
          <Col>Бенто торты</Col> */}
        </Col>
        <Col xs lg="2" style={{ width: '80%' }}>
          Название текущей категории
          {products.products.map((product) => (
            <OneProductCard key={product.id} product={product} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
