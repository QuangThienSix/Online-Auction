import axiosClient from 'api/axiosClient';
import { useAppDispatch } from 'app/hooks';
import { roleActions } from 'features/roles/roleSlice';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { getItem } from 'utils';
import ListPage from './pages/ListPage';
import jwt_decode from 'jwt-decode';
import AddEditPage from './pages/AddEditUser';
import ChangePassWordPage from './pages/ChangePass';
import AddEditCategoryPage from './pages/AddEditCategory';
import AddEditBrand from './pages/AddEditBrand';
import AddEditProduct from './pages/AddEditProduct';

export default function Users() {
  const { accessToken } = getItem('users');
  const decoded = jwt_decode<{ roles_id: string }>(accessToken);
  axiosClient.defaults.headers.common['x-access-token'] = accessToken;
  const match = useRouteMatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(roleActions.fetchRoleList());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={match.path} exact>
        <ListPage roles_id={decoded?.roles_id} />
      </Route>

      <Route path={`${match.path}/add`}>
        <AddEditPage />
      </Route>
      <Route path={`${match.path}/changepass`}>
        <ChangePassWordPage />
      </Route>
      <Route path={`${match.path}/category/:id`}>
        <AddEditCategoryPage />
      </Route>

      <Route path={`${match.path}/product/:id`}>
        <AddEditProduct />
      </Route>
      <Route path={`${match.path}/product`}>
        <AddEditProduct />
      </Route>
      <Route path={`${match.path}/category`}>
        <AddEditCategoryPage />
      </Route>
      <Route path={`${match.path}/brand/:id`}>
        <AddEditBrand />
      </Route>
      <Route path={`${match.path}/brand`}>
        <AddEditBrand />
      </Route>
      <Route path={`${match.path}/:user_id`}>
        <AddEditPage />
      </Route>


    </Switch>
  );
}
