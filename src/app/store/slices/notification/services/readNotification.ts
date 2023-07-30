import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios } from 'src/app/api/axios';
import { Notification } from '../types';

export const readNotification = createAsyncThunk(
    'notification/put',
    async (notificationId: number) => {
        try {
            const response = await $axios.put<Notification>(`notifications/${notificationId}`, {
                read: true,
            });

            return response.data;
        } catch (error) {
            console.error(`Ошибка при изменении уведомления с ID ${notificationId}:`, error);
            throw error;
        }
    }
);