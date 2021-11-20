import { Box, Button, Pagination, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { PaginationParams, Product } from 'models';
import React, { useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { addSingle } from 'utils';
import { SellerTable } from '../components/SellerTable';
import { productsAction, selectProductsFilter, selectProductsList, selectProductsPagination } from '../productsSlice';

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
    const paginationProduct = useAppSelector<PaginationParams>(selectProductsPagination);
    const handleEditProduct = async (user: Product) => {
        history.push(`${match.url}/${user.id}`);
    };
    const handlePageChangeProduct = (e: any, page: number) => {
        dispatch(
            productsAction.setFilter({
                ...filter,
                _page: page,
            })
        );
    };
    useEffect(() => {
        dispatch(productsAction.fetchProductsList(filter));
    }, [dispatch, filter]);

    const handleRemoveProduct = async (product: Product) => {
        try {
            // Remove product API
            await productApi.remove(product?.id || '');
            addSingle('success', 'Remove product successfully!');
            // Trigger to re-fetch product list with current filter
            const newFilter = { ...filter };
            dispatch(productsAction.setFilterAll(newFilter));
        } catch (error) {
            // Toast error
            console.log('Failed to Remove product', error);
        }
    };
    return (
        <Box className={classes.root}>

            <Box className={classes.titleContainer}>
                <Typography variant="h4">Products</Typography>

                <Link to={`/admin/seller/add`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Add new product
                    </Button>
                </Link>
            </Box>
            {/* Product Table */}
            <SellerTable
                productList={productsList}
                onEdit={handleEditProduct}
                onRemove={handleRemoveProduct}
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
