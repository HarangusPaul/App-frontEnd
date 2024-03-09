import React from 'react';
import './LogIn.css';
import {LogInForm} from "../../Inputs/Forms/LogInForm/LogInForm"
import {Image} from "semantic-ui-react";

export const LogIn = () => {

    return (
        <div className={"backGround"}>
            <div className={"LogInContainerLogIn"}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' className={"Logo"} size='small' wrapped />
                <LogInForm></LogInForm>
            </div>
        </div>
    );
}
