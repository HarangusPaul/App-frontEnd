import {UserService} from "../../services/api/UserAxis";
import {useState} from "react";

export const credentialVerifier = () => {
    const user : UserService = new UserService()
    function tokenIsValid(token: string) {
        if(token)
            return user.getToken(JSON.parse(token).token)
        //todo:token verifier
        return token != "";
    }

    let allReadyLoggedOn = () => {
        let token = localStorage.getItem("token");
        console.log(!tokenIsValid(token?token:""))
        return !tokenIsValid(token?token:"");
    }

    return allReadyLoggedOn();
}

export {}