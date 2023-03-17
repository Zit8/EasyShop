import React, { useState } from 'react';
import { Card, Form, Input, Button, Switch, Typography } from 'antd';
import { signInUserActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import type { UserLoginForm } from '../../types';

export default function SignInForm2(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formInput, setFormInput] = useState<UserLoginForm>({
    email: '',
    passwordHash: '',
  });
  console.log(formInput);
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <>
      <div
        style={{
          width: '180px',
          height: '22px',
          position: 'absolute',
          left: '47%',
          top: '20%',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '25px',
        }}
      >
        ВХОД
      </div>
      <Card
        style={{
          position: 'absolute',
          width: '450px',
          height: '400px',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(217, 217, 217, 0.6)',
          borderRadius: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Form
          onFinish={(e) => {
            // e.preventDefault();
            dispatch(signInUserActionThunk(formInput)).catch((error) =>
              console.log(error));
              window.location = 'http://localhost:3002'
          }}
        >
          <Typography.Title
            level={5}
            style={{
              marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '30px',
            }}
          >
            Email
          </Typography.Title>
          <Input
            placeholder="Введите адрес Вашей электронной почты..."
            value={formInput.email}
            onChange={changeHandler}
            id="outlined-basic"
            type="email"
            name="email"
            style={{
              width: '409px',
              height: '59px',
              background: '#FFFFFF',
              borderRadius: '20px',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Пароль
          </Typography.Title>
          <Input
            value={formInput.passwordHash}
            onChange={changeHandler}
            id="outlined-basic"
            name="passwordHash"
            type="password"
            placeholder="Введите пароль..."
            style={{
              width: '409px',
              height: '59px',
              background: '#FFFFFF',
              borderRadius: '20px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
              marginBottom: '40px',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '279px',
                height: '54px',
                background: '#141313',
                borderRadius: '25px',
              }}
            >
              ВОЙТИ
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
