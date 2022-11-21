/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent } from 'react';
import { UseSubmitReturn } from './use-submit';
import { useAppDispatch } from './../redux/redux-hooks';
import { createHotelThunk } from '../redux/thunks/create-hotel-thunk';

interface InputString {
  value: string;
}
interface InputNumber {
  value: number;
}

interface CreateHotelForm {
  city: InputString;
  description: InputString;
  bedrooms: InputNumber;
  goods: InputString;
  host: InputString;
  images: InputString;
  is_premium: InputString;
  latitude: InputNumber;
  longitude: InputNumber;
  max_adults: InputNumber;
  preview_image: InputString;
  price: InputNumber;
  rating: InputNumber;
  title: InputString;
  type: InputString;
}

const isChecked = (str: string): boolean => {
  switch (str) {
    case 'on':
      return true;
    default:
      return false;
  }
};

export default function useSubmitHotel(): UseSubmitReturn {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.target as EventTarget & CreateHotelForm;
    console.log(form.is_premium.value);

    const response = {
      city: form.city.value,
      bedrooms: Number(form.bedrooms.value),
      goods: form.goods.value.split(','),
      description: form.description.value,
      host: form.host.value,
      images: form.images.value.split(','),
      is_premium: isChecked(form.is_premium.value),
      is_favorite: false,
      location: {
        latitude: Number(form.latitude.value),
        longitude: Number(form.longitude.value),
        zoom: 13,
      },
      max_adults: Number(form.max_adults.value),
      preview_image: form.preview_image.value,
      price: Number(form.price.value),
      rating: Number(form.rating.value),
      title: form.title.value,
      type: form.type.value,
    };
    console.log(response);

    void dispatch(createHotelThunk(response));
  };

  return { onSubmitHandler };
}
