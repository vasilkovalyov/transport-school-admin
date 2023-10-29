import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminType } from '../types/admin';

export const defaultAdminState: AdminType = {
  _id: '',
  login: '',
  token: '',
};

export type AdminAuthStateType = {
  admin: AdminType;
  isAuth: boolean;
  loading: boolean;
  error?: string | null;
};

const initialState: AdminAuthStateType = {
  admin: defaultAdminState,
  isAuth: false,
  loading: false,
  error: null,
};

export const adminAuthSlice = createSlice({
  name: 'adminAuthSlice',
  initialState,
  reducers: {
    saveAdmin: (
      state: AdminAuthStateType,
      action: PayloadAction<AdminType>
    ) => {
      state.admin = {
        ...state.admin,
        ...action.payload,
      };
      state.isAuth = true;
    },
    removeAdmin: (state: AdminAuthStateType) => {
      (state.admin = defaultAdminState), (state.isAuth = false);
    },
  },
});

export const { saveAdmin, removeAdmin } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
