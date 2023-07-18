import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/features/AuthForm';
import { regReducer } from 'src/features/RegForm';
import { notificationReducer } from './notification/NotificationSlice';
import { userReducer } from './user/UserSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
    notification: notificationReducer,
    user: userReducer,
});