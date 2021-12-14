import './App.css';
import { SideBar } from './components/SideBar';
import React, { useState, useEffect } from 'react';
import { StartPage } from './components/StartPage';
import { UserLogin } from './components/User/UserLogin';
import { UserProfile } from './components/User/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingleRecipe } from './components/SingleRecipe';
import { AllRecipes } from './components/AllRecipes';
import { AddRecipe } from './components/User/AddRecipe';
import { MobileSideBar } from './components/MobileSideBar';
import { getAllRecipes } from './services/recipeService';
import AccountContext from './components/User/AccountContext';
import Account from './account/account';

function App() {
    const [accountContext, setAccountContext] = useState(new Account());
    const [recipes, setRecipes] = useState(undefined);
    const [tabletSize, setTabletSize] = useState(false);

    accountContext.restore();
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
        let controller = new AbortController();
        (async () => {
            const recipes = await getAllRecipes();
            setRecipes(recipes);
        })();
        return () => controller?.abort();
    }, []);

    return (
        <div className="App">
        <AccountContext.Provider value={[accountContext, setAccountContext]}>
        <div className="container-fluid">
            <Router>
                <div className="row row-height">
                    {tabletSize ? (
                        <MobileSideBar loggedIn={accountContext.loggedIn} recipes={recipes} />
                    ) : (
                        <SideBar loggedIn={accountContext.loggedIn} recipes={recipes} />
                    )}
                    <div className={'bg-light ' + (tabletSize ? 'col-11' : 'col-10')}>
                        <Routes>
                            <Route exact path="/" element={<StartPage/>} />
                            <Route path="/login" element={<UserLogin/>} />
                            <Route path="/profile" element={accountContext?.loggedIn ? <UserProfile/> : <UserLogin/>} />
                            <Route path="/recipe/:recipeId" element={<SingleRecipe/>} />
                            <Route path="/addrecipe" element={<AddRecipe/>} />
                            <Route path="/allrecipes" element={<AllRecipes/>} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
        </AccountContext.Provider>
        </div>
    );
}

export default App;
