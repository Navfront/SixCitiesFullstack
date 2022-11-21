import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { RootState } from '../store';
import { RespError } from './login-thunk';
import { toast } from 'react-toastify';
import { api } from './../store';
import { setCurrentCity } from '../reducers/app-slice';

export interface RespData {
  data: any;
}

export const setCurrentCityFetch = (cityId: string) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const response = await api.getCityById(cityId);
      console.log(response.data);
      dispatch(setCurrentCity(response.data));
    } catch (error) {
      const err = error as RespError;
      toast(err.response.data.message);
    }
  };
};
