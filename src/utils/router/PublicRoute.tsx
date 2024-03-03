import {credentialVerifier} from "./CredentialVerifier";
import {Navigate, Outlet} from "react-router-dom";
import React from "react";

export const PublicRoute = () => {
    let auth = credentialVerifier();

    return (
        auth ? <Outlet/> : <Navigate to={"/"}/>
    );
}