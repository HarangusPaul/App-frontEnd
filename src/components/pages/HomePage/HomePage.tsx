import "./HomePage.css"
import {Button, Dropdown} from "semantic-ui-react";
import {ErrorModal} from "../../Modals/Dialog/ErrorModal/ErrorModal";
import {useState} from "react";

import {ModalProps, ResponsesModal} from "../../Modals/Dialog/ResponsesModal/ResponsesModal";
import {ApprovalModal} from "../../Modals/Dialog/ApprovementModal/ApprovalModal";
import DropdownButton from "../../Inputs/buttons/DropdownButton/DropdownButton";

export const HomePage = () => {

    const[state,setState] = useState<boolean>(false)

    return (
        <div>
            <div className={"backGround"}>
                <div className={"appView"}>
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*    ApprovementModal*/}
                    {/*</Button>*/}
                    {/*<ApprovalModal props={{open:state,setOpen:setState,text:"Do you want to do this knowing the consequences?",header:"Approve",messageButton1:"Approve", messageButton2: "Reject"}}/>*/}
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*    Login*/}
                    {/*</Button>*/}
                    {/*<ResponsesModal props={{open:state,setOpen:setState,text:"You've been logged in successfully!",header:"Login",messageButton:"Ok"}}/>*/}
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*    Sure, retry!*/}
                    {/*</Button>*/}
                    {/*
                    multiple: attribute can be 'true' or 'false'
                    search: attribute can be 'true' or 'false'
                    */
                    }
                    {/*<DropdownButton multiple={true} search={true}/>*/}
                </div>
                <ErrorModal props={{open:state,setOpen:setState,text:"You've encountered an error!",header:"Error",messageButton1:"Sure, exit!", messageButton2:"Sure, Retry!"}}/>
            </div>
        </div>
    )
}