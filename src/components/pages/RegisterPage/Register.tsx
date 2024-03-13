import React from 'react';
import './Register.css';
import {RegisterForm} from "../../Inputs/Forms/Register/RegisterForm";
import {Image} from "semantic-ui-react";

export const Register = () => {
    return (
        <div className={"backGround"}>
            <div className={"RegisterContainer"}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' className={"LogoReg"} size='small' wrapped />
                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
}
