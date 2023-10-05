import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdmin } from '../types/admin';

export const defaultAdminState: IAdmin = {
  _id: '',
  login: '',
  token: '',
};

export interface IAdminAuthState {
  admin: IAdmin;
  isAuth: boolean;
  loading: boolean;
  error?: string | null;
}

const initialState: IAdminAuthState = {
  admin: defaultAdminState,
  isAuth: false,
  loading: false,
  error: null,
};

export const adminAuthSlice = createSlice({
  name: 'adminAuthSlice',
  initialState,
  reducers: {
    saveAdmin: (state: IAdminAuthState, action: PayloadAction<IAdmin>) => {
      state.admin = {
        ...state.admin,
        ...action.payload,
      };
      state.isAuth = true;
    },
    removeAdmin: (state: IAdminAuthState) => {
      (state.admin = defaultAdminState), (state.isAuth = false);
    },
  },
});

export const { saveAdmin, removeAdmin } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
