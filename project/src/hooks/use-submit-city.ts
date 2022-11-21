import { FormEvent } from 'react';
import { UseSubmitReturn } from './use-submit';
import { useAppDispatch } from './../redux/redux-hooks';
import { createCityThunk } from '../redux/thunks/create-city-thunk';

interface InputString {
  value: string;
}
interface InputNumber {
  value: number;
}

interface CreateCityForm {
  name: InputString;
  latitude: InputNumber;
  longitude: InputNumber;
  zoom: InputNumber;
}

export default function useSubmitCity(): UseSubmitReturn {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.target as EventTarget & CreateCityForm;
    const response = {
      name: form.name.value,
      location: {
        latitude: form.latitude.value,
        longitude: form.longitude.value,
        zoom: form.zoom.value,
      },
    };
    void dispatch(createCityThunk(response));
  };

  return { onSubmitHandler };
}
