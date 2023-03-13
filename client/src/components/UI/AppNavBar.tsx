import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { logouUserActionThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
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
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

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
  },
};

export default function AppNavbar(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const logoutHandler = (): void => {
    dispatch(logouUserActionThunk()).catch(() => null);
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar sx={styles.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  // onClick={handleDrawerToggle}
                  sx={styles.menuIcon}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                variant="temporary"
                anchor="left"
                // open={openDrawer}
                // onClose={handleDrawerToggle}
                sx={styles.drawer}
              >
                <List sx={styles.list}>
                  <ListItem
                    button
                    style={{ textAlign: 'center', padding: '20px' }}
                  >
                    <ListItemText primary="О КОМПАНИИ" />
                  </ListItem>
                  <ListItem
                    button
                    style={{ textAlign: 'center', padding: '20px' }}
                  >
                    <ListItemText primary="КОНТАКТЫ" />
                  </ListItem>
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
                  SHOP NAME
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box style={{ display: 'flex' }}>
                <Link href="/youtube" style={styles.link}>
                  SING UP
                </Link>
                <Link href="/" style={styles.link}>
                  LOGOUT
                </Link>
                <ShoppingCartIcon sx={{ color: 'black', fontSize: 30 }} />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
