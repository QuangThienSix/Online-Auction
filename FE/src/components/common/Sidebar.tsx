import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dashboard, PeopleAlt } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { RoleAdmin, RoleSeller, RoleBidder } from 'constants/user_roles';
import { getItem } from 'utils';
import jwt_decode from 'jwt-decode';

const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',

    '&.active > li': {
      backgroundColor: usetheme.palette.action.selected,
    }
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const { accessToken } = getItem('users');
  const decoded = jwt_decode<{ roles_id: string }>(accessToken);

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>

            <NavLink to="/admin/dashboard" className={classes.link}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            {String(decoded.roles_id) === RoleAdmin && (
              <>
                <NavLink to="/admin/user" className={classes.link}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PeopleAlt />
                      </ListItemIcon>
                      <ListItemText primary="Users" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink to="/admin/categorys" className={classes.link}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PeopleAlt />
                      </ListItemIcon>
                      <ListItemText primary="Category" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink to="/admin/products" className={classes.link}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PeopleAlt />
                      </ListItemIcon>
                      <ListItemText primary="Products" />
                    </ListItemButton>
                  </ListItem>
                </NavLink></>
            )}

            {String(decoded.roles_id) === RoleSeller && (
              <>
                <NavLink to="/admin/user" className={classes.link}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PeopleAlt />
                      </ListItemIcon>
                      <ListItemText primary="Users" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink to="/admin/seller" className={classes.link}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PeopleAlt />
                      </ListItemIcon>
                      <ListItemText primary="Seller" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              </>
            )}
            {String(decoded.roles_id) === RoleBidder && (
              <NavLink to="/admin/bidding" className={classes.link}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary="Bidding" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )}
          </List>
        </nav>
      </Box>
    </>
  );
}

