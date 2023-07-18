import { FC, useEffect, useState } from 'react';
import { Button, ButtonVariant, CloseSquareIcon, Text } from 'src/shared/ui';
import { useAppDispatch } from 'src/app/hooks/redux';
import { readNotification } from 'src/app/store/slices/notification/readNotification';
import audioMp3 from '../../app/assets/message.mp3';
import cls from './style.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface NotificationProps {
    text: string;
    id: number;
}

export const Notification: FC<NotificationProps> = ({
    text,
    id,
}) => {
    const dispatch = useAppDispatch();
    const [ isLoading, setIsLoading ] = useState(false);

    const playNotificationSound = async () => {
        const audio = new Audio(audioMp3);
        await audio.play();
        setIsLoading(true);
    };

    const handleReadNotification = () => {
        setIsLoading(false);
        dispatch(readNotification(id));
    };

    useEffect(() => {
        playNotificationSound();

        const timeout = setTimeout(() => {
            handleReadNotification();
        }, 5000);

        return () => {
            clearTimeout(timeout);
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