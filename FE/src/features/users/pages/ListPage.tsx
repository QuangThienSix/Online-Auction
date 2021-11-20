import { Box, Button, Pagination, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import categoryApi from 'api/category';
import productApi from 'api/productApi';
import usersApi from 'api/usersApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RoleAdmin } from 'constants/user_roles';
import { selectRoleList, selectRoleMap } from 'features/roles/roleSlice';
import { productsAction, selectProductsAllList, selectProductsFilterAll, selectProductsPaginationAll } from 'features/seller/productsSlice';
import { Brands, Category, ListParams, PaginationParams, Product, Users } from 'models';
import React, { useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { addSingle } from 'utils';
import { CategoryTable } from '../components/CategoryTable';
import { ProductTable } from '../components/ProductTable';
import UserFilters from '../components/UserFilters';
import UserTable from '../components/UsersTable';
import {
  selectCategoryFilter,
  selectCategoryList,
  selectUsersFilter,
  selectUsersList,
  selectUsersPagination,
  usersAction
} from '../usersSlice';

export interface IListPageProps {
  roles_id: string;
}

const usetheme = createTheme();
const useStyles = makeStyles(() => ({
  root: {},
  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: usetheme.spacing(4),
  },
  loading: {
    position: 'absolute',
    padding: usetheme.spacing(-1),
    with: '100%',
  },
}));

export default function ListPage({ roles_id }: IListPageProps) {
  const usersList = useAppSelector(selectUsersList);
  const productsList = useAppSelector(selectProductsAllList);
  const categoryList = useAppSelector(selectCategoryList);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectUsersFilter);
  const filterCate = useAppSelector(selectCategoryFilter);
  const roleMap = useAppSelector(selectRoleMap);
  const history = useHistory();
  const match = useRouteMatch();
  const roleList = useAppSelector(selectRoleList);
  const filterProduct = useAppSelector(selectProductsFilterAll);
  const pagination = useAppSelector<PaginationParams>(selectUsersPagination);
  const paginationProduct = useAppSelector<PaginationParams>(selectProductsPaginationAll);


  const handlePageChange = (e: any, page: number) => {
    dispatch(
      usersAction.setFilter({
        ...filter,
        _page: page,
      })
    );
  };
  const handlePageChangeProduct = (e: any, page: number) => {
    dispatch(
      productsAction.setFilterAll({
        ...filterProduct,
        _page: page,
      })
    );
  };

  const classes = useStyles();

  useEffect(() => {
    dispatch(usersAction.fetchUsersList(filter));
    dispatch(usersAction.fetchCategoryList(filterCate));
    dispatch(productsAction.fetchProductsAllList(filterProduct));
  }, [dispatch, filter, filterCate, filterProduct]);

  const handleEditUsers = async (user: Users) => {
    history.push(`${match.url}/${user.user_id}`);
  };
  const handleEditCategory = async (category: Category) => {
    history.push(`${match.url}/category/${category.id}`);
  };
  const handleEditProduct = async (product: Product) => {
    history.push(`${match.url}/product/${product.id}`);
  };
  const handleAddBrandInCategory = async (category: Category) => {
    history.push(`${match.url}/brand`);
  };
  const handleEditBrand = async (brand: Brands) => {
    history.push(`${match.url}/brand/${brand.id}`);
  };
  const handleChangePassUsers = async (user: Users) => {
    history.push(`${match.url}/changepass`);
  };
  const handleRemoveUsers = async (user: Users) => {
    try {
      // Remove user API
      await usersApi.remove(user?.user_id || '');
      addSingle('success', 'Remove user successfully!');
      // Trigger to re-fetch user list with current filter
      const newFilter = { ...filter };
      dispatch(usersAction.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch user', error);
    }
  };
  const handleRemoveCategory = async (category: Category) => {
    try {
      // Remove category API
      await categoryApi.remove(category?.id || '');
      addSingle('success', 'Remove category successfully!');
      // Trigger to re-fetch category list with current filter
      const newFilter = { ...filter };
      dispatch(usersAction.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to Remove category', error);
    }
  };
  const handleRemoveProduct = async (product: Product) => {
    try {
      // Remove product API
      await productApi.remove(product?.id || '');
      addSingle('success', 'Remove product successfully!');
      // Trigger to re-fetch product list with current filter
      const newFilter = { ...filterProduct };
      dispatch(productsAction.setFilterAll(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to Remove product', error);
    }
  };
  const handleRemoveBrand = async (category: Brands) => {
    try {
      // Remove Brands API
      await categoryApi.removeBrands(category?.id || '');
      addSingle('success', 'Remove category successfully!');
      // Trigger to re-fetch Brands list with current filter
      const newFilter = { ...filter };
      dispatch(usersAction.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to Remove Brands', error);
    }
  };
  const handleUpSellerUsers = async (user: Users) => {
    console.log('Sellet');
    try {
      // upseller user API
      await usersApi.upseller(user);
      addSingle('success', 'upseller user successfully!');
      // Trigger to re-fetch user list with current filter
      const newFilter = { ...filter };
      dispatch(usersAction.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch user', error);
    }
  };
  const handleDownSellerUsers = async (user: Users) => {
    try {
      // upseller user API
      await usersApi.upseller(user?.user_id || '');
      addSingle('success', 'upseller user successfully!');
      // Trigger to re-fetch user list with current filter
      const newFilter = { ...filter };
      dispatch(usersAction.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch user', error);
    }
  };
  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(usersAction.setFilter(newFilter));
  };
  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(usersAction.setFilterWithDebounce(newFilter));
  };


  return (
    <Box className={classes.root}>
      {/* Add User */}
      {String(roles_id) === RoleAdmin && (
        <Box className={classes.titleContainer}>
          <Typography variant="h4">User</Typography>

          <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Add new user
            </Button>
          </Link>
        </Box>
      )}

      {/* Filters */}
      <Box mb={3}>
        <UserFilters
          filter={filter}
          roleList={roleList}
          onChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </Box>

      {/* User Table */}
      <UserTable
        roleMap={roleMap}
        usersList={usersList}
        onEdit={handleEditUsers}
        changePassword={handleChangePassUsers}
        onRemove={handleRemoveUsers}
        onUpseller={handleUpSellerUsers}
        onDownseller={handleDownSellerUsers}
      />


      {/* Pagination */}

      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={Math.ceil(pagination?._totalRows / pagination?._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
        />
      </Box>
      {/* Category Table */}
      {String(roles_id) === RoleAdmin && (
        <Box className={classes.titleContainer}>
          <Typography variant="h4">Category</Typography>

          <Link to={`${match.url}/category`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Add new category
            </Button>
          </Link>
        </Box>
      )}
      <CategoryTable
        categoryList={categoryList}
        onRemove={handleRemoveCategory}
        onRemoveBrand={handleRemoveBrand}
        onEdit={handleEditCategory}
        onAddBrand={handleAddBrandInCategory}
        onEditBrand={handleEditBrand}
      />


      {String(roles_id) === RoleAdmin && (
        <Box className={classes.titleContainer}>
          <Typography variant="h4">Products</Typography>

          <Link to={`${match.url}/product`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Add new product
            </Button>
          </Link>
        </Box>
      )}
      <ProductTable
        productList={productsList}
        onRemove={handleRemoveProduct}
        onEdit={handleEditProduct}
      />
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={Math.ceil(paginationProduct?._totalRows / paginationProduct?._limit)}
          page={paginationProduct?._page}
          onChange={handlePageChangeProduct}
        />
      </Box>
    </Box>
  );
}
