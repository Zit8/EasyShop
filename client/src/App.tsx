import axios from 'axios';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/UI/AppNavBar';
import AuthPage from './components/Pages/AuthPage';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';
import { checkUserActionThunk } from './features/actions';
import ShopPage from './components/Pages/ShopPage';
import AdminPanel from './admin/Admin';

function App(): JSX.Element {
  const status = useAppSelector((state) => state.userData.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUserActionThunk()).catch(() => null);
  }, []);
  return (
    <Container>
      <AppNavBar />
      <Routes>
        <Route path="/auth/:type" element={<AuthPage />} />
        <Route path="/shop/:name" element={<ShopPage />} />
      </Routes>
    </Container>
  );
}
// ${shop.name.toLowerCase().replace(/[^a-zа-я0-9]/g, '')}
export default App;
