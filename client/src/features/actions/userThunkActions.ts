import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UserFromBackand, UserLoginForm, UserSubmitForm } from '../../types';


export const checkUserActionThunk = createAsyncThunk<UserFromBackand>(
  'user/check',
  async () =>
    axios<UserFromBackand>('/api/auth/check')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

export const signUpUserActionThunk = createAsyncThunk<
  UserFromBackand,
  UserSubmitForm
>('user/signup', async (data) =>
  axios
    .post<UserFromBackand>('/api/auth/signup', data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);

export const signInUserActionThunk = createAsyncThunk<
  UserFromBackand,
  UserLoginForm
>('user/signin', async (data) =>
  axios
    .post<UserFromBackand>('/api/auth/signin', data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);

export const logouUserActionThunk = createAsyncThunk('user/logout', async () =>
  axios
    .post('/api/auth/logout')
    .then(() => null)
    .catch(() => {
      throw new Error('err');
    }),
);
