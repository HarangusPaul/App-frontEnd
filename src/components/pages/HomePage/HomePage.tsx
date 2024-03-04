import "./HomePage.css"
import {Button} from "semantic-ui-react";
import React, {useState} from "react";
import {ModalProps, ResponsiveModal} from "../../Modals/Dialog/ResponsiveModal/ResponsiveModal";

export const HomePage = () => {
    const[state,setState] = useState<boolean>(false)

    return (
        <div>
            <div className={"backGround"}>
                <div className={"appView"}>
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*    Tiny*/}
                    {/*</Button>*/}
                    {/*<ResponsiveModal props={{open:state,setOpen:setState,text:"abc",header:"aaaa",messageButton:"nu am chef!"}}/>*/}
                </div>
            </div>
        </div>
    )
}