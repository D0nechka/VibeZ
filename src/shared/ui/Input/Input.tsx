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

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    isPassword?: boolean
    size?: InputSize;
    labelSize?: TextSize;
    labelType?: TextType;
    labelText?: string;
    onChange?: (value: string) => void;
    className?: string;
    classNameContainer?: string;
    Icon?: FC;
}

export const Input: FC<InputProps> = (props) => {
    const {
        size = InputSize.M,
        labelText,
        onChange,
        className,
        isPassword = false,
        labelSize,
        labelType,
        Icon,
        classNameContainer,
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
        <div className = {classNames(cls.container, {}, [ classNameContainer ])}>
            <Text
                size={labelSize}
                type={labelType}
            >
                {labelText}
            </Text>
            <div className={cls.inputContainer}>
                <input
                    onChange={onChangeHandler}
                    type={isPassword ? type : otherProps.type}
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
                        {isPassword ? !isHide ? <ClosedEyeIcon /> : <EyeIcon /> : Icon && <Icon />}
                    </button>
                </div>
            </div>
        </div>
    );
};