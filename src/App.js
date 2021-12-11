import "./App.css";
import { SideBar } from "./components/SideBar";
import React, { useState, useEffect } from 'react';
import { StartPage } from "./components/StartPage";
import { UserLogin } from "./components/User/UserLogin";
import { UserProfile } from "./components/User/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingleRecept } from './components/SingleRecept';
import { PostRecipe } from './components/PostRecipe';
import { MobileSideBar } from './components/MobileSideBar';

function App() {
  const [recipes, setRecipes] = useState('')
  const [tabletSize , setTabletSize] = useState(false);
  const handleResize = ()=>{
      if(window.innerWidth < 990){
          setTabletSize(true)
      }else{
          setTabletSize(false)
      }
  }
  const [allUsers, setAllUsers] = useState('')
  
    useEffect(() =>{
      const url = "http://localhost:3030/recipe"
      window.addEventListener("resize", handleResize)

      const fetchData = async () =>{
        try{
          const response = await fetch(url);
          const json = await response.json();
          setRecipes(json)
          
          
        }catch(error){
          console.log('error', error)
        }
      }
      fetchData()
    },[])

  useEffect(() =>{
    const url = "http://localhost:3030/user"

    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        const json = await response.json();
        setAllUsers(json)
        

      }catch(error){
        console.log('error', error)
      }
    }
    fetchData()
  },[])

  return (
        <div className="container-fluid">
          <Router>
            <div className="row">
              {tabletSize ? <MobileSideBar/> :<SideBar />}
              <div className={"bg-light " + (tabletSize ? "col-11" : "col-10")}>
              <Routes>
                  <Route exact path="/" element={<StartPage recipes={recipes}/>} />
                  <Route path="/login" element={<UserLogin/>} />
                  <Route path="/profile" element={<UserProfile/>} />
                  <Route path="/recipe/:id" element={<SingleRecept/>} />
                  <Route path="/recipe/post" element={<PostRecipe/>} />
                </Routes>
              </div>
            </div>
          </Router>
        </div>
  );
}

export default App;
