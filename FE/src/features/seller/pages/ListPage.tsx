import { Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Product } from 'models';
import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import SellerTable from '../components/SellerTable';
import { productsAction, selectProductsFilter, selectProductsList } from '../productsSlice';

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


export function ListPage() {
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch();
    const dispatch = useAppDispatch();
    const productsList = useAppSelector(selectProductsList);
    const filter = useAppSelector(selectProductsFilter);
    const handleEditProduct = async (user: Product) => {
        history.push(`${match.url}/${user.id}`);
    };
    useEffect(() => {
        dispatch(productsAction.fetchProductsList(filter));
    }, [dispatch, filter]);

    const handleRemoveProduct = async (user: Product) => {
        // try {
        //   // Remove user API
        //   await usersApi.remove(user?.user_id || '');
        //   addSingle('success', 'Remove user successfully!');
        //   // Trigger to re-fetch user list with current filter
        //   const newFilter = { ...filter };
        //   dispatch(usersAction.setFilter(newFilter));
        // } catch (error) {
        //   // Toast error
        //   console.log('Failed to fetch user', error);
        // }
    };
    return (
        <Box className={classes.root}>
            {/* Product Table */}
            <SellerTable
                productsList={productsList}
                onEdit={handleEditProduct}
                onRemove={handleRemoveProduct}
            />
        </Box>
    );
}
