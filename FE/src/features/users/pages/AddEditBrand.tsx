import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/category';
import { Brands } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addSingle } from 'utils';
import BrandForm from '../components/BrandForm';

export interface IAddEdiProps { }

export default function AddEditBrand(props: IAddEdiProps) {
  // const testMessage = useAppSelector(selectMessage);
  // console.log('Message Server send: ', testMessage);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const [category, setCategory] = useState<Brands>();

  useEffect(() => {
    if (!id) return;

    // IFFE
    (async () => {
      try {
        const data: Brands = await categoryApi.getByIdBrand(id);
        setCategory(data);
      } catch (error) {
        console.log('Failed to fetch user details', error);
      }
    })();
  }, [id]);

  const handleUserFormSubmit = async (formValues: Brands) => {
    // TODO: Handle submit here, call API  to add/update user
    if (isEdit) {
      try {
        await categoryApi.updateBrand(formValues);
        // Toast success
        addSingle('success', 'Save Brand successfully!');

        // Redirect back to user list
        history.push('/admin/user');
      } catch (error: any) {
        console.log(error);
        addSingle(
          'error',
          error.data.errormessage ? error.data.errormessage : 'Failed users update!'
        );
      }
    } else {
      try {
        await categoryApi.addBrand(formValues);
        // Toast success
        addSingle('success', 'Save users successfully!');

        // Redirect back to user list
        history.push('/admin/user');
      } catch (error: any) {
        addSingle('error', error.data.errormessage ? error.data.errormessage : 'Failed users add!');
      }
    }
  };
  const initialValues: Brands = {
    name: '',
    is_deleted: '',
    category_id: '',
    ...category,
  } as Brands;
  return (
    <Box>
      <Link to="/admin/user">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to user list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update Brand info' : 'Add new Brand'}</Typography>

      {(!isEdit || Boolean(category)) && (
        <Box mt={3}>
          <BrandForm isEdit={isEdit} initialValue={initialValues} onSubmit={handleUserFormSubmit} />
        </Box>
      )}
    </Box>
  );
}
