import React from 'react';
import useValidate from '../../../hooks/use-validate';

interface FormInputProps {
  type: 'email' | 'password' | 'text';
  name?: string;
  placeholder?: string;
}

/**
 *
 * @param {type: string, name: string, placeholder: string}
 * @returns
 */
export default function FormInput({
  type,
  name = type,
  placeholder = type[0].toUpperCase().concat(type.slice(1)),
}: FormInputProps): JSX.Element {
  const { value, onChangeHandler } = useValidate(type);
  return (
    <input
      className="login__input form__input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
      autoComplete="true"
      required
    />
  );
}
