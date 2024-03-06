import "./HomePage.css"
import {Button} from "semantic-ui-react";
import React, {useState} from "react";
import {ModalProps, ResponsesModal} from "../../Modals/Dialog/ResponsesModal/ResponsesModal";

export const HomePage = () => {
    const[state,setState] = useState<boolean>(false)

    return (
        <div>
            <div className={"backGround"}>
                <div className={"appView"}>
                    <Button onClick={() => setState(true)}>
                        Login
                    </Button>
                    <ResponsesModal props={{open:state,setOpen:setState,text:"You've been logged in successfully!",header:"Login",messageButton:"Ok"}}/>
                </div>
            </div>
        </div>
    )
}