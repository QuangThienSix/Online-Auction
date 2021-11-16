import { createTheme, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import usersApi from 'api/usersApi';
import { ForgotPayload } from 'models';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addSingle } from 'utils';
import ForgotForm from '../components/ForgotForm';
const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    textAlign: 'center',
  },
  box: {
    padding: usetheme.spacing(2),
  },
}));

export default function ForgotPage() {
  const classes = useStyles();
  const history = useHistory();


  const { email } = useParams<{ email: string }>();

  const handleVerifyClick = async (formValue: ForgotPayload) => {
    try {
      await usersApi.forgotPass(formValue);
      // Toast success
      addSingle('success', 'Change Password successfully!');

      // Redirect back to user list
      history.push('/login');
    } catch (error: any) {
      console.log(error);
      addSingle(
        'error',
        error.data.errormessage ? error.data.errormessage : 'Failed Forgot pass!'
      );
    }
  };

  const initialValue: ForgotPayload = {
    email: email ? email : '',
    tokenMail: '',
    newpassword: '',
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h4">Forgot Password</Typography>
        <ForgotForm initialValue={initialValue} onSubmit={handleVerifyClick} />
      </Paper>
    </div>
  );
}
