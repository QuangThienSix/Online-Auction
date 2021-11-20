import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { RoleAdmin } from 'constants/user_roles';
import jwt_decode from 'jwt-decode';
import { Role, Users } from 'models';
import React, { useState } from 'react';
import { getItem } from 'utils';
export interface IUserTableProps {
  usersList: Users[];
  roleMap: {
    [key: string]: Role;
  };
  onEdit?: (users: Users) => void;
  onRemove?: (users: Users) => void;
  onUpseller?: (users: Users) => void;
  onDownseller?: (users: Users) => void;
  changePassword?: (users: Users) => void;
}

const usetheme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    marginRight: usetheme.spacing(1),
  },
  edit: {
    marginRight: `${usetheme.spacing(1)}!important`,
  },
  table: {},
}));

export default function UserTable({ usersList, roleMap, onRemove, onUpseller, onDownseller, changePassword, onEdit }: IUserTableProps) {
  const { accessToken } = getItem('users');
  const decoded = jwt_decode<{ roles_id: string }>(accessToken);
  const classes = useStyles();
  const [selectedUsers, setSelectedUsers] = useState<Users>();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleRemoveClick = (user: Users) => {
    setSelectedUsers(user);
    setOpen(true);
  };
  const handleRemoveClick1 = (user: Users) => {
    setSelectedUsers(user);
    setOpen1(true);
  };
  const handleRemoveClick2 = (user: Users) => {
    setSelectedUsers(user);
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleRemoveConfirm = (user: Users) => {
    // call onremove
    onRemove?.(user);

    setOpen(false);
  };
  const handleRemoveConfirm1 = (user: Users) => {
    // call onremove
    onUpseller?.(user);
    setOpen(false);
  };
  const handleRemoveConfirm2 = (user: Users) => {
    // call onremove
    onDownseller?.(user);
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>FullName</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ratting</TableCell>
              <TableCell>Roles</TableCell>
              <TableCell>Lock</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {usersList.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell>{user.user_id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Box fontWeight="bold">{user.ratting}</Box>
                </TableCell>
                <TableCell>{roleMap[user.roles_id]?.role_name}</TableCell>
                <TableCell>{user.islock}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    className={classes.edit}
                    color="primary"
                    onClick={() => onEdit?.(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    className={classes.edit}
                    color="primary"
                    onClick={() => changePassword?.(user)}
                  >
                    Change Password
                  </Button>


                  {String(decoded.roles_id) === RoleAdmin && (<>
                    <Button size="small" color="secondary" onClick={() => handleRemoveClick(user)}>
                      Remove
                    </Button>
                    <Button size="small" color="success" onClick={() => handleRemoveClick1(user)}>
                      Up Seller
                    </Button>
                    <Button size="small" color="warning" onClick={() => handleRemoveClick2(user)}>
                      Down Seller
                    </Button>

                  </>)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Remove Dialog */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remove User</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove user name "{selectedUsers?.username}".
              <br /> This action &apos;t be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveConfirm(selectedUsers as Users);
              }}
              color="secondary"
              variant="contained"
              autoFocus
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Up Seller</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to up seller user name "{selectedUsers?.username}".
              <br /> This action &apos;t be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1} color="inherit" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveConfirm1(selectedUsers as Users);
              }}
              color="primary"
              variant="contained"
              autoFocus
            >
              Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Down Seller</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to Down seller user name "{selectedUsers?.username}".
              <br /> This action &apos;t be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="inherit" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleRemoveConfirm2(selectedUsers as Users);
              }}
              color="warning"
              variant="contained"
              autoFocus
            >
              Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
