import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/user';

export interface IUserAuthState {
  user: IUser;
  isAuth: boolean;
  loading: boolean;
  error?: string | null;
}

const initialState: IUserAuthState = {
  user: {
    email: '',
  },
  isAuth: false,
  loading: false,
  error: null,
};

export const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState,
  reducers: {},
});

export default userAuthSlice.reducer;
