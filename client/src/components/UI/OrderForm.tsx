import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, TextField, Grid, FormControl } from '@mui/material';
import { DatePicker } from '@mui/lab';
import InputLabel from '@mui/material/InputLabel';

export default function OrderForm(): JSX.Element {
  return (
    <Box
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
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
          <TextField sx={{ width: '100%' }} label="Имя" id="firstName" />
          <InputLabel
            sx={{ margin: 3, fontSize: 14 }}
            id="demo-simple-select-helper-label"
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel sx={{ fontSize: 14 }} id="delivery-label">
                  Способ доставки
                </InputLabel>
                <Select
                  labelId="delivery-label"
                  id="delivery-select"
                  label="Способ доставки"
                >
                  <MenuItem value=""> </MenuItem>
                  <MenuItem value={10}>Самовывоз</MenuItem>
                  <MenuItem value={20}>Доставка</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel sx={{ fontSize: 12 }} id="payment-label">
                  Способ оплаты
                </InputLabel>
                <Select
                  labelId="payment-label"
                  id="payment-select"
                  label="Способ оплаты"
                >
                  <MenuItem value=""> </MenuItem>
                  <MenuItem value={10}>Карта</MenuItem>
                  <MenuItem value={20}>Наличные</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
          />
          <TextField sx={{ width: '100%' }} label="Город" id="city" />
          <DatePicker label="Uncontrolled picker" defaultValue="2022-04-17" />
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small">Отправить</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
