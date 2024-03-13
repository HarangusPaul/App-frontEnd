import React from 'react';
import './LogIn.css';
import {LogInForm} from "../../Inputs/Forms/LogInForm/LogInForm"
import {Image} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

export const LogIn = () => {

    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate("/register");
    }

    return (
        <div className={"backGround"}>
            <div className={"LogInContainerLogIn"}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' className={"LogoLogIn"} size='small' wrapped />
                <LogInForm></LogInForm>
                <a onClick={navigateToRegister} className={"hyperToRegister"}>Don't have an account?go to register</a>
            </div>
        </div>
    );
}
