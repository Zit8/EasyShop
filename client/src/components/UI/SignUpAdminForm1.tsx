import React, { useState } from 'react';

import { Card, Form, Input, Button, Switch, Typography } from 'antd';
import './style.css';
import { useAppDispatch } from '../../features/reduxHooks';
import { signUpUserActionThunk } from '../../features/actions';
import type { UserSubmitForm } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function SignUpAdminForm1(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    // e.preventDefault();
  console.log(e)
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as UserSubmitForm;

    dispatch(signUpUserActionThunk(data)).catch(() => null);
  };
  const handlerClick = ():void => {
      navigate('/')
  }


  return (
    <>
      <div className="main">РЕГИСТРАЦИЯ</div>
      <Card
        style={{
          position: 'absolute',
          width: '450px',
          height: '500px',
          left: '50%',
          top: '60%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(217, 217, 217, 0.6)',
          borderRadius: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Form onFinish={submitHandler}>
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
              marginTop: '50px',
            }}
          >
            Имя пользователя
          </Typography.Title>
          <Input
            placeholder="Введите Ваше имя"
            name="name"
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
            Email
          </Typography.Title>
          <Input
            placeholder="Введите адрес Вашей электронной почты"
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
          <Input.Password
            placeholder="Придумайте безопасный пароль"
            name="passwordHash"
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
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              marginTop: '40px',
            }}
          >
            <Button onClick={handlerClick}
              type="primary"
              htmlType="submit"
              style={{
                width: '279px',
                height: '54px',
                background: '#141313',
                borderRadius: '25px',
              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
