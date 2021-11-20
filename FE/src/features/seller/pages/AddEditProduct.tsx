import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import productApi from 'api/productApi';
import { Product } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addSingle } from 'utils';
import ProductForm from '../components/ProductForm';

export interface IAddEdiProps { }

export default function AddEditProduct(props: IAddEdiProps) {
  // const testMessage = useAppSelector(selectMessage);
  // console.log('Message Server send: ', testMessage);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const [category, setCategory] = useState<Product>();

  useEffect(() => {
    if (!id) return;

    // IFFE
    (async () => {
      try {
        const data: Product = await productApi.getPrDetail(id);
        data.time_end = new Date(data.time_end);
        data.time_start = new Date(data.time_start);
        setCategory(data);
      } catch (error) {
        console.log('Failed to fetch product details', error);
      }
    })();
  }, [id]);

  const handleUserFormSubmit = async (formValues: Product) => {
    // TODO: Handle submit here, call API  to add/update user

    if (isEdit) {
      try {
        await productApi.updateProduct(formValues);
        // Toast success
        addSingle('success', 'Save Product successfully!');

        // Redirect back to user list
        history.push('/admin/seller');
      } catch (error: any) {
        console.log(error);
        addSingle(
          'error',
          error.data.errormessage ? error.data.errormessage : 'Failed Product update!'
        );
      }
    } else {
      try {
        await productApi.addProduct(formValues);
        // Toast success
        addSingle('success', 'Save Product successfully!');

        // Redirect back to user list
        history.push('/admin/seller');
      } catch (error: any) {
        addSingle('error', error.data.errormessage ? error.data.errormessage : 'Failed users add!');
      }
    }
  };

  const initialValues: Product = {
    name: '',
    price: '',
    current_price: '',
    max_price: '',
    avatar: '',
    category_id: '',
    brand_id: '',
    step: '',
    description: '',
    time_start: '',
    time_end: '',
    ...category,
  } as Product;
  return (
    <Box>
      <Link to="/admin/user">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to user list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update Product info' : 'Add new Product'}</Typography>

      {(!isEdit || Boolean(category)) && (
        <Box mt={3}>
          <ProductForm initialValue={initialValues} onSubmit={handleUserFormSubmit} />
        </Box>
      )}
    </Box>
  );
}
