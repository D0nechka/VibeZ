import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/features/AuthForm';
import { regReducer } from 'src/features/RegForm';

export const rootReducer = combineReducers({
    auth: authReducer,
    reg: regReducer,
});