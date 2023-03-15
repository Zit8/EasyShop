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

export default function DescriptionPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const shop = useAppSelector((state) => state.shop);
  console.log(shop.shop);
  const shopName = useParams();
  console.log(shopName);

  const styles = {
    p: {
      fontWeight: 'bolder',
      fontSize: '14px',
    },
  };

  useEffect(() => {
    dispatch(getShopThunk(shopName.urlName)).catch(() => {});
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ maxWidth: 445, maxHeight: 440 }}>
        <CardHeader title={shop.shop.name} subheader={shop.shop.city} />
        <CardContent>
          <CardMedia
            sx={{
              marginTop: '10px',
              borderRadius: 2,
              maxWidth: '100%',
              height: '35px',
              width: '50%',
              display: 'block',
              margin: 'auto',
            }}
            component="img"
            image={shop.shop.logo}
            alt="херня"
          />

          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Описание:</p> {shop.shop.description}
          </Typography>
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
          <Typography variant="body2" color="textSecondary" component="p">
            <p style={styles.p}>Рейтинг:</p> {shop.shop.ratingLink}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
