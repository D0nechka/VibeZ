import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types/state';

const initialState: InitialState = {
    email: '',
    password: '',
    repeatPassword: '',
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
    },
});

export const regReducer = regSlice.reducer;

export const {
    changeRegPassword,
    changeRegRepeatPassword,
    changeRegEmail,
} = regSlice.actions;