import { AxiosError } from 'axios';
import { $axios } from '../api/axios';

export interface ResultLoginUser {
    user: {
        id: number;
        email: string;
    }
    accessToken: string;
}

export const loginUser = async (
    email: string,
    password: string
): Promise<ResultLoginUser | string> => {
    try {
        const response = await $axios.post<ResultLoginUser>('login', {
            email,
            password,
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError<string>;

        return error.response?.data ?? 'Ошибка авторизации, попробуйте позже.';
    }
};