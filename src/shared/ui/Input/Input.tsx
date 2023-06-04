import React, { FC, useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Text, TextSize, TextType } from '../Text/Text';
import cls from './style.module.scss';
import { ClosedEyeIcon, EyeIcon } from '../icons';

export enum InputSize {
    S = 's',
    M = 'm',
    L = 'l'
}

interface InputProps {
    isPassword?: boolean
    size?: InputSize;
    labelSize?: TextSize;
    labelType?: TextType;
    labelText?: string;
    onChange?: (value: string) => void;
    className?: string;
    placeholder?: string;
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
        placeholder,
        Icon,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, } = e.target;
        onChange?.(value);
    };

    const [ type, setType ] = useState('');
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
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    type={type}
                    className={classNames(
                        cls.input,
                        { [cls.padding]: Boolean(isPassword || Icon), },
                        [ cls[size], className ]
                    )}
                />
                <div className={cls.iconContainer}>
                    <button
                        onClick={() => {
                            if(type === 'password') {
                                setType('');
                            }else
                            {
                                setType('password');
                            }
                        }}
                    >
                        {isPassword ? !isHide ? <EyeIcon/> : <ClosedEyeIcon/> : Icon && <Icon />}

                    </button>
                </div>
            </div>
        </div>
    );
};