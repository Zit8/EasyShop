import { Button } from 'antd';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        marginBottom: '200px',
      }}
    >
      <div
        style={{
          width: '802px',
          height: '84px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '64px',
          lineHeight: '62px',
          textAlign: 'center',
          color: '#000000',
          marginBottom: '80px',
        }}
      >
        ВЫВЕДИ СВОЙ БИЗНЕС НА НОВЫЙ УРОВЕНЬ
      </div>
      <div
        style={{
          width: '720px',
          height: '95px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '25px',
          textAlign: 'center',
          color: '#000000',
        }}
      >
        Создавайте свой онлайн магазин для микробизнеса за несколько минут с
        помощью нашего сервиса! Выбирайте дизайн, настраивайте каталог и
        принимайте заказы онлайн. Просто, быстро и доступно!
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          marginTop: '30px',
          width: '279px',
          height: '54px',
          background: '#141313',
          borderRadius: '25px',
        }}
      >
        К СОЗДАНИЮ МАГАЗИНА
      </Button>
    </div>
  );
}
