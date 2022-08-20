import { ChangeEvent, useState } from 'react';

export default function useValidate(
  type: string = 'text',
  placeholder: string = ''
): {
  value: string;
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
} {
  const [value, setValue] = useState(placeholder);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value);
  };

  return {
    value,
    onChangeHandler,
  };
}
