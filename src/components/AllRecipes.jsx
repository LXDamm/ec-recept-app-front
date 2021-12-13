import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../services/recipeService';

export const AllRecipes = () =>{

    const [recipes, setRecipes] = useState([]);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    useEffect(async () => {
        const recipes = await getAllRecipes();
        setRecipes(recipes);
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1>Alla recept</h1>
                <p>...</p>
            </div>
            <div className="cardContainer">
                {recipes.length > 0 ? (
                    recipes?.map((item) => {
                        return (
                            <Link key={item.id} to={`/recipe/${item.id}`}>
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
                                        <div className="ratingCard">
                                            <p>By: {item.user}</p>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={16}
                                                activeColor="#ffd700"
                                                value={item.rating}
                                            />
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
    )
}