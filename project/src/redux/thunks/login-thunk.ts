import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { changeToken } from '../reducers/authSlice';
import { RootState } from '../store';

export type RespError = Error & {
  response: {
    data: {
      message: string;
    };
  };
};

export const fetchLoginIn = (formData: any) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: () => RootState,
    extraArgument: any
  ) => {
    const { serviceApi } = extraArgument;
    try {
      const response = await serviceApi.loginIn(formData);
      console.log(response.data);
      if (response?.data?.token.length > 0) {
        dispatch(changeToken({ token: response.data.token }));
      }
    } catch (_e) {
      const result = _e as RespError;
      console.log(result?.response.data.message);
    }
  };
};
