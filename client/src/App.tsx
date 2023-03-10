import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/UI/AppNavBar';

const someNumber = (): number => Math.random();

function App(): JSX.Element {
  return (
    <Container>
      <AppNavBar />
      <Routes>
        <Route path="/" element={} />
      </Routes>
    </Container>
  );
}

export default App;
