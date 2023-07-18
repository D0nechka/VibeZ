import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { RootState } from '../..';

const initialState: InitialState = {
    id: null,
    role: null,
};

export const userSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<InitialState>) => {
            state.id = action.payload.id;
            state.role = action.payload.role;
        },
    },
});

export const userReducer = userSlice.reducer;

export const { authUser, } = userSlice.actions;

export const getUserId = (state: RootState) => state.user.id;
export const getUserRole = (state: RootState) => state.user.role;