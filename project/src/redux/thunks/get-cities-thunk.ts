import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { addCities } from '../reducers/city-slice';
import { RootState } from '../store';
import { RespError } from './login-thunk';
import { toast } from 'react-toastify';

export interface RespData {
  data: any;
}

export const fetchGetCities = () => {
  return async (
    dispatch: Dispatch<Action>,
    getState: () => RootState,
    extraArgument: any
  ) => {
    const { serviceApi } = extraArgument;
    try {
      const response = await serviceApi.getCities();
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (response.data) {
        console.log('ddddptch');
        dispatch(addCities({ cities: response.data }));
      }
    } catch (error) {
      const err = error as RespError;
      toast(err.response.data.message);
    }
  };
};
