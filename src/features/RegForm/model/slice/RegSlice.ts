import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types/state';

const initialState: InitialState = {
    email: '',
    password: '',
    repeatPassword: '',
    error: '',
};

export const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        changeRegPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changeRegRepeatPassword: (state, action: PayloadAction<string>) => {
            state.repeatPassword = action.payload;
        },
        changeRegEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changeRegError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const regReducer = regSlice.reducer;

export const {
    changeRegPassword,
    changeRegRepeatPassword,
    changeRegEmail,
    changeRegError,
} = regSlice.actions;