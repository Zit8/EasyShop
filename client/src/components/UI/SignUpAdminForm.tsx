// import React, { useState, useState } from 'react';
// import { TextField, Button, Typography, Container } from '@material-ui/core';
// import { makeStyles, makeStyles } from '@material-ui/core/styles';
// import { TimePicker } from '@mui/lab';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';

// const daysOfWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// const useStyles = makeStyles((theme) => ({
//   textField: {
//     margin: theme.spacing(1),
//   },
// }));

// type FormData = {
//   weekdays: string;
// };

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     margin: theme.spacing(1),
//     width: '100%',
//   },
//   button: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
// export default function SignUpAdminForm(): JSX.Element {
//   const classes = useStyles();
//   const [formData, setFormData] = useState<FormData>({ weekdays: '' });

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setFormData({ weekdays: event.target.value as string });
//   };

//   const classes = useStyles();
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can add your code to handle the form submission
//     console.log(formData);
//   };
//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Register your shop
//       </Typography>
//       <form className={classes.form} onSubmit={handleSubmit}>
//         <TextField
//           className={classes.textField}
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="Description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           multiline
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="Logo"
//           name="logo"
//           value={formData.logo}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="City"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="Address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="Phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           className={classes.textField}
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <TimePicker
//           label="Controlled picker"
//           name="startTime"
//           value={formData.startTime}
//           // onChange={(newValue) => setValue(newValue)}
//           onChange={handleChange}
//         />
//         <TimePicker
//           label="Controlled picker"
//           name="finishingTime"
//           value={formData.finishingTime}
//           // onChange={(newValue) => setValue(newValue)}
//           onChange={handleChange}
//         />
//         <div>
//           <Select
//             className={classes.textField}
//             label="Weekdays"
//             name="weekdays"
//             value={formData.weekdays}
//             onChange={handleChange}
//             required
//           >
//             {daysOfWeek.map((day) => (
//               <MenuItem key={day} value={day}>
//                 {day}
//               </MenuItem>
//             ))}
//           </Select>
//         </div>
//         <TextField
//           className={classes.textField}
//           label="User ID"
//           name="userId"
//           value={formData.userId}
//           onChange={handleChange}
//         />
//         <TextField
//           className={classes.textField}
//           label="Rating Link"
//           name="ratingLink"
//           value={formData.ratingLink}
//           onChange={handleChange}
//           required
//         />
//         <Button
//           className={classes.button}
//           variant="contained"
//           color="primary"
//           type="submit"
//         >
//           Register
//         </Button>
//       </form>
//     </Container>
//   );
// }
