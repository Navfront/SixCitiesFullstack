import { ChangeEvent, useState } from 'react';

const INPUT_COLORS = {
  SUCCESS: '#40A73F',
  DEFAULT: 'black',
};

export const InputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
};

type ErrorCB = (error: string) => void;

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const validate = (type: string, value: string): string => {
  if (value.trim().length < 1) {
    return 'Строка не должна быть пустой!';
  } else if (value.trim().length > 16) {
    return 'Не более 16 символов!';
  }
  switch (type) {
    case InputTypes.email:
      if (!EMAIL_REGEX.test(value)) {
        return 'Введите правильный email!';
      }
      return '';
    case InputTypes.password:
      if (value.trim().length < 4) {
        return 'Пароль слишком короткий!';
      }
      return '';

    default:
      return '';
  }
};

export default function useValidate(
  type: string,
  errorCB: ErrorCB = () => {},
  placeholder: string = ''
): {
  value: string;
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  errorCB: (error: string) => void;
} {
  const [value, setValue] = useState(placeholder);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    evt.target.setCustomValidity(validate(type, evt.target.value));
    if (validate(type, evt.target.value) === '') {
      evt.target.style.outlineColor = INPUT_COLORS.SUCCESS;
    } else {
      evt.target.style.outlineColor = INPUT_COLORS.DEFAULT;
    }
    setValue(evt.target.value);
  };

  return {
    value,
    onChangeHandler,
    errorCB,
  };
}
