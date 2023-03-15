import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Input } from 'antd';
import { getShopThunk } from '../../features/Slices/shopSlice';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  getProductsThunk,
  productsNameInputFilter,
  productsNameCategoryFilter,
} from '../../features/Slices/productsSlice';
import OneProductCard from '../UI/OneProductCard';
import OneCategory from '../UI/OneCategory';

export default function ShopPage(): JSX.Element {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.filterProducts);
  const productsConst = useAppSelector((state) => state.products.products);
  const shopName = useParams();

  useEffect(() => {
    dispatch(getShopThunk(shopName.urlName)).catch(() => {});
    dispatch(getProductsThunk(shopName.urlName)).catch(() => {});
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
    dispatch(productsNameInputFilter(e.target.value));
    if (input.length === 0) {
      dispatch(getProductsThunk(shopName.urlName)).catch(() => {});
    }
  };
  const handlerCategory = (categoryName: string): void => {
    dispatch(productsNameCategoryFilter(categoryName));
  };

  return (
    <Container>
      <Row className="mt-5" style={{ display: 'flex' }}>
        <Col
          className="mt-3"
          style={{ width: '300px', display: 'flex', justifyContent: 'end' }}
        >
          <img
            src="https://img.icons8.com/ios/50/null/search--v1.png"
            style={{ width: '29px', height: '29px', marginRight: '4px' }}
            alt="search"
          />
          <Input
            value={input}
            onChange={inputHandler}
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
          <Col
            onClick={() => dispatch(productsNameInputFilter(''))}
            style={{ fontWeight: 'bold' }}
          >
            Все категории
          </Col>
          {Array.from(
            new Set(productsConst.map((product) => product.SubCategory.name)),
          ).map((subcategoryName) => (
            <OneCategory
              subcategoryName={subcategoryName}
              handlerCategory={handlerCategory}
            />
          ))}
        </Col>
        <Row lg="2" style={{ width: '80%' }}>
          {products.map((product) => (
            <OneProductCard key={product.id} product={product} />
          ))}
        </Row>
      </Row>
    </Container>
  );
}
