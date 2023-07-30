import { Button, Input, LoginIcon, Logo, Text, TextType } from 'src/shared/ui';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { changeRegEmail,changeRegRepeatPassword, changeRegPassword, changeRegError } from '../model/slice/RegSlice';
import { getRegEmail, getRegError, getRegPassword, getRegRepeatPassword } from '../model/selectors/selectors';
import { registrationUser } from 'src/app/services/registrationUser';
import { useAsyncLoading } from 'src/app/hooks/useAsyncLoading';
import { USER_ID_KEY } from 'src/shared/const/localStorage';
import { addNotificationService } from 'src/app/services/addNotification';
import cls from './style.module.scss';

export const RegForm = () => {
    const dispatch = useAppDispatch();

    const email = useAppSelector(getRegEmail);
    const password = useAppSelector(getRegPassword);
    const repeatPassword = useAppSelector(getRegRepeatPassword);
    const regError = useAppSelector(getRegError);

    const { isLoading, resultFunc, error, } = useAsyncLoading(registrationUser);

    const changeEmail = (value: string) => dispatch(changeRegEmail(value));
    const changeRepeatPassword = (value: string) => dispatch(changeRegRepeatPassword(value));
    const changePassword = (value: string) => dispatch(changeRegPassword(value));

    const handleRegistration = async () => {
        dispatch(changeRegError(''));

        if(password !== repeatPassword){
            return dispatch(changeRegError('Пароли не совпадают'));
        }

        const data = await resultFunc(email, password);

        if(typeof data !== 'string') {
            const { user, } = data;

            localStorage.setItem(USER_ID_KEY, String(user.id));
            addNotificationService('Вы успешно зарегистрировались', user.id);
            window.location.reload();
        }
    };

    return (
        <div className={cls.form}>
            <Logo className={cls.logo} />
            <Text className={cls.title}>Регистрация в приложении</Text>
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
            <Input
                placeholder='Подтвердите ваш пароль'
                labelText='Подтверждение пароля'
                classNameContainer={cls.inputContainerPassword}
                className={cls.input}
                isPassword
                value={repeatPassword}
                onChange={changeRepeatPassword}
            />
            <Button
                className={cls.btnReg}
                onClick={handleRegistration}
                disabled={isLoading}
            >
                <div className={cls.btnContent}>
                    <Text type={TextType.WHITE}>Зарегистрироваться</Text>
                    <LoginIcon />
                </div>
            </Button>
            {!!error.length && <Text className={cls.error}>{error}</Text>}
            {!!regError.length && <Text className={cls.error}>{regError}</Text>}
        </div>
    );
};