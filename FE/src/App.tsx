import { Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import { HeaderHome, NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import Regis from 'features/auth/pages/RegisPage';
import VerifyPage from 'features/auth/pages/VerifyPage';
import HomePage from 'features/home/homePage';
import { socketActions } from 'features/socket/socketSlice';
import { urlLink } from 'helper/route';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import { ProductDetail } from 'features/product/prodcut.Detail';
import Category from 'features/category/categoryPage';
import Brand from 'features/brand/brandPage';
import { clear } from 'utils';
import { authActions } from 'features/auth/authSlice';
import ForgotPage from 'features/auth/pages/FotgotPage';
import Searchpage from 'features/search/SearchPage';

const URL = 'ws://localhost:45678';

function App() {
  const dispatch = useAppDispatch();
  const usetheme = createTheme();
  clear();
  dispatch(authActions.logout());
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: '200px 1fr',
      gridTemplateAreas: '"header header" "main main"',

      minHeight: '100vh',
    },

    header: {
      gridArea: 'header',
    },
    main: {
      gridArea: 'main',
      padding: usetheme.spacing(2, 3),
    },
  }));

  const [ws, setWs] = useState(new WebSocket(urlLink.api.serverSocketUrl));

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    };
    ws.onmessage = (e) => {
      const message = e.data;
      dispatch(socketActions.getMessage(message));
    };

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose, ws, dispatch]);

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <HeaderHome />
        </Box>
        <Box className={classes.main}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/search" component={Searchpage} exact />
            <Route path="/product/:id" component={ProductDetail} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/regis" component={Regis} />
            <Route path="/forgot" component={ForgotPage} />
            <Route path="/verify/:email" component={VerifyPage} />
            <Route path="/verify" component={VerifyPage} />
            <Route path="/category/:id" component={Category} />
            <Route path="/brand/:id" component={Brand} />
            <PrivateRoute path="/admin">
              <Route component={AdminLayout} />
            </PrivateRoute>
            <Route path="*" exact={true} component={NotFound} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Box>
      </Box>
    </>
  );
}

export default App;
