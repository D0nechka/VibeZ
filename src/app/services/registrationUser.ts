import { AxiosError } from 'axios';
import { $axios } from '../api/axios';

export interface ResultRegistrationUser {
    user: {
        id: number;
        email: string;
    }
    accessToken: string;
}

export const registrationUser = async (
    email: string,
    password: string
): Promise<ResultRegistrationUser | string> => {
    try {
        const response = await $axios.post<ResultRegistrationUser>('register', {
            email,
            password,
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError<string>;

        return error.response?.data ?? 'Ошибка регистрации, попробуйте позже.';
    }
};