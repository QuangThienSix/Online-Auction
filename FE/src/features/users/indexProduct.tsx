import axiosClient from 'api/axiosClient';
import { useAppDispatch } from 'app/hooks';
import { roleActions } from 'features/roles/roleSlice';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { getItem } from 'utils';
import AddEditProduct from './pages/AddEditProduct';
import { ProductPage } from './pages/ProductPage';

export default function ProductIndex() {
  const { accessToken } = getItem('users');
  // const decoded = jwt_decode<{ roles_id: string }>(accessToken);
  axiosClient.defaults.headers.common['x-access-token'] = accessToken;
  const match = useRouteMatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(roleActions.fetchRoleList());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={match.path} exact>
        <ProductPage />
      </Route>

      <Route path={`/admin/products/product/:id`}>
        <AddEditProduct />
      </Route>
      <Route path={`/admin/products/product`}>
        <AddEditProduct />
      </Route>


    </Switch>
  );
}
