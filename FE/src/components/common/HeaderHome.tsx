import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selecttorsIsLoggedIn } from 'features/auth/authSlice';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import React from 'react';
import { useHistory } from 'react-router';
import './header.css';
export function HeaderHome() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isLoggedIn = useAppSelector(selecttorsIsLoggedIn);

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  const handlePathHome = () => {
    history.push('/');
  };
  const handlePathLogin = () => {
    history.push('/login');
  };
  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark',
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video',
            },
          ],
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash',
        },
        {
          separator: true,
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link',
        },
      ],
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left',
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right',
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center',
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify',
        },
      ],
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print',
                },
              ],
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List',
            },
          ],
        },
      ],
    },
    {
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus',
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus',
            },
          ],
        },
        {
          label: 'Archieve',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus',
            },
          ],
        },
      ],
    },
  ];
  const end = <InputText placeholder="Search" type="text" />;
  return (
    <header className="header">
      <div className="container">
        <div className="row row-header">
          <div className="col-1 logo">
            <Typography className="box" onClick={handlePathHome} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">Logo</Button>
            </Typography>
          </div>
          <div className="col-10 menu">
            <Menubar model={items} end={end} />
          </div>
          <div className="col-1 users">
            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogoutClick}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={handlePathLogin}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
