import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {credentialVerifier} from "./CredentialVerifier";

export const ProtectedRoute = () => {
    let auth = credentialVerifier();

    return (
        !auth ? <Outlet/> : <Navigate to={"/login"}/>
    );
}