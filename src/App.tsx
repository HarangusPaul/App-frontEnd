import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {LogIn} from "./components/pages/LogInPage/LogIn";
import {Register} from "./components/pages/RegisterPage/Register";

function Home() {
    return (
        <div>
            zasadas
        </div>
    );
}

function App() {
  return (
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
