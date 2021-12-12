import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router';
import { getRecipe } from '../services/recipeService';

export const SingleRecipe = () => {
    const [recipe, setRecipe] = useState(undefined)
    const { id } = useParams()

    useEffect(async () => {
        const recipe = await getRecipe(id);
        setRecipe(recipe);
    }, [])

    return (
        <div className="SingleRecipe">
            <div className="row bg-secondary p-2">
                <div className="col p-1"><img className="rounded shadow-sm" src="image 2.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-3.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-4.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-5.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-8.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-9.jpg" alt="" /></div>
                <div className="col p-1"><img className="rounded shadow-sm" src="image-10.jpg" alt="" /></div>
            </div>
            {recipe ?
                <div className="single-recept-container">

                    <div className="recept-box">
                        <div className="left-box">
                            <div className="recept-title">
                                <h2>{recipe.title}</h2>
                            </div>
                            <div className="recept-description">
                                <p>{recipe.description}</p>
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
                                <ReactStars count={5} size={16} activeColor='#ffd700' value={recipe?.rating} />
                            </div>
                            <div className="ingredients-box">
                                <h6>
                                    Ingredients
                                </h6>
                            </div>
                            <div className="ingredients-text">
                                <ul>
                                    {recipe.ingredients?.map(item => {
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
                            <h4>Comments</h4>
                        </div>
                        <div className="comment-form">
                            <form>
                                <div className="name-email-box">
                                    <input className="name-input form-control" type="text" placeholder="Your Name" />
                                    <input className="email-input form-control" type="text" placeholder="Your Email" />
                                </div>
                                <textarea class="comment-textarea form-control" type="textbox" placeholder="comment" />
                                <div className="send-btn-box"><button className="member-btn send-btn">Send</button></div>

                            </form>
                        </div>
                        <div className="comments-show">
                            <h4>Comments</h4>
                            <ul className="comment-user-box">
                                <li>
                                    <h6 className="p-2">User 1</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                    </p>
                                </li>
                                <li>
                                    <h6 className="p-2">User 1</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                    </p>
                                </li>
                                <li>
                                    <h6 className="p-2">User 11</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio facilisis elementum etiam risus massa etiam ut. Urna mauris dignissim nam suspendisse consequat. Cursus justo, blandit convallis morbi lectus. Non nullam penatibus dignissim tortor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <img src="loading.svg"></img>
            }
        </div>
    )
}