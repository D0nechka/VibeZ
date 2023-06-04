import React, { FC, useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Text, TextSize, TextType } from '../Text/Text';
import { ClosedEyeIcon, EyeIcon } from '../icons';
import cls from './style.module.scss';

export enum InputSize {
    S = 's',
    M = 'm',
    L = 'l'
}

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>

interface InputProps extends HTMLInputProps {
    isPassword?: boolean
    size?: InputSize;
    labelSize?: TextSize;
    labelType?: TextType;
    labelText?: string;
    onChange?: (value: string) => void;
    className?: string;
    Icon?: FC;
}

export const Input = (props:InputProps) => {
    const {
        size = InputSize.M,
        labelText,
        onChange,
        className,
        isPassword = false,
        labelSize,
        labelType,
        Icon,
        ...otherProps
    } = props;

    const [ type, setType ] = useState('password');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, } = e.target;
        onChange?.(value);
    };

    const handleChangeType = () => {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    };

    const isHide = type === 'password';

    return (
        <div className = {classNames(cls.container)}>
            <Text
                size={labelSize}
                type={labelType}
            >
                {labelText}
            </Text>
            <div className={cls.inputContainer}>
                <input
                    onChange={onChangeHandler}
                    type={type}
                    className={classNames(
                        cls.input,
                        { [cls.padding]: Boolean(isPassword || Icon), },
                        [ cls[size], className ]
                    )}
                    {...otherProps}
                />
                <div className={cls.iconContainer}>
                    <button
                        onClick={handleChangeType}
                    >
                        {isPassword ? !isHide ? <EyeIcon/> : <ClosedEyeIcon/> : Icon && <Icon />}

                    </button>
                </div>
            </div>
        </div>
    );
};