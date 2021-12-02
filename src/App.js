import "./App.css";
import { SideBar } from "./components/SideBar";
import React, {useEffect, useState} from "react";
import { StartPage } from "./components/StartPage";
import { UserLogin } from "./components/User/UserLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingleRecept } from './components/SingleRecept'

function App() {

  const [recipe, setRecipe] = useState('')
  

  useEffect(() =>{
    const url = "http://localhost:3030/recipe"

    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        const json = await response.json();
        setRecipe(json)
        

      }catch(error){
        console.log('error', error)
      }
    }
    fetchData()
  },[])

  return (
    <div className="appContainer">
      <Router>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<StartPage recept={recipe}/>} />
          <Route path="/Member" element={<UserLogin/>} />
          <Route path="/Singlerecept/:id" element={<SingleRecept />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
