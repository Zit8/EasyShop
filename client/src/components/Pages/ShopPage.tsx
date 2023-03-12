import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getShopThunk } from '../../features/Slices/shopSlice';

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
    <Container className="d-flex">
      <h1>{shop.shop.name}</h1>
    </Container>
  );
}
