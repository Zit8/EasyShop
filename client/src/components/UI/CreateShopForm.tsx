import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import {
  Card,
  Form,
  Input,
  Space,
  Checkbox,
  Button,
  Typography,
  TimePicker,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../features/reduxHooks';
import { createShopActionThunk } from '../../features/Slices/createShopSlice';
import type { ShopType } from '../../types';

export default function CreateShopForm(): JSX.Element {
  const dispath = useAppDispatch();
  const [form,setFrom] = useState({
    name:'',
    description:'',
    city:'',
    address:'',
    phone:'',
    email:'',
    userId:1,
  })
  const handelrInput = (e) => { 
    setFrom((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(form)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    
    dispath(createShopActionThunk(form)).catch((err) => null);
   window.location = 'http://localhost:3002';
  };

  const { Search } = Input;
  const options = [
    { label: 'ПН', value: 'пн' },
    { label: 'ВТ', value: 'вт' },
    { label: 'СР', value: 'ср' },
    { label: 'ЧТ', value: 'чт' },
    { label: 'ПТ', value: 'пт' },
    { label: 'СБ', value: 'сб' },
    { label: 'ВС', value: 'вс' },
  ];

  const onFinish = (values) => {
    console.log('Selected buttons:', values.buttons);
  };

  return (
    <>
      <div
        style={{
          width: '180px',
          height: '22px',
          position: 'absolute',
          left: '45%',
          top: '12%',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '25px',
        }}
      >
        ДОБАВИТЬ МАГАЗИН
      </div>
      <Card
        style={{
          position: 'absolute',
          width: '600px',
          height: '850px',
          left: '50%',
          top: '70%',
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
          onFinish={submitHandler}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '40px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            НАЗВАНИЕ МАГАЗИНА
          </Typography.Title>
          <Input
          value={form.name}
          onChange={handelrInput}
            name="name"
            placeholder="Введите название магазина"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              // marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ОПИСАНИЕ МАГАЗИНА
          </Typography.Title>
          <Input
            value={form.description}
            onChange={handelrInput}
            name="description"
            placeholder="Опишите Ваш магазин"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ЗАГРУЗИТЕ ЛОГОТИП
          </Typography.Title>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Button
              style={{
                width: '180px',
                height: '34px',
                background: '#141313',
                borderRadius: '25px',
              }}
              icon={<UploadOutlined />}
              type="primary"
            >
              Upload
            </Button>
          </div>
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ГОРОД
          </Typography.Title>
          <Input
          value={form.city}
          onChange={handelrInput}
            name="city"
            placeholder="Введите город"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',

              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            АДРЕС
          </Typography.Title>
          <Form.Item name="address">
          <Input
            value={form.address}
            onChange={handelrInput}
            name="address"
            placeholder="Введите адрес магазина"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',

              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          </Form.Item>
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ТЕЛЕФОН
          </Typography.Title>
          <Input
          value={form.phone}
          onChange={handelrInput}
            name="phone"
            placeholder="Введите номер телефона"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ПОЧТА
          </Typography.Title>
          <Input
           value={form.email}
           onChange={handelrInput}
            name="email"
            placeholder="Введите электронную почту"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',

              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              marginTop: '10px',
            }}
          >
            ВВЕДИТЕ ДНИ И ВРЕМЯ НАЧАЛА РАБОТЫ
          </Typography.Title>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            <TimePicker.RangePicker />
          </div>
          <div style={{ marginTop: '10px' }}>
            <Form onFinish={onFinish}>
              <Form.Item name="buttons">
                <Checkbox.Group options={options} />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '140px',
                  height: '34px',
                  background: '#141313',
                  borderRadius: '25px',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                ВЫБРАТЬ
              </Button>
            </Form>
          </div>
          <Typography.Title
            level={5}
            style={{
              //   marginBottom: '10px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              position: 'relative',
              //   marginTop: '10px',
            }}
          >
            ЗАГРУЗИТЕ ССЫЛКУ НА ВИДЖЕТ
          </Typography.Title>
          <Input
          
            name="ratingLink"
            placeholder="Введите ссылку на виджет"
            style={{
              width: '280px',
              height: '35px',
              background: '#FFFFFF',
              borderRadius: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{
              //   width: '140px',
              height: '34px',

              background: '#141313',
              borderRadius: '25px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            СОЗДАТЬ
          </Button>
        </Form>
      </Card>
    </>
  );
}
