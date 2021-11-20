import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { InputField } from 'components/FormField';
import { Category } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface CategoryFormProps {
  initialValue?: Category;
  isEdit: Boolean;
  onSubmit?: (formValue: Category) => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  is_deleted: yup.string().required('Delete is required'),
});

export default function CategoryForm({ initialValue, isEdit, onSubmit }: CategoryFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Category>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: Category) => {
    await onSubmit?.(formValue);
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="name" control={control} label="Name" />
        <InputField name="is_deleted" control={control} label="Delete" />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
