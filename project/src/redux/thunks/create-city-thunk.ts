import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { RootState } from '../store';
import { RespError } from './login-thunk';
import { toast } from 'react-toastify';
import { CreateCity } from '../../api/service-api';
import { api } from './../store';
import { updateCities } from '../reducers/city-slice';

interface RespData {
  data: {
    name: string;
    message: string;
  };
}

export const createCityThunk = (body: CreateCity) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const response = (await api.postCity(body)) as RespData;
      dispatch(updateCities(response.data));
      toast(`Поздравляю! Город ${response.data.name} создан!`);
    } catch (error) {
      const err = error as RespError;
      toast(err.response.data.message);
    }
  };
};
