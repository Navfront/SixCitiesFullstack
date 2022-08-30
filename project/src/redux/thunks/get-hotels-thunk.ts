import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { RootState } from '../store';
import { RespError } from './login-thunk';
import { toast } from 'react-toastify';
import { api } from './../store';
import { addHotels } from '../reducers/hotel-slice';

export interface RespData {
  data: any;
}

export const fetchGetHotels = (cityId: string) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const response = await api.getHotelsByCityId(cityId);
      console.log(response.data);

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (response.data) {
        dispatch(addHotels(response.data));
      }
    } catch (error) {
      const err = error as RespError;
      toast(err.response.data.message);
    }
  };
};
