import { Button, Input, LoginIcon, Logo, Text, TextType } from 'src/shared/ui';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { getAuthEmail, getAuthPassword } from '../model/selectors/selectors';
import { changeAuthEmail, changeAuthPassword } from '../model/slice/AuthSlice';
import { FC } from 'react';
import cls from './style.module.scss';

export const AuthForm: FC = () => {
    const dispatch = useAppDispatch();

    const email = useAppSelector(getAuthEmail);
    const password = useAppSelector(getAuthPassword);

    const changePassword = (value: string) => dispatch(changeAuthPassword(value));
    const changeEmail = (value: string) => dispatch(changeAuthEmail(value));

    return (
        <div className={cls.form}>
            <Logo className={cls.logo} />
            <Text className={cls.title}>Вход в приложение</Text>
            <Input
                placeholder='Введите вашу почту'
                labelText='Email'
                classNameContainer={cls.inputContainerEmail}
                className={cls.input}
                value={email}
                onChange={changeEmail}
            />
            <Input
                placeholder='Введите ваш пароль'
                labelText='Password'
                classNameContainer={cls.inputContainerPassword}
                className={cls.input}
                isPassword
                value={password}
                onChange={changePassword}
            />
            <Button className={cls.btnAuth}>
                <div className={cls.btnContent}>
                    <Text type={TextType.WHITE}>Войти</Text>
                    <LoginIcon />
                </div>
            </Button>
        </div>
    );
};