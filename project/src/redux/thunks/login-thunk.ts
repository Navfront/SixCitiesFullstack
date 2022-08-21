import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { changeState } from '../reducers/auth-slice';
import { RootState } from '../store';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

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
      if (response.data.token.length > 0) {
        Cookies.set('token', response.data.token, {
          expires: (1 / 24 / 60) * 5, // 5 min
        });
        dispatch(
          changeState({
            isAuth: true,
            isAdmin: false,
            token: response.data.token,
          })
        );
      }
    } catch (_e) {
      console.log(_e);

      const result = _e as RespError;
      toast(result?.response.data.message);
    }
  };
};
