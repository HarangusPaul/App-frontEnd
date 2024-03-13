import {notifications} from "../../components/NotifBar/NotifBar";

class NotificationService{
    private _notifications: [notifications] | undefined

    addNotification(notification:notifications) {
        if(!this._notifications?.includes(notification))
            this._notifications?.push(notification);
    }

    returnNotifications(){
        return this._notifications
    }
}

export {NotificationService}