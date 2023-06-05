import { FC, ReactNode } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './style.module.scss';

export enum TextSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl'
}

export enum TextType {
    PRIMARY = 'primary',
    BOLD = 'bold',
    GRAY = 'gray',
    WHITE = 'white',
    BLUE = 'blue',
    GREEN = 'green'
}

interface TextProps {
    size?: TextSize,
    type?: TextType,
    className?: string,
    children: ReactNode
}

export const Text: FC<TextProps> = (props) => {
    const {
        size = TextSize.M,
        type = TextType.PRIMARY,
        className,
        children,
    } = props;

    return (
        <span className={classNames(cls.text, {}, [ className, cls[type], cls[size] ])}>
            {children}
        </span>
    );
};