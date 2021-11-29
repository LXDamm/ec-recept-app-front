import ReactStars from 'react-rating-stars-component';

export const StartPage = () =>{

    // TODO: detta ska ju då bytas ut mot data från backend sen
    const recept = [
        {
            image: '',
            title: 'Sausage Stuffing',
            user: 'user1',
            rating: 3
        },
        {
            image: '',
            title: 'second ',
            user: 'user2',
            rating: 4

        },
        {
            image: '',
            title: 'third',
            user: 'user3',
            rating: 1
        },
        {
            image: '',
            title: 'fourth',
            user: 'user4',
            rating: 2
        },

    ]

    const ratingChanged = (newRating) =>{
        console.log(newRating)
    }

     return(
         <div className="container">
             <div className="header">
                 <h1>Welcome to Mat Recept</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni eum eaque natus, qui sunt vel rerum excepturi culpa veritatis laboriosam error optio corrupti accusantium quo magnam suscipit eius dolor.</p>
             </div>
             <div className="cardContainer">
                 {recept.map(item =>{
                     return (
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
                     )
                 })}
                
             </div>
         </div>
     )
}