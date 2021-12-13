import './style.css';
import React, { useEffect, useState } from 'react';
import account from '../../services/accountService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';




export const UserProfile = (props) => {
    const [username, setUsername] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    const [recipes, setRecipes] = useState(undefined);

    useEffect(() => {
        setUsername(account.username);
        setEmail(account.email);
        setPass(account.pass);
        account.store();



        axios.get(`http://localhost:3030/recipe/user/YORqSq8iUFTSgijYBkZaw8Axn8I3`)
        .then(res =>{ setRecipes(res.data)})
    }, []);
    return (
        <div>
            <div className="row bg-white m-4 rounded-3 p-3 shadow modal-dialog-centered">
                <div className="col-lg-2">
                    <FontAwesomeIcon  icon={faUserCircle} className="profile-picture" />
                </div>
                <div className="col-lg-8">
                    <span>
                    <p><strong>Username:</strong> {username} </p>
                    </span>
                    <span>
                        <p><strong>Email:</strong> {email}</p>
                        
                    </span>
                    <span>
                        <p><strong>Password:</strong> {pass}</p>
                    </span>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <Link to="/addrecipe" class="btn btn-outline-success my-2">Add Recipe</Link>
                    <Link to="/" class="btn btn-outline-danger" onClick={account.logout}>Loggut</Link>

                </div>
            </div>
            <div className="row bg-white m-4 rounded-3 p-3 shadow justify-content-center">
                <h3>Your Recipe</h3>
                <div className="cardContainer">

                    {recipes && recipes.length > 0 ? (
                        recipes.map((item) => {
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
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })) : (
                        <p>No recipes</p>
                        )
                    }
                </div>  
                
                
            </div>
        </div>
    );
};
