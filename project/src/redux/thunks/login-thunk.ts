import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { changeState } from '../reducers/auth-slice';
import { RootState } from '../store';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { api } from './../store';

const EXP_TIME = (1 / 24 / 60) * 5; // 5 min

export type RespError = Error & {
  response: {
    data: {
      message: string;
    };
  };
};

export const fetchLoginIn = (formData: any) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const response = await api.loginIn(formData);
      console.log(response.data);
      if (response.data.token.length > 0) {
        Cookies.set('token', response.data.token, {
          expires: EXP_TIME,
        });
        Cookies.set('username', response.data.username, {
          expires: EXP_TIME,
        });
        Cookies.set('role', response.data.role, {
          expires: EXP_TIME,
        });
        Cookies.set('email', response.data.email, {
          expires: EXP_TIME,
        });
        dispatch(
          changeState({
            isAuth: true,
            isAdmin: response.data.role === 'admin',
            userId: response.data.userId,
            token: response.data.token,
            username: response.data.username,
            email: response.data.email,
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
