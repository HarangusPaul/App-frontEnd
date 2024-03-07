import "./HomePage.css"
import {Button, Dropdown} from "semantic-ui-react";
import {ErrorModal} from "../../Modals/Dialog/ErrorModal/ErrorModal";
import {useState} from "react";

import {ModalProps, ResponsesModal} from "../../Modals/Dialog/ResponsesModal/ResponsesModal";
import {ApprovalModal} from "../../Modals/Dialog/ApprovementModal/ApprovalModal";
import DropdownButton from "../../Inputs/Buttons/DropdownButton/DropdownButton";

export const HomePage = () => {


    const dynamicOptions = [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'design', text: 'Graphic Design', value: 'design' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'ia', text: 'Information Architecture', value: 'ia' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { key: 'meteor', text: 'Meteor', value: 'meteor' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' },
        { key: 'ui', text: 'UI Design', value: 'ui' },
        { key: 'ux', text: 'User Experience', value: 'ux' },
    ];


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
                    {/*<DropdownButton multiple={true} search={true} options={dynamicOptions}/>*/}
                </div>
                <ErrorModal props={{open:state,setOpen:setState,text:"You've encountered an error!",header:"Error",messageButton1:"Sure, exit!", messageButton2:"Sure, Retry!"}}/>
            </div>
        </div>
    )
}