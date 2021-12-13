import ReactStars from 'react-rating-stars-component';
/* import {useEffect, useState} from 'react'; */
import {Link} from 'react-router-dom';

export const StartPage = ({recept}) =>{

  

    const ratingChanged = (newRating) =>{
        console.log(newRating)
    }

     return(
         <div className="container mt-4">
             <div className="header">
                 <h1>Welcome to Mat Recept</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni eum eaque natus, qui sunt vel rerum excepturi culpa veritatis laboriosam error optio corrupti accusantium quo magnam suscipit eius dolor.</p>
             </div>
             <div className="cardContainer">
                 {recept !== '' ? recept.map(item =>{
                     return (
                        <Link to={`/Singlerecept/${item.id}`} > 
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
                                    <ReactStars count={5} onChange={ratingChanged} size={16} activeColor='#ffd700' value={item.rating}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </Link>
                     )
                 }): null}
                
            </div>
         </div>
     )
}