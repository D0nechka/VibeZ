import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, Notification } from './types';
import { getNotification } from './getNotifications';
import { RootState } from '../..';

const initialState: InitialState = {
    notifications: [],
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Notification>) => {
            state.notifications.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getNotification.fulfilled, (state, action) => {
            state.notifications = action.payload;
        });
    },
});

export const notificationReducer = notificationSlice.reducer;

export const { addNotification, } = notificationSlice.actions;

export const selectorGetNotifications = (state: RootState) => state.notification.notifications;