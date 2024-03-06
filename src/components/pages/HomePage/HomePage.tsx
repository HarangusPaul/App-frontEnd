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
                    <Button onClick={() => setState(true)}>
                        Sure, exit!
                    </Button>
                    <ErrorModal props={{open:state,setOpen:setState,text:"You've been logged in successfully!",header:"Login",messageButton:"Ok"}}/>
                </div>
            </div>
        </div>
    )
}