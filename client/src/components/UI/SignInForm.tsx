import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { signInUserActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import { UserLoginForm } from '../../types';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formInput, setFormInput] = useState<UserLoginForm>({
    email: '',
    passwordHash: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <Container className="d-flex" style={{ marginTop: '40%' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signInUserActionThunk(formInput));
        }}
      >
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ fontSize: '24px' }}>ВХОД</h3>
        </Container>
        <Container
          className="d-flex"
          style={{
            width: '525px',
            height: '300px',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#E7E7E8',
            borderRadius: '20px',
            boxShadow: '1px 1px 7px #e7e7e8',
          }}
        >
          <Container
            style={{
              margin: '20px',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              Email
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Введите адрес Вашей электронной почты..."
                value={formInput.email}
                onChange={changeHandler}
                id="outlined-basic"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                style={{
                  borderRadius: '20px',
                  fontSize: '16px',
                  color: '#eaeaea',
                }}
              />
            </InputGroup>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              Пароль
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Введите пароль..."
                value={formInput.passwordHash}
                onChange={changeHandler}
                id="outlined-basic"
                label="Password"
                name="passwordHash"
                type="password"
                variant="outlined"
                style={{
                  borderRadius: '20px',
                  fontSize: '16px',
                  color: '#eaeaea',
                }}
              />
            </InputGroup>
            <Button type="submit">ВОЙТИ</Button>
          </Container>
        </Container>
      </form>
    </Container>
  );
}
