import { Box, Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import categoryApi from 'api/category';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Brands, Category } from 'models';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addSingle } from 'utils';
import { CategoryTable } from '../components/CategoryTable';
import { selectCategoryList, selectUsersFilter, usersAction } from '../usersSlice';
export interface ICategoryPageProps {
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

export function CategoryPage(props: ICategoryPageProps) {
    const categoryList = useAppSelector(selectCategoryList);
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectUsersFilter);
    const history = useHistory();
    const classes = useStyles();
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

    const handleAddBrandInCategory = async (category: Category) => {
        history.push(`/admin/categorys/brand`);
    };
    const handleEditBrand = async (brand: Brands) => {
        history.push(`/admin/categorys/brand/${brand.id}`);
    };
    const handleEditCategory = async (category: Category) => {
        history.push(`/admin/categorys/${category.id}`);
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
    return (
        <> {/* Category Table */}

            <Box className={classes.titleContainer}>
                <Typography variant="h4">Category</Typography>

                <Link to={`/admin/categorys/category`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Add new category
                    </Button>
                </Link>
            </Box>
            <CategoryTable
                categoryList={categoryList}
                onRemove={handleRemoveCategory}
                onRemoveBrand={handleRemoveBrand}
                onEdit={handleEditCategory}
                onAddBrand={handleAddBrandInCategory}
                onEditBrand={handleEditBrand}
            />
        </>
    );
}
