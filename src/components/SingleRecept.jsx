import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router';

export const SingleRecept = () =>{
    const [singleRecipe, setSingleRecipe] = useState('')
    const {id} = useParams()

    useEffect(()=>{
        const url = `http://localhost:3030/recipe/${id}`

    const fetchData = async () =>{
      try{
        const response = await fetch(url);
        const json = await response.json();
        
        setSingleRecipe(json)
        console.log(singleRecipe)

      }catch(error){
        console.log('error', error)
      }
    }
    fetchData()
    }, [])

    

    
    
    return(
        <div>
            <div className="album-box">
            <ul className="image-gallery">
                <li>
                    <img src="image 2.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-3.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-4.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-5.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-8.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-9.jpg" alt=""/>
                </li>
                <li>
                    <img src="image-10.jpg" alt=""/>
                </li>
            </ul>
                </div>
            <div className="single-recept-container">
                
                <div className="recept-box">
                    <div className="left-box">
                        <div className="recept-title">
                            <h2>{singleRecipe.title}</h2>
                        </div>
                        
                        <div className="recept-description">
                            <p>{singleRecipe.description}</p>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                            <br />
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                            </p> */}
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="rate-box">
                        <ReactStars count={5} size={16} activeColor='#ffd700' value={singleRecipe?.rating}/>
                        </div>
                        <div className="ingredients-box">
                            <h3>
                            Ingredients
                            </h3>
                        </div>
                        <div className="ingredients-text">
                            <ul>
                                {singleRecipe.ingredients?.map(item =>{
                                    return <li>{item}</li>
                                })}
                                
                                {/* <li>1 pound breakfast sausage</li>
                                <li>¾ cup chopped onion</li>
                                <li>1 ½ cups finely diced celery</li>
                                <li>¾ cup margarine, melted</li>
                                <li>8 cups white bread cubes</li>
                                <li>3 teaspoons poultry seasoning</li>
                                <li>¼ teaspoon ground black pepper</li> */}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment-title">
                        <h2>Comments</h2>
                    </div>
                    <div className="comment-form">
                        <form>
                            <div className="name-email-box">
                                <input className="name-input" type="text" placeholder="Your Name"/>
                                <input className="email-input" type="text" placeholder="Your Email"/>
                            </div>
                            <textarea class="comment-textarea" type="textbox" placeholder="comment"/>
                            <div className="send-btn-box"><button className="send-btn">Send</button></div>
                           
                        </form>
                    </div>
                    <div className="comments-show">
                        <h2>Comments</h2>
                        <ul className="comment-user-box">
                            <li>
                                <h5>User 1</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                </p>
                            </li>
                            <li>
                                <h5>User 1</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                </p>
                            </li>
                            <li>
                                <h5>User 1</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}