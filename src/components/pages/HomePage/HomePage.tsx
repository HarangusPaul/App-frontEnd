import "./HomePage.css"
import {Button} from "semantic-ui-react";
import {ApprovalModal} from "../../Modals/Dialog/ApprovementModal/ApprovalModal";
import {useState} from "react";

export const HomePage = () => {

    const[state,setState] = useState<boolean>(false)

    return (
        <div>
            <div className={"backGround"}>
                <div className={"appView"}>
                    <Button onClick={() => setState(true)}>
                        ApprovementModal
                    </Button>
                    <ApprovalModal props={{open:state,setOpen:setState,text:"You've been logged in successfully!",header:"Login",messageButton:"Ok"}}/>
                </div>
            </div>
        </div>
    )
}