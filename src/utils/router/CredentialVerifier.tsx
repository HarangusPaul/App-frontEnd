import {UserService} from "../../services/api/UserAxis";
import {useState} from "react";

export const credentialVerifier = () => {
    const userService:UserService = new UserService();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [token1, setToken] = useState<boolean>(false);
    // let token = localStorage.getItem("token");

    function tokenIsValid(token: string) {
        //todo:token verifier
        const obj = JSON.parse(token)
        userService.getToken(obj.token).then((response) => {
            setToken(response?response:false) ;
        });
    }

    let allReadyLoggedOn = () => {
        let token = localStorage.getItem("token");
        tokenIsValid(token?token:"");
        return token == null || token1;
    }

    return allReadyLoggedOn();
}

export {}