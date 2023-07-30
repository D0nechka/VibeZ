import { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/hooks/redux';
import { selectorGetNotifications } from 'src/app/store/slices/notification/NotificationSlice';
import { Notification } from 'src/entities/Notification/Notification';
import cls from './style.module.scss';

interface NotificationListProps {
    refAudio: React.RefObject<HTMLAudioElement>
}

export const NotificationList: FC<NotificationListProps> = ({
    refAudio,
}) => {
    const [ hasInteracted, setHasInteracted ] = useState(false);

    const notifications = useAppSelector(selectorGetNotifications);

    const handleInteraction = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
        };
    }, [ hasInteracted ]);

    return (
        <div className={cls.notificationsList}>
            {notifications.map((notification) => (
                <Notification
                    text={notification.text}
                    key={notification.id}
                    id={notification.id}
                    refAudio={refAudio}
                    hasInteracted={hasInteracted}
                />
            ))}
        </div>
    );
};