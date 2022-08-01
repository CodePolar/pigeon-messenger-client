
export interface NotificationState {
   notifications: Array<any>
}

export interface Notification {
    id: number,
    title: string,
    type: string,
    watched: boolean,
    date: Date,
    user_id: number,
    description: string,
    img: string,
    requester: string
}