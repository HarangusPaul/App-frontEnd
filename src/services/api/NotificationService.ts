import {notifications} from "../../components/NotifBar/NotifBar";

class NotificationService{
    private _notifications: Array<notifications> = [];

    addNotification(notification:notifications) {
        if(!this._notifications?.includes(notification))
            this._notifications?.push(notification);
    }

    returnNotifications(){
        this.addNotification({title:"prost",message:"esti!"})
        return this._notifications
    }
}

export {NotificationService}