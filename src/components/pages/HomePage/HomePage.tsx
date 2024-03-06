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
                    <ApprovalModal props={{open:state,setOpen:setState,text:"Do you want to do this knowing the consequences?",header:"Approve",messageButton1:"Approve", messageButton2: "Reject"}}/>
                </div>
            </div>
        </div>
    )
}