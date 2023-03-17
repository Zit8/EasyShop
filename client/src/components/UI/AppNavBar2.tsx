import { Image, Menu, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { logouUserActionThunk } from '../../features/actions';
import '@fontsource/inter';
import { getShopThunk } from '../../features/Slices/shopSlice';

export default function AppNavbar2(): JSX.Element {
  const shopName = useParams();

  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.shop);

  // const userData = useAppSelector((state) => state.userData);
  // const dispatch = useAppDispatch();

  // const logoutHandler = (): void => {
  //   dispatch(logouUserActionThunk()).catch(() => null);
  // };
  const isAuthenticated = useAppSelector((state) => state.userData.user);

  return (
    <Menu
      mode="horizontal"
      style={{
        width: '100%',
        height: '45px',
        position: 'relative',
        top: '41px',
        left: '39px',
      }}
    >
      <Menu.Item key="Home">
        <Button
          type="text"
          onClick={() => {
            window.location.href = `/shop/${shop.shop.name}/description`;
          }}
        >
          О КОМПАНИИ
        </Button>
      </Menu.Item>
      <Menu.Item key="CONTACTS">
        <Button
          type="text"
          onClick={() => {
            window.location.href = `/${shop.shop.name}/contacts`;
          }}
        >
          КОНТАКТЫ
        </Button>
      </Menu.Item>
      <Menu.Item key="logo" style={{ margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Link href={`/shop/${shop.shop.urlName}`}>
            <span
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '25px',
                color: '#000',
              }}
            >
              {shop.shop.name}
            </span>
          </Link> */}
        </div>
      </Menu.Item>

      <Menu.Item key="SIGNUP">
        <Button
          type="text"
          onClick={() => {
            window.location.href = '/auth/signup';
          }}
        >
          SIGN UP
        </Button>
      </Menu.Item>
      <Menu.Item key="SIGNIN">
        <Button
          type="text"
          onClick={() => {
            window.location.href = '/auth/signin';
          }}
        >
          SIGN IN
        </Button>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button
          type="text"
          onClick={() => {
            window.location.href = '/auth/logout';
          }}
        >
          LOGOUT
        </Button>
      </Menu.Item>
      <Menu.Item key="cart">
        <Button
          type="text"
          onClick={() => {
            window.location.href = '/bascet';
          }}
        >
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
        </Button>
      </Menu.Item>
    </Menu>
  );
}
// export default AppNavbar2;
