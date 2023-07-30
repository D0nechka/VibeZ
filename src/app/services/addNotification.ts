import { $axios } from '../api/axios';

export const addNotificationService = async (text: string, userId: number) => {
    try {
        await $axios.post('notifications', {
            read: false,
            text,
            userId,
        });
    } catch(e) {
        return e;
    }
};