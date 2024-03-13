import {Divider, Header, Label, TextArea} from "semantic-ui-react";
import "./NotifBar.css"

export interface notifications{
    title:string,
    message:string,
}

export interface notificationsProps{
    notificationList: [notifications] | undefined
}

export const NotificationBar = (props:notificationsProps) =>{
    return (<div className={"NotificationDiv"}>
        <Header>Notifications:</Header>
        <Divider/>
        {
            props.notificationList?props.notificationList.map((item:any, index:any) => (
                <div>
                    <Header>{item.title}</Header>
                    <Divider></Divider>
                    <Label>{item.message}</Label>
                </div>
            )):(<div/>)
        }
    </div>)
}
