import { FormEvent } from 'react';
import { useAppDispatch } from './../redux/redux-hooks';
import { fetchLoginIn } from './../redux/thunks/login-thunk';
import { useLocation, useNavigate } from 'react-router-dom';

interface UseSubmitReturn {
  onSubmitHandler: (evt: FormEvent<HTMLFormElement>) => void;
}

export default function useSubmit(
  formElement: React.RefObject<HTMLFormElement>
): UseSubmitReturn {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loc = useLocation().state as { from: { pathname: string } };
  const from = loc?.from?.pathname ?? '/';

  const onSubmitHandler = async (
    evt: FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
      // ---------fckgtimeout---------
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          navigate(from, { replace: true });
        }, 300);
      });
      // ---------fckgtimeout---------
    }
  };

  return {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    onSubmitHandler,
  };
}
