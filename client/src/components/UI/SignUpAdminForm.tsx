import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
} from '@mui/material';
import { TimePicker } from '@mui/lab';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

type FormData = {
  weekdays: string;
};

export default function SignUpAdminForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({ weekdays: '' });

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setFormData({ weekdays: event.target.value as string });
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Here you can add your code to handle the form submission
  //   console.log(formData);
  // };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Register your shop
      </Typography>
      <form style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5}} 
    onSubmit={handleSubmit}>
        <TextField
          style={ {
            margin: theme.spacing(1),
            width: '100%',
          }}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Logo"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TimePicker
          label="Controlled picker"
          name="startTime"
          value={formData.startTime}
          // onChange={(newValue) => setValue(newValue)}
          onChange={handleChange}
        />
        <TimePicker
          label="Controlled picker"
          name="finishingTime"
          value={formData.finishingTime}
          // onChange={(newValue) => setValue(newValue)}
          onChange={handleChange}
        />
        <div>
          <Select
            style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 5}} 
            label="Weekdays"
            name="weekdays"
            value={formData.weekdays}
            onChange={handleChange}
            required
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </div>
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="User ID"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
        <TextField
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5}} 
          label="Rating Link"
          name="ratingLink"
          value={formData.ratingLink}
          onChange={handleChange}
          required
        />
        <Button
          style={{margin: 2}}
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </Button>
      </form>
    </Container>
  );
}
