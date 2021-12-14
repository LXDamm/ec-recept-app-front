import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../services/recipeService';

export const StartPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let controller = new AbortController();
        (async () => {
            const recipes = await getAllRecipes();
            recipes.splice(6)
            setRecipes(recipes);
        })();
        return () => controller?.abort();
    }, []);

    return (
        <div className="container pt-5">
            <div className="header">
                <h1>Welcome to Mat Recept</h1>
            </div>
            <div className="cardContainer">
                {recipes.length > 0 ? (
                    recipes?.map((item) => {
                        return (
                            <Link key={item.id} to={`/recipe/${item.id}`} className="recipe-link">
                                <div className="card">
                                    <div className="topCard">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="bottomCard">
                                        <div>
                                            <p>
                                                <strong>{item.title}</strong>
                                            </p>
                                        </div>
                                    
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p>No recipes</p>
                )}
            </div>
        </div>
    );
};
