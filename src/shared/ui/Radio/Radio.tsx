import { FC } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { VectotIcon } from '../icons';
import cls from './style.module.scss';

export enum RadioSize {
    S = 's',
    M = 'm',
    L = 'l'
}

interface RadioProps {
    size?: RadioSize,
    isChecked: boolean;
    disabled?: boolean;
    className?: string;
    onChange: () => void,
}

export const Radio: FC<RadioProps> = (props) => {
    const {
        size = RadioSize.M,
        isChecked,
        disabled,
        className,
        onChange,
    } = props;

    return (
        <button
            disabled={disabled}
            onClick={onChange}
            className={classNames(cls.radio, { [cls.active]: isChecked, }, [ className, cls[size] ])}
        >
            {isChecked && <VectotIcon />}
        </button>
    );
};