import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LogIn} from "../LogInPage/LogIn";
import {Register} from "../RegisterPage/Register";
import React from "react";
import {HomePage} from "../HomePage/HomePage";



export const MainPage = () => {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LogIn/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}