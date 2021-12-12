import "./App.css";
import { SideBar } from "./components/SideBar";
import React, { useState, useEffect } from 'react';
import { StartPage } from "./components/StartPage";
import { UserLogin } from "./components/User/UserLogin";
import { UserProfile } from "./components/User/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingleRecipe } from './components/SingleRecipe';
import { PostRecipe } from './components/PostRecipe';
import { MobileSideBar } from './components/MobileSideBar';
import { getAllRecipes } from './services/recipeService';

function App() {
  const [tabletSize , setTabletSize] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const handleResize = ()=>{
      if(window.innerWidth < 990){
          setTabletSize(true)
      }else{
          setTabletSize(false)
      }
  }
  const [allUsers, setAllUsers] = useState('')
  
    useEffect(() =>{
      window.addEventListener("resize", handleResize);
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

  useEffect(async () => {
        const recipes = await getAllRecipes();
        setRecipes(recipes);
    }, []);

  return (
        <div className="container-fluid">
          <Router>
            <div className="row">
              {tabletSize ? <MobileSideBar/> :<SideBar recipe={recipes}/>}
              <div className={"bg-light " + (tabletSize ? "col-11" : "col-10")}>
              <Routes>

                  <Route exact path="/" element={<StartPage recept={recipes}/>} />
                  <Route path="/Member" element={<UserLogin/>} />
                  <Route path="/recipe/:id" element={<SingleRecipe/>} />

                  <Route exact path="/" element={<StartPage/>} />
                  <Route path="/login" element={<UserLogin/>} />
                  <Route path="/profile" element={<UserProfile/>} />
                  <Route path="/recipe/:id" element={<SingleRecipe/>} />
                  <Route path="/recipe/post" element={<PostRecipe/>} />

                </Routes>
              </div>
            </div>
          </Router>
        </div>
  );
}

export default App;
