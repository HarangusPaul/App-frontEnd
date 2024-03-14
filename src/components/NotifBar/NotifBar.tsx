import {Divider, Header, Label, TextArea} from "semantic-ui-react";
import "./NotifBar.css"

export interface notifications{
    title:string,
    message:string,
}

export interface notificationsProps{
    notificationList: Array<notifications>
}

export const NotificationBar = (props:notificationsProps) =>{
    return (<div className={"NotificationDiv"}>
        <Header className={"NotificationHeader"}>Notifications:</Header>
        <Divider className={"NotificationDivider"}/>
        <div>
        {
            props.notificationList?props.notificationList.map((item:any, index:any) => (
                <div className={"NotificationItemDiv"}>
                    <Header className={"NotificationItemHeader"}>{item.title}</Header>
                    <Divider className={"NotificationItemDivider"}/>
                    <Label className={"NotificationItemLabel"}>{item.message}</Label>
                </div>
            )):(<div/>)
        }
        </div>
    </div>)
}
