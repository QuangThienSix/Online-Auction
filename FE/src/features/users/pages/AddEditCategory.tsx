import { ChevronLeft } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/category';
import { Category } from 'models';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addSingle } from 'utils';
import CategoryForm from '../components/CategoryForm';

export interface IAddEdiProps { }

export default function AddEditCategoryPage(props: IAddEdiProps) {
  // const testMessage = useAppSelector(selectMessage);
  // console.log('Message Server send: ', testMessage);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    if (!id) return;

    // IFFE
    (async () => {
      try {
        const data: Category = await categoryApi.getById(id);
        setCategory(data);
      } catch (error) {
        console.log('Failed to fetch user details', error);
      }
    })();
  }, [id]);

  const handleUserFormSubmit = async (formValues: Category) => {
    // TODO: Handle submit here, call API  to add/update user
    if (isEdit) {
      try {
        await categoryApi.update(formValues);
        // Toast success
        addSingle('success', 'Save Category successfully!');

        // Redirect back to user list
        history.push('/admin/user');
      } catch (error: any) {
        addSingle(
          'error',
          error.data.errormessage ? error.data.errormessage : 'Failed Category update!'
        );
      }
    } else {
      try {
        await categoryApi.add(formValues);
        // Toast success
        addSingle('success', 'Save Category successfully!');

        // Redirect back to user list
        history.push('/admin/user');
      } catch (error: any) {
        addSingle('error', error.data.errormessage ? error.data.errormessage : 'Failed users add!');
      }
    }
  };
  const initialValues: Category = {
    name: '',
    is_deleted: '',
    cateted_at: '',
    updated_at: '',
    ...category,
  } as Category;
  return (
    <Box>
      <Link to="/admin/user">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to user list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update category info' : 'Add new category'}</Typography>

      {(!isEdit || Boolean(category)) && (
        <Box mt={3}>
          <CategoryForm isEdit={isEdit} initialValue={initialValues} onSubmit={handleUserFormSubmit} />
        </Box>
      )}
    </Box>
  );
}
