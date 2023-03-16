import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, TextField, Grid, FormControl } from '@mui/material';
import { DatePicker } from '@mui/lab';
import InputLabel from '@mui/material/InputLabel';
import Suggestions from 'react-dadata-suggestions';
import { useAppSelector } from '../../features/reduxHooks';

export type OrderhandlerInputType = {
  name: string;
  selfDelivery: boolean;
  paymentWay: boolean;
  street: string;
  city: string;
};

export default function OrderForm(): JSX.Element {
  const totalCount = useAppSelector((state) => state.shoppingCart.totalPrice);
  const [orderhandlerInput, setOrderHandlerInput] =
    useState<OrderhandlerInputType>({
      name: '',
      selfDelivery: true,
      paymentWay: !true,
      street: '',
      city: '',
    });

  const changeHandlerInput = (
    e: React.ChangeEvent<{
      name?: string | boolean | undefined;
      value: unknown;
    }>,
  ): void => {
    const { name, value } = e.target;
    setOrderHandlerInput((prev) => ({
      ...prev,
      [name as string]: value as OrderhandlerInputType | undefined,
    }));
  };
  const { name, selfDelivery, paymentWay, street, city } = orderhandlerInput;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          minWidth: 312,
          minHeight: 328,
          width: '10%',
          backgroundColor: '#f5f5f5',
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, margin: 3 }}
            color="text.secondary"
            gutterBottom
          >
            Имя пользователя
          </Typography>
          <TextField
            sx={{ width: '100%' }}
            label="Имя"
            id="firstName"
            name="name"
            value={name}
            onChange={changeHandlerInput}
          />
          <InputLabel
            sx={{ margin: 3, fontSize: 14 }}
            id="demo-simple-select-helper-label"
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel sx={{ fontSize: 14 }} id="selfDelivery-label">
                  Способ доставки
                </InputLabel>
                <Select
                  labelId="selfDelivery-label"
                  id="selfDelivery-select"
                  label="Способ доставки"
                  name="selfDelivery"
                  value={selfDelivery}
                  onChange={changeHandlerInput}
                >
                  <MenuItem value>Самовывоз</MenuItem>
                  <MenuItem value={false}>Доставка</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel sx={{ fontSize: 12 }} id="paymentWay-label">
                  Способ оплаты
                </InputLabel>
                <Select
                  labelId="paymentWay-label"
                  id="paymentWay-select"
                  label="Способ оплаты"
                  name="paymentWay"
                  value={paymentWay}
                  onChange={changeHandlerInput}
                >
                  <MenuItem value>Карта</MenuItem>
                  <MenuItem value={false}>Наличные</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {!selfDelivery && (
            <>
              <Typography
                sx={{ fontSize: 12, margin: 3 }}
                color="text.secondary"
                gutterBottom
              >
                Адрес доставки
              </Typography>
              <TextField
                sx={{ width: '100%', marginBottom: 3 }}
                label="Улица и номер дома"
                id="street"
                name="street"
                value={street}
                onChange={changeHandlerInput}
              />
              <TextField
                sx={{ width: '100%' }}
                label="Город"
                id="city"
                name="city"
                value={city}
                onChange={changeHandlerInput}
              />
              <TextField
                id="addressId"
                name="address"
                placeholder="Адрес"
                type="text"
                multiline
                rows={4}
                InputProps={{
                  inputComponent: Suggestions,
                  inputProps: {
                    token: 'API',
                    filterFromBound: 'city',
                    constraints: {
                      locations: [{ city: 'Москва' }],
                      house: true,
                    },
                  },
                }}
              />
            </>
          )}
          <Typography
            sx={{ fontSize: 14, margin: 3 }}
            color="text.secondary"
            gutterBottom
          >
            Итоговая сумма для платежа: {totalCount}
          </Typography>
          <DatePicker label="Uncontrolled picker" defaultValue="2022-04-17" />
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          {orderhandlerInput.paymentWay && (
            <Button href="https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=bblovecake&amp;InvoiceID=0&amp;Culture=ru&amp;Encoding=utf-8&amp;OutSum=1500&amp;shp_interface=but&amp;SignatureValue=662d6d87ad0e7d9548ab8ba0ac34f046">
              ОПЛАТИТЬ
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
