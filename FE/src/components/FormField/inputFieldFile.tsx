import { Input } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputFieldFile({ control, name, label, ...inputProps }: InputFieldProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    field: { onBlur, onChange },
    fieldState: { invalid },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useController({
    name,
    control,
  });

  return (
    <Input
      fullWidth
      size='small'
      onChange={onChange}
      type="file"
      onBlur={onBlur}
      error={invalid}
    />
  );
}
