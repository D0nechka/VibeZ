import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Text, TextSize, TextType } from '../Text/Text';
import cls from './style.module.scss';

export enum TooltipVariant {
    RIGHT = 'right',
    TOP = 'top',
}

interface TooltipProps {
    className?: string;
    variant?: TooltipVariant;
    children: ReactNode;
    text: string;
    sizeText?: TextSize,
    typeText?: TextType,
    classNameText?: string;
}

export const Tooltip: FC<TooltipProps> = (props) => {
    const {
        className,
        variant = TooltipVariant.TOP,
        text,
        children,
        sizeText,
        typeText,
        classNameText = '',
    } = props;

    const [ isHover, setIsHover ] = useState(true);
    const [ height, setHeight ] = useState(0);
    const [ width, setWidth ] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    useEffect(() => {
        if (ref?.current) {
            setHeight(ref.current.clientHeight);
            setWidth(ref.current.clientWidth);
        }
    });

    return (
        <>
            <div
                className={classNames(cls.wrapper, { [cls.wrapperRight]: variant === TooltipVariant.RIGHT, })}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {
                    isHover && (
                        <div
                            className={classNames(cls.tooltip, {}, [ cls[variant], className ])}
                            ref={ref}
                            style={
                                variant === TooltipVariant.TOP
                                    ? { top: `-${height + 10}px`, }
                                    : { right: `-${width + 10}px`, }
                            }
                        >
                            <Text
                                type={typeText}
                                size={sizeText}
                                className={classNames(classNameText, {}, [ cls.text ])}
                            >{text}</Text>
                        </div>
                    )
                }
                {children}
            </div>
        </>
    );
};