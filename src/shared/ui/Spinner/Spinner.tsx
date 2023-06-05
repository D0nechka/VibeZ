import { FC } from 'react';
import cls from './style.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface SpinnerProps {
    className?: string;
    size?: number;
}

export const Spinner: FC<SpinnerProps> = (props) => {
    const { className, size, } = props;

    return (
        <div
            className={classNames(cls.spinner, {}, [ className ])}
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
        ></div>
    );
};