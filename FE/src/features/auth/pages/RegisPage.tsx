import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, Paper, Typography, Box } from '@mui/material';
import RegisForm from '../components/RegisForm';
import { Users } from 'models';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
  },
  box: {
    padding: usetheme.spacing(2),
  },
}));

export default function Regis() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const initialValue: Users = {
    password: '',
    username: '',
    address: '',
    email: '',
    fullname: '',
    accessToken: '',
    refreshToken: '',
    islock: true,
    roles_id: '2',
  };

  const handleRegisterClick = async (formValue: Users) => {
    dispatch(authActions.register({ currentUser: formValue }));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h4">Register</Typography>
        <RegisForm initialValue={initialValue} onSubmit={handleRegisterClick} />
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/login" style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
              <ChevronLeft /> Back Login
            </Typography>
          </Link>
          <Link to="/verify" style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
              Back Verify
              <ChevronRight />
            </Typography>
          </Link>
        </Box>
      </Paper>
    </div>
  );
}
