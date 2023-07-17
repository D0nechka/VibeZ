import React, { FC, useState } from 'react';
import { Button, ButtonVariant, Text } from 'src/shared/ui';

interface ContentChangerProps {
    btnTextFirst: string;
    btnTextSecond: string;
    className?: string;
    btnClassName?: string;
    firstText: string;
    secondText: string;
    FirstComponent: React.FC;
    SecondComponent: React.FC;
}

export const ContentChanger: FC<ContentChangerProps> = ({
    btnTextFirst,
    btnTextSecond,
    className,
    btnClassName,
    firstText,
    secondText,
    FirstComponent,
    SecondComponent,
}) => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <>
            {isActive ? <FirstComponent /> : <SecondComponent />}
            <div className={className}>
                <Text>{isActive ? firstText : secondText}</Text>
                <Button
                    variant={ButtonVariant.NOLINE}
                    onClick={() => setIsActive((prev) => !prev)}
                    className={btnClassName}
                >
                    {isActive ? btnTextFirst : btnTextSecond}
                </Button>
            </div>
        </>
    );
};