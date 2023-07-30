import { AxiosError } from 'axios';
import { $axios } from '../api/axios';

export interface ResultCheckAuth {
    id: number;
    email: string;
}

export const checkAuthService = async (
    id: string
): Promise<ResultCheckAuth | string> => {
    try {
        const response = await $axios.get<ResultCheckAuth[]>('users', {
            params: {
                id,
            },
        });

        return response.data[0];
    } catch (e) {
        const error = e as AxiosError<string>;

        return error.response?.data ?? 'Ошибка проверки пользователей';
    }
};