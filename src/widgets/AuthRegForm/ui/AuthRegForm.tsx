import { ContentChanger } from 'src/entities/ContentChanger/ContentChanger';
import { AuthForm } from 'src/features/AuthForm';
import { RegForm } from 'src/features/RegForm';
import { FC } from 'react';
import cls from './style.module.scss';

export const AuthRegForm: FC = () => {
    return (
        <ContentChanger
            firstText="У вас нет аккаунта в нашем приложении?"
            secondText='У вас уже есть аккаунт в нашем приложении?'
            FirstComponent={AuthForm}
            SecondComponent={RegForm}
            btnTextFirst="Зарегистрироваться"
            btnTextSecond='Войти'
            className={cls.contentChanger}
            btnClassName={cls.btnChange}
        />
    );
};
