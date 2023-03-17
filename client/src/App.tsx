import axios from 'axios';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/UI/AppNavBar';
import AuthPage from './components/Pages/AuthPage';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';
// import { checkUserActionThunk } from './features/actions';
import ShopPage from './components/Pages/ShopPage';

import OrderForm from './components/UI/OrderForm';
import ShopingCartPage from './components/Pages/ShoppingCartPage';
import DescriptionPage from './components/Pages/DescriptionPage';
import AuthAdminPage from './components/Pages/AuthAdminPage';
import ContactsPage from './components/Pages/ContactsPage';

import SignInAdminForm from './components/UI/SignInAdminForm';
import SignUpUserForm from './components/UI/SignUpUserForm';
import AppNavbar2 from './components/UI/AppNavBar2';
import SignUpAdminForm from './components/UI/SignUpAdminForm';
import SignUpAdminForm1 from './components/UI/SignUpAdminForm1';
import CreateShopForm from './components/UI/CreateShopForm';
import MainPage from './components/Pages/MainPage';
// import SignUpAdminForm from './components/UI/SignUpAdminForm';
// import AdminPanel from './admin/Admin';

function App(): JSX.Element {
  // const status = useAppSelector((state) => state.userData.status);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(checkUserActionThunk()).catch(() => null);
  // }, []);

  return (
    <Container>
      <AppNavbar2 />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/:type" element={<AuthPage />} />
        {/* <Route path="/authadmin/:type" element={<AuthAdminPage />} /> */}
        <Route path="/orderform" element={<OrderForm />} />
        <Route path="/bascet" element={<ShopingCartPage />} />
        {/* <Route path="/user/signup" element={<SignUpAdminForm1 />} /> */}
        <Route path="/shop/:urlName/contacts" element={<ContactsPage/>} />
        {/* <Route path="/registration" element={<SignUpUserForm />} /> */}
        <Route path="/shop/:urlName/contacts" element={<ContactsPage />} />
        <Route path="/auth/createshop" element={<CreateShopForm />} />
        <Route
          path="/shop/:urlName/description"
          element={<DescriptionPage />}/>
        <Route path="/shop/:urlName" element={<ShopPage />} />
      </Routes>
    </Container>
  );
}
// ${shop.name.toLowerCase().replace(/[^a-zа-я0-9]/g, '')}
export default App;
