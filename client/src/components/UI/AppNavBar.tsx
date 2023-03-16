import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { logouUserActionThunk } from '../../features/actions';
import '@fontsource/inter';
import { getShopThunk } from '../../features/Slices/shopSlice';

const styles = {
  appBar: {
    background: 'white',
    boxShadow: 'none',
    textShadow: '1px 1px 2px black',
    marginBottom: '30px',
  },
  toolbar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Inter',
    fontSize: '20px',
    margin: '0 10px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '50px',
  },
  shopName: {
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '10px',
    color: 'black',
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  menuIcon: {
    color: 'black',
    fontSize: '30px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  },
  listItem: {
    textAlign: 'center',
    padding: '20px',
    color: 'black',
    textDecoration: 'none',
  },
};

export default function AppNavbar(): JSX.Element {
  const shopName = useParams();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = (): void => {
    setOpen(true);
  };
console.log(shopName)
  const handleDrawerClose = (): void => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.shop);

  // const userData = useAppSelector((state) => state.userData);
  // const dispatch = useAppDispatch();

  // const logoutHandler = (): void => {
  //   dispatch(logouUserActionThunk()).catch(() => null);
  // };
  
  useEffect(() => {
    dispatch(getShopThunk()).catch(() => null);
  }, []);

  return (
    <AppBar position="static" style={styles.appBar}>
      <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar sx={styles.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerOpen}
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{ width: '240px' }}
              >
                <List sx={styles.list}>
                  <Link
                    href={`/shop/${shop.shop.name}/description`}
                    sx={styles.listItem}
                  >
                    О КОМПАНИИ
                  </Link>
                  <Link href="/:name/contacts" sx={styles.listItem}>
                    КОНТАКТЫ
                  </Link>
                </List>
              </Drawer>
            </Grid>
            <Grid item>
              <Box style={styles.logo}>
                <Typography variant="h6" color="inherit">
                  <img
                    src="https://img.icons8.com/cotton/64/null/lemon-cake.png"
                    alt="Logo"
                    style={styles.logoImg}
                  />
                </Typography>
                <Typography style={styles.shopName} variant="h4">
                  {shop.shop.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box style={{ display: 'flex' }}>
                <Link href="/auth/signup" style={styles.link}>
                  SINGUP
                </Link>
                <Link href="/auth/signin" style={styles.link}>
                  SINGIN
                </Link>
                <Link href="/auth/logout" style={styles.link}>
                  LOGOUT
                </Link>
                <Link href="/bascet">
                  <ShoppingCartIcon sx={{ color: 'black', fontSize: 30 }} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
