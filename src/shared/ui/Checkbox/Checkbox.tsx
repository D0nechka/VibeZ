import { FC } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { VectotIcon } from '../icons';
import cls from './style.module.scss';

export enum CheckboxSize {
    S = 's',
    M = 'm',
    L = 'l'
}

interface CheckboxProps {
    isChecked: boolean;
    disabled?: boolean;
    className?: string;
    size?: CheckboxSize;
    onChange: () => void,
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const {
        size = CheckboxSize.M,
        isChecked,
        disabled = false,
        className,
        onChange,
    } = props;

    return (
        <button
            disabled={disabled}
            onClick={onChange}
            className={classNames(cls.checkbox, { [cls.active]: isChecked, }, [ className, cls[size] ])}
        >
            {isChecked && <VectotIcon />}
        </button>
    );
};