import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export interface EditorFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function EditorField({ control, name, label, ...inputProps }: EditorFieldProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    field: { value, onChange },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useController({
    name,
    control,
  });
  return (

    <Editor
      editorState={value}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={onChange}
    />

  );
}
