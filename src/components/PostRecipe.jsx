import { useState } from "react";
import api from "../api/api";

export const PostRecipe = () => {
    const [formTitle, setFormTitle] = useState(undefined);
    const [formDescription, setFormDescription] = useState(undefined);
    const [formCategory, setFormCategory] = useState(undefined);
    const [formInstruction, setFormInstruction] = useState(undefined);
    const [formIngredient, setFormIngredient] = useState(undefined);

    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const renderCategoriesListItems = categories.map((category) => {
        return (<li key={category} className="categories-list-item"><p>{category}</p></li>);
    });
    const renderIngredientsListItems = ingredients.map((ingredient) => {
        return (<li key={ingredient} className="ingredients-list-item"><p>{ingredient}</p></li>);
    });
    const renderInstructionsListItems = instructions.map((instruction) => {
        return (<li key={instruction} className="instruction-list-item"><p>{instruction}</p></li>);
    });

    const addCategoryItemToList = (event, value) => {
        event.preventDefault();
        setCategories([...categories, value]);
    };
    const addIngredientItemToList = (event, value) => {
        event.preventDefault();
        setIngredients([...ingredients, value]);
    };
    const addInstructionItemToList = (event, value) => {
        event.preventDefault();
        setInstructions([...instructions, value]);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const response = await api.postRecipe({
            'title': formTitle,
            'description': formDescription,
            'categories': categories,
            'ingredients': ingredients,
            'instructions': instructions,
            'userId': '1mK87M16ibVhzJeS30rMVdwpT6f1'
        });
    };

    return (
        <div className="PostRecipe">
            <div className="post-recipe-form-container">
                <form className="about-form">
                    <label className="about-form-title">
                        <p>Titel</p>
                        <input required type="text" placeholder="Titel" onChange={event => setFormTitle(event.target.value)} />
                    </label>
                    <label className="about-form-description">
                        <p>Beskrivning</p>
                        <input required type="text" placeholder="Beskrivning" onChange={event => setFormDescription(event.target.value)} />
                    </label>
                </form>
                <form className="categories-form">
                    <label className="categories-form-category">
                        <p>Kategorier</p>
                        <ul>
                            {renderCategoriesListItems}
                        </ul>
                        <input type="text" placeholder="Lägg till kategori" onChange={event => setFormCategory(event.target.value)} />
                        <button onClick={event => addCategoryItemToList(event, formCategory)}>Lägg till</button>
                    </label>
                </form>
                <form className="ingredients-form">
                    <label className="ingredients-form-ingredient">
                        <p>Ingredienter</p>
                        <ul>
                            {renderIngredientsListItems}
                        </ul>
                        <input type="text" placeholder="Lägg till ingredient" onChange={event => setFormIngredient(event.target.value)} />
                        <button onClick={event => addIngredientItemToList(event, formIngredient)}>Lägg till</button>
                    </label>
                </form>
                <form className="ingredients-form">
                    <label className="ingredients-form-ingredient">
                        <p>Steps</p>
                        <ul>
                            {renderInstructionsListItems}
                        </ul>
                        <input type="text" placeholder="Lägg till steg" onChange={event => setFormInstruction(event.target.value)} />
                        <button onClick={event => addInstructionItemToList(event, formInstruction)}>Lägg till</button>
                    </label>
                </form>
                <form onSubmit={event => handleSubmitForm(event)}>
                    <button>Post recipe</button>
                </form>
            </div>
        </div>
    );
};