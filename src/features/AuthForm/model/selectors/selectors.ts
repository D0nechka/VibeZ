import { RootState } from 'src/app/store';

export const getAuthEmail = (state: RootState) => state.auth.email;
export const getAuthPassword = (state: RootState) => state.auth.password;