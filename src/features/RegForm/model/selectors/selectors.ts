import { RootState } from 'src/app/store';

export const getRegEmail = (state: RootState) => state.reg.email;
export const getRegPassword = (state: RootState) => state.reg.password;
export const getRegRepeatPassword = (state: RootState) => state.reg.repeatPassword;
export const getRegError = (state: RootState) => state.reg.error;