import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

export const StartPage = ({ recipes }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Welcome to Mat Recept</h1>
                <p>...</p>
            </div>
            <div className="cardContainer">
                {recipes !== '' ? recipes.map(item => {
                    return (
                        <Link to={`/recipe/${item.id}`} >
                            <div className="card">
                                <div className="topCard">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="bottomCard" >
                                    <div>
                                        <p><strong>{item.title}</strong></p>
                                    </div>
                                    <div className="ratingCard">
                                        <p>By: {item.user}</p>
                                        <ReactStars count={5} onChange={ratingChanged} size={16} activeColor='#ffd700' value={item.rating} />
                                    </div>

                                </div>
                            </div>
                        </Link>
                    )
                }) : null}

            </div>
        </div>
    )
}