import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/common';
// import { useAppDispatch } from 'app/hooks';
// import { Button } from '@mui/material';
// import { authActions } from 'features/auth/authSlice';

function App() {
  // const dispatch = useAppDispatch();

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={()=> dispatch(authActions.logout())}>Logout</Button> */}
      <Switch>
        <Route path="/login" component={LoginPage} />

        <PrivateRoute path="/admin">
          <Route component={AdminLayout} />
        </PrivateRoute>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
