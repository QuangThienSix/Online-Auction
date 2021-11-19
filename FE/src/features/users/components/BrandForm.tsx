import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import categoryApi from 'api/category';
import { InputField, SelectField } from 'components/FormField';
import { Brands, ListResponse } from 'models';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface BrandFormProps {
  initialValue?: Brands;
  isEdit: Boolean;
  onSubmit?: (formValue: Brands) => void;
}
export interface SelectOption {
  label?: string;
  value: string | number;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  is_deleted: yup.string().required('Delete is required'),
});

export default function BrandForm({ initialValue, isEdit, onSubmit }: BrandFormProps) {
  const [categoryNoBrand, setCategoryNoBrand] = useState<Brands[]>();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Brands>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: Brands) => {
    await onSubmit?.(formValue);
  };
  useEffect(() => {
    // IFFE
    (async () => {
      try {
        const data: ListResponse<Brands> = await categoryApi.getCategoryNoBrand();
        setCategoryNoBrand(data.data);
      } catch (error) {
        console.log('Failed to fetch getCategoryNoBrand', error);
      }
    })();
  }, []);
  const newArr: SelectOption[] = [];
  // eslint-disable-next-line array-callback-return
  categoryNoBrand?.map((category) => {
    const item = {
      label: category.name ? category.name : '',
      value: category.id ? category.id : ''
    }
    newArr.push(item);
  })

  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="name" control={control} label="Name" />
        {/* <InputField name="category_id" control={control} label="Category" /> */}
        <InputField name="is_deleted" control={control} label="Delete" />
        {Array.isArray(newArr) && newArr.length > 0 && (
          <SelectField options={newArr} name="category_id" control={control} label="Category" />
        )}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}


