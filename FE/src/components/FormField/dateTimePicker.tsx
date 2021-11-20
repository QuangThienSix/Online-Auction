import React, { InputHTMLAttributes } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function TimeDatePicker({ control, name, label }: InputFieldProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    field: { value, onChange },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useController({
    name,
    control,
  });
  return (
    <DatePicker
      placeholderText={label}
      onChange={onChange}
      selected={value}
      name={name}
    />

  );
}
