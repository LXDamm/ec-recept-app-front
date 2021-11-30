import "./App.css";
import { SideBar } from "./components/SideBar";
import React from "react";
import { StartPage } from "./components/StartPage";
import { UserLogin } from "./components/User/UserLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<StartPage/>} />
          <Route path="/Member" element={<UserLogin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
