import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types/state';

const initialState: InitialState = {
    email: '',
    password: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuthPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changeAuthEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const authReducer = authSlice.reducer;

export const { changeAuthEmail, changeAuthPassword, } = authSlice.actions;