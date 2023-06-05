import { FC } from 'react';
import { Button, ButtonVariant } from '../Button/Button';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './style.module.scss';

export enum ToggleVariant {
    PRIMARY = 'primary',
    HOVER = 'hover'
}

export enum ToggleSize {
    S = 's',
    M = 'm',
    L = 'l',
}

interface ToggleProps {
    isActive: boolean;
    disabled?: boolean;
    changeActive: () => void;
    className?: string;
    variant?: ToggleVariant;
    size?: ToggleSize;
}

export const Toggle: FC<ToggleProps> = (props) => {
    const {
        className,
        isActive,
        disabled = false,
        changeActive,
        variant = ToggleVariant.PRIMARY,
        size = ToggleSize.M,
    } = props;

    return (
        <Button
            variant={ButtonVariant.NOLINE}
            onClick={changeActive}
            disabled={disabled}
            className={classNames(cls.toggle, { [cls.active]: isActive, }, [ className, cls[size] ])}
        >
            <div className={classNames(cls.circle, { [cls.circleActive]: isActive, }, [ cls[variant] ])} />
        </Button>
    );
};