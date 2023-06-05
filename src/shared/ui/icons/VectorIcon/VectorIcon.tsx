import { FC } from 'react';
import { IconProps } from 'src/shared/types/props/IconProps';

export const VectotIcon: FC<IconProps> = ({ className, }) => {
    {/* eslint-disable */}
    return(
        <svg className={className} width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L4.5 10L11.5 1" stroke="white"/>
        </svg>
    );
};