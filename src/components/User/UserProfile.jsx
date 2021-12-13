import './style.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getRecipesByUser } from '../../services/recipeService';
import account from '../../account/account';

export const UserProfile = (props) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [pass, setPass] = useState(undefined);
	const [recipes, setRecipes] = useState(undefined);

    useEffect(() => {
        const fetch = async () => {
            setUsername(account.username);
            setEmail(account.email);
            setPass(account.pass);
            account.store();
    
            const result = await getRecipesByUser(account.userId);
            if (result) setRecipes(result);
        };
        fetch();
    }, [])

	const handleLogout = (e) => {
		e.preventDefault();
		account.logout();
		navigate('/');
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
					<Link class="btn btn-outline-danger" onClick={(event) => handleLogout(event)}>
						Logout
					</Link>
				</div>
			</div>
			<div className="row bg-white m-4 rounded-3 p-3 shadow justify-content-center">
				<h3>Your Recipe</h3>
				<div className="cardContainer">
                    {recipes && recipes.map((item) => (
                        <Link key={item.id} to={`/recipe/${item.id}`}>
						    <div className="card">
                                <div className="topCard"><img src={item.image} alt="" /></div>
							    <div className="bottomCard"><p><strong>{item.title}</strong></p></div>
						    </div>
					    </Link>
                    ))}
				</div>
			</div>
		</div>
	);
};
