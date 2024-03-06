import "./HomePage.css"
import {Button} from "semantic-ui-react";
import {ErrorModal} from "../../Modals/Dialog/ErrorModal/ErrorModal";
import {useState} from "react";



export const HomePage = () => {
    const[state,setState] = useState<boolean>(false)

    return (
        <div>
            <div className={"backGround"}>
                <div className={"appView"}>
                    <Button onClick={() => setState(true)}>
                        Sure, retry!
                    </Button>
                </div>
                <ErrorModal props={{open:state,setOpen:setState,text:"You've encountered an error!",header:"Error",messageButton1:"Sure, exit!", messageButton2:"Sure, Retry!"}}/>
            </div>
        </div>
    )
}