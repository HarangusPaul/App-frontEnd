import "./HomePage.css"
import {Button, Dropdown} from "semantic-ui-react";
import {ErrorModal} from "../../Modals/Dialog/ErrorModal/ErrorModal";
import React, {useState} from "react";

import {ModalProps, ResponsesModal} from "../../Modals/Dialog/ResponsesModal/ResponsesModal";
import {ApprovalModal} from "../../Modals/Dialog/ApprovementModal/ApprovalModal";
import DropdownButton from "../../Inputs/Buttons/DropdownButton/DropdownButton";
import {ChoiceModal, ModalPropsChoice} from "../../Modals/Dialog/ChoiceModal/ChoiceModal";
import {UserService} from "../../../services/api/UserAxis";


export const HomePage = () => {
    const user:UserService = new UserService();
    const[state,setState] = useState<boolean>(false)
    const [dropdownOptions, setDropdownOptions] = useState([
        { key: '1', text: 'Option 1', value: 'Option 1' },
        { key: '2', text: 'Option 2', value: 'Option 2' },
    ]);


    const modalProps: ModalPropsChoice = {open:state,setOpen:setState,text:"You need to chose from the list below!",header:"Please choose",messageButton:"DONE", options: dropdownOptions}

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
                    <Button onClick={() =>{
                        const a = localStorage.getItem("token")
                        if(a)
                            user.getToken(JSON.parse(a).token)
                    }}/>

                    {/*<ResponsesModal props={{open:state,setOpen:setState,text:"You've been logged in successfully!",header:"Login",messageButton:"Ok"}}/>*/}
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*    Sure, retry!*/}
                    {/*</Button>*/}

                    {/*<ChoiceModal props={modalProps}/>*/}
                    {/*<Button onClick={() => setState(true)}>*/}
                    {/*        ChoiceModal*/}
                    {/*</Button>*/}

                    {/*
                    multiple: attribute can be 'true' or 'false'
                    search: attribute can be 'true' or 'false'
                    */
                    }
                    {/*<DropdownButton multiple={true} search={true}/>*/}


                </div>
                {/*<ErrorModal props={{open:state,setOpen:setState,text:"You've encountered an error!",header:"Error",messageButton1:"Sure, exit!", messageButton2:"Sure, Retry!"}}/>*/}
            </div>
        </div>
    )
}