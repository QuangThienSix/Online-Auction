import axiosClient from 'api/axiosClient';
import { useAppDispatch } from 'app/hooks';
import { roleActions } from 'features/roles/roleSlice';
import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { getItem } from 'utils';
import AddEditBrand from './pages/AddEditBrand';
import AddEditCategoryPage from './pages/AddEditCategory';
import AddEditPage from './pages/AddEditUser';
import { CategoryPage } from './pages/CategoryPage';
import ChangePassWordPage from './pages/ChangePass';

export default function CategoryIndex() {
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
        <CategoryPage />
      </Route>

      <Route path={`/admin/categorys/add`}>
        <AddEditPage />
      </Route>
      <Route path={`/admin/categorys/changepass`}>
        <ChangePassWordPage />
      </Route>
      <Route path={`/admin/categorys/category`}>
        <AddEditCategoryPage />
      </Route>
      <Route path={`/admin/categorys/brand/:id`}>
        <AddEditBrand />
      </Route>
      <Route path={`/admin/categorys/brand`}>
        <AddEditBrand />
      </Route>
      <Route path={`/admin/categorys/:id`}>
        <AddEditCategoryPage />
      </Route>
      <Route path={`/admin/categorys/:user_id`}>
        <AddEditPage />
      </Route>


    </Switch>
  );
}
