
import './App.css';
import { SideBar } from './components/SideBar';
import React from 'react';
import {StartPage} from './components/StartPage';
import { UserLogin } from './components/User/UserLogin';
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
   <div className="appContainer">
     <SideBar/>
     <BrowserRouter>
       <Routes>
          <Route exact path="/" component={StartPage}  />
          <Route path="/Member" component={UserLogin} />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
