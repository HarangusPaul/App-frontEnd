import {Input} from "semantic-ui-react";
import React, {useState} from "react";
import validator from "validator";
import "./PasswordField.css"

// export interface MultipleFunctions{
//     f1:any,
//     f2:any,
// }

export const PasswordField = (props:any) => {
    const [error,setError] = useState(false);

    const isValidPassword = (value:any) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true;
        } else {
            return false;
        }
    }

    const launchError = (input:string) =>{
        if(isValidPassword(input)){
            props.props(input);
            setError(false);
        }
        else{
            setError(true);
        }

    }

    return (
        <div>
            <Input type="password" className={"PasswordField"} placeholder="Password" onChange={(e)=>{
                launchError(e.target.value);
            }}/>

            {error?(<label className={"errorLabelLogIn"}>The credentials are incorrect!</label>):(<></>)}
        </div>
    )
}