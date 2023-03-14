import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import {useAppSelector } from '../../features/reduxHooks';
import { useParams } from 'react-router-dom';


export default function ContactPage(): JSX.Element {

  const shop = useAppSelector((state)=> state.shop)
  console.log(shop.shop)
  const shopName = useParams()
  return (
    <Card style={{maxWidth: 345}}>
      <CardHeader title={shop.shop.name} subheader={shop.shop.city} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Описание: {shop.shop.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Адрес :{shop.shop.address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Телефон:{shop.shop.phone}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Электронная почта: {shop.shop.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Время работы: {shop.shop.startTime} - {shop.shop.finishingTime}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Выходные:{shop.shop.weekdays}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Рейтинг: {shop.shop.ratingLink}
        </Typography>
      </CardContent>
    </Card>
  );
}
