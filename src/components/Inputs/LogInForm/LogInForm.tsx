import React, {useState} from "react";
import "./LogInForm.css"
import {Button, ButtonContent, Icon, Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import validator from "validator";



export const LogInForm= () =>{
    const [error,setError] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    function isValidEmail(email:string) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

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


    const submit = (e:any)=>{
        e.preventDefault();
        if (!isValidEmail(email) || !isValidPassword(password)) {
            setError(true);
        }
        return;
    }

    return (
        <div className="formDiv">

            <form className={"form"}>
            <Input type="text" className={"EmailLogIn"} placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value);
                setError(false);
            }}/>
            <Input type="password" className={"PasswordLogIn"} placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value);
                setError(false);
            }}/>

                {error?(<label className={"errorLabelLogIn"}>The credentials are incorrect!</label>):(<></>)}

            <Button animated type="submit" className={"SendButtonLogIn"} onClick={(e) => {submit(e)}}>
                <ButtonContent visible>Next</ButtonContent>
                <ButtonContent hidden>
                    <Icon name='arrow right' />
                </ButtonContent>
            </Button>
            </form>
        </div>
    )
}