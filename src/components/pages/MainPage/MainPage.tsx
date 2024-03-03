import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import {LogIn} from "../LogInPage/LogIn";
import {Register} from "../RegisterPage/Register";
import React from "react";
import {HomePage} from "../HomePage/HomePage";
import {ProtectedRoute} from "../../../utils/router/ProtectedRoute";
import {TablePage} from "../TabelPage/TablePage";
import {NavBar} from "../../NavBar/NavBar";
import {credentialVerifier} from "../../../utils/router/CredentialVerifier";
import {PublicRoute} from "../../../utils/router/PublicRoute";


export const MainPage = () => {

    let auth = !credentialVerifier();
    return (
        <Router>
            {auth ? (
                <div className={"navBar"}>
                    <NavBar/>
                </div>
            ) : (<div/>)}
            <div className="App">

                <div className="content">

                    <Routes>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/TablePage" element={<TablePage/>}/>
                        </Route>
                        <Route element={<PublicRoute/>}>
                            <Route path="/login" element={<LogIn/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}