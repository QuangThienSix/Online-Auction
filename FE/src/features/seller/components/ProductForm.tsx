import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import categoryApi from 'api/category';
import productApi from 'api/productApi';
import { InputField, SelectField, SelectOption } from 'components/FormField';
import { TimeDatePicker } from 'components/FormField/dateTimePicker';
import { ContentState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import { Brands, ListResponse, Product } from 'models';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface ProductFormProps {
  initialValue?: Product;
  onSubmit?: (formValue: Product) => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.string().required('Price is required'),
  current_price: yup.string().required('Name is required'),
  max_price: yup.string().required('Name is required'),
  // avatar: yup.string().required('Name is required'),
  category_id: yup.string().required('Name is required'),
  brand_id: yup.string().required('Name is required'),
  step: yup.string().required('Name is required'),
  // description: yup.string().required('Name is required'),
  time_start: yup.string().required('Delete is required'),
  time_end: yup.string().required('Delete is required'),
});

export default function ProductForm({ initialValue, onSubmit }: ProductFormProps) {
  const [file, setFile] = useState();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  let _contentState = ContentState.createFromText(String(initialValue?.description));
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Product>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const [categoryNoBrand, setCategoryNoBrand] = useState<Brands[]>();


  const handleFormSubmit = async (formValue: Product) => {

    const fileUrl = await productApi.upload(file);
    if (fileUrl) {
      formValue.avatar = fileUrl;
    }
    else {
      formValue.avatar = ''
    }
    formValue.description = draftToHtml(contentState);
    console.log(draftToHtml(contentState));
    console.log(formValue);
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

  const onChangePicture = async (e: any) => {
    setFile(e.target.files[0]);

  };
  // const onEditorStateChange = (editorState: any) => {
  //   setEditorState(editorState);
  // }
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="name" control={control} label="Name" />
        <InputField name="price" control={control} label="price" />
        <InputField name="current_price" control={control} label="current_price" />
        <InputField name="max_price" control={control} label="max_price" />
        {/* <InputFieldFile name="avatar" control={control} label="avatar" /> */}
        <input
          type="file"
          //style={{ display: 'none' }}
          onChange={onChangePicture}
        />

        {Array.isArray(newArr) && newArr.length > 0 && (
          <SelectField options={newArr} name="category_id" control={control} label="Category" />
        )}
        <InputField name="brand_id" control={control} label="brand_id" />
        <InputField name="step" control={control} label="step" />
        {/* <InputField name="description" control={control} label="description" /> */}
        {/* <EditorField name="description" control={control} label="description" /> */}
        <Editor
          defaultContentState={contentState}
          onContentStateChange={setContentState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />


        <TimeDatePicker name="time_start" control={control} label="time_start" />
        <TimeDatePicker name="time_end" control={control} label="time_end" />

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
