import { Button, Input, LoginIcon, Logo, Text, TextType } from 'src/shared/ui';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { getAuthEmail, getAuthPassword } from '../model/selectors/selectors';
import { changeAuthEmail, changeAuthPassword } from '../model/slice/AuthSlice';
import { useAsyncLoading } from 'src/app/hooks/useAsyncLoading';
import { loginUser } from 'src/app/services/loginUser';
import { FC } from 'react';
import { addNotificationService } from 'src/app/services/addNotification';
import { USER_ID_KEY } from 'src/shared/const/localStorage';
import cls from './style.module.scss';

export const AuthForm: FC = () => {
    const dispatch = useAppDispatch();
    const { isLoading, resultFunc, error, } = useAsyncLoading(loginUser);

    const email = useAppSelector(getAuthEmail);
    const password = useAppSelector(getAuthPassword);

    const changePassword = (value: string) => dispatch(changeAuthPassword(value));
    const changeEmail = (value: string) => dispatch(changeAuthEmail(value));

    const handleLogin = async () => {
        const data = await resultFunc(email, password);

        if(typeof data !== 'string') {
            const { user, } = data;

            localStorage.setItem(USER_ID_KEY, String(user.id));
            addNotificationService('Вы успешно авторизовались', user.id);
            window.location.reload();
        }
    };

    return (
        <div className={cls.form}>
            <Logo className={cls.logo} />
            <Text className={cls.title}>Вход в приложение</Text>
            <Input
                placeholder='Введите вашу почту'
                labelText='Почта'
                classNameContainer={cls.inputContainerEmail}
                className={cls.input}
                value={email}
                onChange={changeEmail}
            />
            <Input
                placeholder='Введите ваш пароль'
                labelText='Пароль'
                classNameContainer={cls.inputContainerPassword}
                className={cls.input}
                isPassword
                value={password}
                onChange={changePassword}
            />
            <Button
                className={cls.btnAuth}
                onClick={handleLogin}
                disabled={isLoading}
            >
                <div className={cls.btnContent}>
                    <Text type={TextType.WHITE}>Войти</Text>
                    <LoginIcon />
                </div>
            </Button>
            {!!error.length && <Text className={cls.error}>{error}</Text>}
        </div>
    );
};