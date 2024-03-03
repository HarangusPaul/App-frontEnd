import React, {useState} from "react";
import "./LogInForm.css"
// @ts-ignore
import {Button, ButtonContent, Icon, Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import validator from "validator";
import {UserService} from "../../../../services/api/UserAxis";
import {UserLoginModel} from "../../../../services/Models/UserLoginModel";
import {TokenModel} from "../../../../services/Models/TokenModel";
import {PasswordField} from "../../Fields/PasswordField";



export const LogInForm= () =>{
    // const a:MultipleFunctions = {
    //     f1:()=>{},
    //     f2:""
    // }
    const userService = new UserService();
    const [token,setToken] = useState<string>("");
    const [error,setError] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    function isValidEmail(email:string) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const isValidPassword = (value:any) => {
        return value != "";
    }
    ///pana aici is field functions ce ar putea fii inlocuite

    const submit = (e:any)=>{
        e.preventDefault();
        if (!isValidEmail(email) || !isValidPassword(password)) {
            setError(true);
            return;
        }
        // const data:UserLoginModel = {
        //     email:"paulhrangus@gmail.com",
        //     password:"123Stm/"
        // }
        const data:UserLoginModel = {
            email:email,
            password:password
        }
        userService.login(data).then((token)=>{
            if(typeof token == "object"){
                const string = JSON.stringify(token);
                localStorage.setItem("token",string)
            }
        })
        return;
    }

    return (
        <div className="formDiv">

            <form className={"form"}>
            <Input type="text" className={"EmailLogIn"} placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value);
                setError(false);
            }}/>
            {/*<Input type="password" className={"PasswordLogIn"} placeholder="Password" onChange={(e)=>{*/}
            {/*    setPassword(e.target.value);*/}
            {/*    setError(false);*/}
            {/*}}/>*/}
                <PasswordField className={"PasswordLogIn"} props={setPassword}/>

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