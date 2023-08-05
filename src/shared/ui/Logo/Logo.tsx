import { FC } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './style.module.scss';

interface LogoProps {
    text?: string;
    className?: string;
}

export const Logo: FC<LogoProps> = ({
    text,
    className,
}) => {
    return (
        <div className={classNames(cls.logo, {}, [ className ])} data-testid="logo">
            <span
                className={cls.logoText}
            >{text?.length ? text : '</> | VIBEZ'}</span>
        </div>
    );
};