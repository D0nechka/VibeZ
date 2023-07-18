import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios } from 'src/app/api/axios';
import { Notification } from './types';

export const getNotification = createAsyncThunk(
    'notification/get',
    async (id: number) => {
        try {
            const response = await $axios<Notification[]>('notifications', {
                params: {
                    read: false,
                    userId: id,
                },
            });

            return response.data;
        } catch (error) {
            console.error('Ошибка при получении уведомления:', error);
            throw error;
        }
    }
);