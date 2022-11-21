import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { RootState, api } from '../store';
import { RespError } from './login-thunk';
import { toast } from 'react-toastify';
import { CreateHotel } from '../../api/service-api';
import { updateHotel } from '../reducers/hotel-slice';

interface RespData {
  data: {
    title: string;
    message: string;
  };
}

export const createHotelThunk = (body: CreateHotel) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const response = (await api.postHotel(body)) as RespData;
      dispatch(updateHotel(response.data));
      toast(`Поздравляю! Отель ${response.data.title} создан!`);
    } catch (error) {
      const err = error as RespError;
      toast(err.response.data.message);
    }
  };
};
