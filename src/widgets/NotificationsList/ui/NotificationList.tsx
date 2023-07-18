import { FC } from 'react';
import { useAppSelector } from 'src/app/hooks/redux';
import { selectorGetNotifications } from 'src/app/store/slices/notification/NotificationSlice';
import { Notification } from 'src/entities/Notification/Notification';
import cls from './style.module.scss';

export const NotificationList: FC = () => {
    const notifications = useAppSelector(selectorGetNotifications);

    return (
        <div className={cls.notificationsList}>
            {notifications.map((notification) => (
                <Notification
                    text={notification.text}
                    key={notification.id}
                    id={notification.id}
                />
            ))}
        </div>
    );
};