import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Sidebar from 'components/common/Sidebar';
import { Bidding } from 'features/bidding/Bidding';
import Dashboard from 'features/dashboard/index';
import { Seller } from 'features/seller/indexPage';
import Users from 'features/users';
import CategoryIndex from 'features/users/indexCategory';
import ProductIndex from 'features/users/indexProduct';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '200px 1fr',
    gridTemplateAreas: '"header header" "sidebar main"',

    minHeight: '100vh',
  },

  header: {
    gridArea: 'header',
  },
  main: {
    gridArea: 'main',
    backgroundColor: usetheme.palette.background.paper,
    padding: usetheme.spacing(2, 3),
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${usetheme.palette.divider}`,
    backgroundColor: usetheme.palette.background.paper,
  },
}));

export function AdminLayout() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Box className={classes.root}>
        <Box className={classes.sidebar}>
          <Sidebar />
        </Box>
        <Box className={classes.main}>
          <Switch>
            <Route path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route path="/admin/user">
              <Users />
            </Route>
            <Route path="/admin/bidding">
              <Bidding />
            </Route>
            <Route path="/admin/seller">
              <Seller />
            </Route>
            <Route path="/admin/categorys">
              <CategoryIndex />
            </Route>
            <Route path="/admin/products">
              <ProductIndex />
            </Route>
          </Switch>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
