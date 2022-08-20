import { FormEvent } from 'react';
import { useAppDispatch } from './../redux/redux-hooks';
import { fetchLoginIn } from './../redux/thunks/login-thunk';
import { useNavigate } from 'react-router-dom';

interface UseSubmitReturn {
  onSubmitHandler: (evt: FormEvent<HTMLFormElement>) => void;
}

export default function useSubmit(
  formElement: React.RefObject<HTMLFormElement>
): UseSubmitReturn {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (formElement.current != null) {
      const data = new FormData(formElement.current);
      const iterator = data.entries();
      const obj: any = {};
      data.forEach(() => {
        const [key, value] = iterator.next().value as [string, string];
        obj[key] = value;
      });
      void dispatch(fetchLoginIn(obj));
      navigate(-1);
    }
  };

  return {
    onSubmitHandler,
  };
}
