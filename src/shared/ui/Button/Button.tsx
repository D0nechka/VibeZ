import React, { FC, ReactNode } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './style.module.scss';

export enum ButtonSize {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l'
}

export enum ButtonPosition {
    CENTER ='center',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    NOLINE = 'noline'
}

type ButtonProps = {
    children?: ReactNode;
    text?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    className?: string,
    position?: ButtonPosition,
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        text,
        size = ButtonSize.M,
        variant = ButtonVariant.PRIMARY,
        className,
        position = ButtonPosition.CENTER,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {}, [ className, cls[size], cls[variant], cls[position] ])}
            {...otherProps}
        >
            {children || text}
        </button>
    );
};