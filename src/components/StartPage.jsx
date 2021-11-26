

export const StartPage = () =>{
     return(
         <div className="container">
             <div className="header">
                <h2 className="headerText">Recept</h2>
                <form className="search">
                <input lable="Sök recept" placeholder="Sök recept"></input>
                </form>
                
                <h4>Logga in/registera</h4>
             </div>
             <div className="main">
                <h3>Kycklinggryta</h3>
                <p>En kycklinggryta som går snabbt att laga och är riktigt god!</p>
                <p><strong>Ingredienser: </strong></p>
                <div>
                <ul>
                    <li>Kyckling</li>
                    <li>Paprika</li>
                    <li>Grädde</li>
                    <li>Svamp</li>
                </ul>
                <img src={'./images/shreyak-singh-0j4bisyPo3M-unsplash.jpg'} alt=''/>
                </div>
                
                <p><strong>Så här gör du:</strong><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus? Doloremque sequi at ea cum voluptates architecto libero atque nobis, laboriosam ratione. Sit eligendi nobis excepturi dignissimos, delectus totam aspernatur!</p>
             </div>
         </div>
     )
}