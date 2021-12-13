import './App.css';
import { SideBar } from './components/SideBar';
import React, { useState, useEffect } from 'react';
import { StartPage } from './components/StartPage';
import { UserLogin } from './components/User/UserLogin';
import { UserProfile } from './components/User/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingleRecipe } from './components/SingleRecipe';
import {AllRecipes} from './components/AllRecipes';
import { AddRecipe } from './components/User/AddRecipe';
import { MobileSideBar } from './components/MobileSideBar';
import { getAllRecipes } from './services/recipeService';

function App() {
    const [recipes, setRecipes] = useState(undefined);
    const [tabletSize, setTabletSize] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 990) {
            setTabletSize(true);
        } else {
            setTabletSize(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        (async () => {
            const recipes = await getAllRecipes();
            setRecipes(recipes);
        })();
    }, []);

    return (
        <div className="container-fluid">
            <Router>
                <div className="row row-height">
                    {tabletSize ? (
                        <MobileSideBar recipes={recipes} />
                    ) : (
                        <SideBar recipes={recipes} />
                    )}
                    <div className={'bg-light ' + (tabletSize ? 'col-11' : 'col-10')}>
                        <Routes>
                            <Route exact path="/" element={<StartPage/>} />
                            <Route path="/login" element={<UserLogin/>} />
                            <Route path="/profile" element={<UserProfile/>} />
                            <Route path="/recipe/:id" element={<SingleRecipe/>} />
                            <Route path="/addrecipe" element={<AddRecipe/>} />
                            <Route path="/allrecipes" element={<AllRecipes/>} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
