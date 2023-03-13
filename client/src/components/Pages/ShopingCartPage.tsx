import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  total: {
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
}));

function ShoppingCartPage({ items, removeItem }) {
  const classes = useStyles();

  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Subtotal</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                ${(item.price * item.quantity).toFixed(2)}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => removeItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} className={classes.total}>
              Total:
            </TableCell>
            <TableCell>${getTotalPrice().toFixed(2)}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </TableContainer>
  );
}

export default ShoppingCartPage;
