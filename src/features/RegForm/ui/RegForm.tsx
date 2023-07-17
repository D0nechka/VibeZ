import { Button, Input, LoginIcon, Logo, Text, TextType } from 'src/shared/ui';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { changeRegEmail,changeRegRepeatPassword, changeRegPassword } from '../model/slice/RegSlice';
import { getRegEmail, getRegPassword, getRegRepeatPassword } from '../model/selectors/selectors';
import cls from './style.module.scss';

export const RegForm = () => {
    const dispatch = useAppDispatch();

    const email = useAppSelector(getRegEmail);
    const password = useAppSelector(getRegPassword);
    const repeatPassword = useAppSelector(getRegRepeatPassword);

    const changeEmail = (value: string) => dispatch(changeRegEmail(value));
    const changeRepeatPassword = (value: string) => dispatch(changeRegRepeatPassword(value));
    const changePassword = (value: string) => dispatch(changeRegPassword(value));

    return (
        <div className={cls.form}>
            <Logo className={cls.logo} />
            <Text className={cls.title}>Регистрация в приложении</Text>
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
            <Input
                placeholder='Подтвердите ваш пароль'
                labelText='Repeat password'
                classNameContainer={cls.inputContainerPassword}
                className={cls.input}
                isPassword
                value={repeatPassword}
                onChange={changeRepeatPassword}
            />
            <Button className={cls.btnReg}>
                <div className={cls.btnContent}>
                    <Text type={TextType.WHITE}>Зарегистрироваться</Text>
                    <LoginIcon />
                </div>
            </Button>
        </div>
    );
};