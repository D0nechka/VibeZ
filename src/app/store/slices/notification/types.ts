export enum NotificationType {
    MESSAGE = 'message'
}

export type Notification = {
    text: string;
    type: NotificationType;
    id: number;
    read: boolean;
}

export type InitialState = {
    notifications: Notification[]
}