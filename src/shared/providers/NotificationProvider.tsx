import React, { FC, useEffect, useRef } from 'react';
import { useAppDispatch } from 'src/app/hooks/redux';
import { NotificationList } from 'src/widgets/NotificationsList';
import { getNotification } from 'src/app/store/slices/notification/services/getNotifications';
import { USER_ID_KEY } from '../const/localStorage';
import audioMp3 from '../../app/assets/message.mp3';

interface NotificationProviderProps {
    children: React.ReactNode;
}

const NotificationProvider: FC<NotificationProviderProps> = ({
    children,
}) => {
    const dispatch = useAppDispatch();

    const userId = localStorage.getItem(USER_ID_KEY);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(getNotification(Number(userId) || -1));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            {children}
            <NotificationList refAudio={audioRef} />
            <audio ref={audioRef} src={audioMp3} />
        </div>
    );
};

export default NotificationProvider;