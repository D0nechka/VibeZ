import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { NotificationList } from 'src/widgets/NotificationsList';
import { getNotification } from 'src/app/store/slices/notification/getNotifications';
import { getUserId } from 'src/app/store/slices/user/UserSlice';

interface NotificationProviderProps {
    children: React.ReactNode;
}

const NotificationProvider: FC<NotificationProviderProps> = ({
    children,
}) => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);

    useEffect(() => {
        if(userId !== null) {
            const intervalId = setInterval(() => {
                dispatch(getNotification(userId));
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, []);

    return (
        <div>
            {children}
            <NotificationList />
        </div>
    );
};

export default NotificationProvider;