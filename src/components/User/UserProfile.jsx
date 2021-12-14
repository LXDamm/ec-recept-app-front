import './style.css';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getRecipesByUser } from '../../services/recipeService';
import AccountContext from './AccountContext';

export const UserProfile = () => {
	const navigate = useNavigate();
	const [accountContext, setAccountContext] = useContext(AccountContext);
	const [username, setUsername] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [pass, setPass] = useState(undefined);
	const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let controller = new AbortController();
        (async () => {
			if (accountContext.loggedIn) {
				setUsername(accountContext.username);
            	setEmail(accountContext.email);
            	setPass(accountContext.pass);
				accountContext.store();
            	setAccountContext(accountContext);
	
            	const result = await getRecipesByUser(accountContext.userId);
				console.log(result);
				console.log(accountContext.userId);
				if (Array.isArray(result)) setRecipes(result);
			}
			else setRecipes([]);
        })();
        return () => controller?.abort();
    }, [accountContext.loggedIn]);

	const handleLogout = (e) => {
		e.preventDefault();
		accountContext?.logout();
		setAccountContext(accountContext);
		navigate('/');
		window.location.reload();
	};

	return (
		<div>
			<div className="row bg-white m-4 rounded-3 p-3 shadow modal-dialog-centered">
				<div className="col-lg-2">
					<FontAwesomeIcon icon={faUserCircle} className="profile-picture" />
				</div>
				<div className="col-lg-8">
					<span>
						<p>
							<strong>Username:</strong> {username}{' '}
						</p>
					</span>
					<span>
						<p>
							<strong>Email:</strong> {email}
						</p>
					</span>
					<span>
						<p>
							<strong>Password:</strong> {pass}
						</p>
					</span>
				</div>
				<div className="col-lg-2 d-flex flex-column">
					<Link to="/addrecipe" class="btn btn-outline-success my-2">
						Add Recipe
					</Link>
					<Link to="/" class="btn btn-outline-danger" onClick={(event) => handleLogout(event)}>
						Logout
					</Link>
				</div>
			</div>
			<div className="row bg-white m-4 rounded-3 p-3 shadow justify-content-center">
				<h3>Your Recipe</h3>
				<div className="cardContainer">
					{Array.isArray(recipes) ? (recipes?.map((item) => {
							return (
								<Link key={item.id} to={`/recipe/${item.id}`} className="recipe-link">
						    	<div className="card">
                                <div className="topCard"><img src={item.image} alt="" /></div>
							    <div className="bottomCard"><p><strong>{item.title}</strong></p></div>
						    	</div>
							    </Link>
							);
						})
					) : (<img src="loading.svg" alt="Loading" />)
					}
				</div>
			</div>
		</div>
	);
};
