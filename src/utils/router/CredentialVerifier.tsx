export const credentialVerifier = () => {

    function tokenIsValid(token: string) {
        //todo:token verifier
        return token == "";
    }

    let allReadyLoggedOn = () => {
        let token = localStorage.getItem("token");

        return token == null || tokenIsValid(token);
    }

    return allReadyLoggedOn();
}

export {}