import { Box, Button, Pagination, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { productsAction, selectProductsAllList, selectProductsFilterAll, selectProductsPaginationAll } from 'features/seller/productsSlice';
import { PaginationParams, Product } from 'models';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addSingle } from 'utils';
import { ProductTable } from '../components/ProductTable';

export interface IProductPageProps {
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

export function ProductPage(props: IProductPageProps) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useAppDispatch();
    const productsList = useAppSelector(selectProductsAllList);
    const filterProduct = useAppSelector(selectProductsFilterAll);
    const paginationProduct = useAppSelector<PaginationParams>(selectProductsPaginationAll);
    const handlePageChangeProduct = (e: any, page: number) => {
        dispatch(
            productsAction.setFilterAll({
                ...filterProduct,
                _page: page,
            })
        );
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
    const handleEditProduct = async (product: Product) => {
        history.push(`/admin/products/product/${product.id}`);
    };

    useEffect(() => {
        dispatch(productsAction.fetchProductsAllList(filterProduct));
    }, [dispatch, filterProduct]);

    return <>

        <Box className={classes.titleContainer}>
            <Typography variant="h4">Products</Typography>

            <Link to={`/admin/products/product`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Add new product
                </Button>
            </Link>
        </Box>
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
    </>;
}

