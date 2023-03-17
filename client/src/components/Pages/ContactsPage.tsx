import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { getShopThunk } from '../../features/Slices/shopSlice';

export default function ContactsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const shop = useAppSelector((state) => state.shop);
  const shopName = useParams();
  const styles = {
    p: {
      fontWeight: 'bolder',
      fontSize: '14px',
    },
  };

  useEffect(() => {
    dispatch(getShopThunk(shopName.name)).catch(() => {});
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ maxWidth: 445, maxHeight: 440 }}>
        <CardHeader title={shop.shop.name} subheader={shop.shop.city} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Адрес:</p>
            {shop.shop.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Телефон:</p>
            {shop.shop.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Электронная почта:</p> {shop.shop.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Время работы:</p> {shop.shop.startTime} -{' '}
            {shop.shop.finishingTime}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Выходные:</p>
            {shop.shop.weekdays}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
