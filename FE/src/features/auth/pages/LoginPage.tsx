import { ChevronLeft } from '@mui/icons-material';
import { createTheme, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import { Users } from 'models';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authActions, LoginPayload } from '../authSlice';
import LoginForm from '../components/LoginForm';

const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
  },
  box: {
    padding: usetheme.spacing(2),
  },
}));

export default function LoginPage() {
  const history = useHistory();
  const token = localStorage.getItem('x-access-token');
  if (token) {
    history.push('/admin/dashboard');
  }

  const classes = useStyles();

  const dispatch = useAppDispatch();

  const handleLoginClick = async (formValue: Users) => {
    dispatch(authActions.login(formValue));
  };

  const initialValue: LoginPayload = {
    password: '',
    username: '',
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h4">Login</Typography>
        <LoginForm initialValue={initialValue} onSubmit={handleLoginClick} />
        <Link to="/regis">
          <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
            <ChevronLeft /> Back Register
          </Typography>
        </Link>
      </Paper>
    </div>
  );
}
