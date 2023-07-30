import { FC, useEffect, useState } from 'react';
import { Button, ButtonVariant, CloseSquareIcon, Text } from 'src/shared/ui';
import { useAppDispatch } from 'src/app/hooks/redux';
import { readNotification } from 'src/app/store/slices/notification/services/readNotification';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './style.module.scss';

interface NotificationProps {
    text: string;
    id: number;
    refAudio: React.RefObject<HTMLAudioElement>;
    hasInteracted: boolean;
}

export const Notification: FC<NotificationProps> = ({
    text,
    id,
    refAudio,
    hasInteracted,
}) => {
    const dispatch = useAppDispatch();
    const [ isLoading, setIsLoading ] = useState(false);

    const playNotificationSound = async () => {
        if(hasInteracted) {
            if(refAudio.current) {
                refAudio.current.play();
            }
        }
        setIsLoading(true);
    };

    const handleReadNotification = () => {
        setIsLoading(false);
        dispatch(readNotification(id));
    };

    const handleBeforeUnload = () => {
        handleReadNotification();
    };

    useEffect(() => {
        playNotificationSound();
        window.addEventListener('beforeunload', handleBeforeUnload);

        const timeout = setTimeout(() => {
            handleReadNotification();
        }, 5000);

        return () => {
            handleReadNotification();
            clearTimeout(timeout);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div className={classNames(cls.notification, { [cls.notificationOpen]: isLoading, })}>
            <Button
                variant={ButtonVariant.NOLINE}
                className={cls.close}
                onClick={handleReadNotification}
            >
                <CloseSquareIcon />
            </Button>
            <Text>{text}</Text>
        </div>
    );
};