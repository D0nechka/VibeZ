import { FC, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, } = props;

    return (
        <button>

        </button>
    );
};