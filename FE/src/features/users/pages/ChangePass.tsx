import { createTheme, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import usersApi from 'api/usersApi';
import { ChangePass } from 'models';
import React from 'react';
import { useHistory } from 'react-router';
import { addSingle } from 'utils';
import ChangePassWord from '../components/ChangePasswordForm';

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

export default function ChangePassWordPage() {

    const history = useHistory();

    const classes = useStyles();


    // const message = useAppSelector((state) => state.auth.errormessage);

    const handleLoginClick = async (formValue: ChangePass) => {
        try {
            await usersApi.changePasss(formValue);
            // Toast success
            addSingle('success', 'Change Password successfully!');

            // Redirect back to user list
            history.push('/admin/user');
        } catch (error: any) {
            console.log(error);
            addSingle(
                'error',
                error.data.errormessage ? error.data.errormessage : 'Failed ChangePass!'
            );
        }
    };

    const initialValue: ChangePass = {
        oldpassword: '',
        newpassword: '',
    };

    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h4">Change Password</Typography>
                
                <ChangePassWord initialValue={initialValue} onSubmit={handleLoginClick} />
            </Paper>
        </div>
    );
}
