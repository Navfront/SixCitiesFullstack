import { FormEvent } from 'react';

interface UseSubmitReturn {
  onSubmitHandler: (evt: FormEvent<HTMLFormElement>) => void;
}

const fetchSubmit = async (obj: any): Promise<string | string[]> => {
  const result = await fetch('http://localhost:5500/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return await result.json();
};

export default function useSubmit(
  formElement: React.RefObject<HTMLFormElement>
): UseSubmitReturn {
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
      console.log('submiting', obj);
      fetchSubmit(obj)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  };

  return {
    onSubmitHandler,
  };
}
