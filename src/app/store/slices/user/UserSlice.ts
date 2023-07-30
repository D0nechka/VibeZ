import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { RootState } from '../..';

const initialState: InitialState = {
    id: null,
    email: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<InitialState>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
    },
});

export const userReducer = userSlice.reducer;

export const { authUser, } = userSlice.actions;

export const getUserId = (state: RootState) => state.user.id;
export const getUserEmail = (state: RootState) => state.user.email;