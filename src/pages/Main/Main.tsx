import { Logo } from 'src/shared/ui';
import { AuthRegForm } from 'src/widgets/AuthRegForm/ui/AuthRegForm';
import { ThemeSwitcher } from 'src/widgets/ThemeSwitcher';
import { FC } from 'react';
import cls from './style.module.scss';

const Main: FC = () => {
    return(
        <div className={cls.main}>
            <div className={cls.header}>
                <div className={cls.headerWrapper}>
                    <Logo />
                    <ThemeSwitcher />
                </div>
            </div>
            <div className={cls.content}>
                <AuthRegForm />
            </div>
        </div>
    );
};

export default Main;