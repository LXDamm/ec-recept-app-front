import { useState } from "react";
import axios from "axios";
import account from "../../account/account";

export const AddRecipe = () =>{
    const [formTitle, setFormTitle] = useState(undefined);
    const [formDescription, setFormDescription] = useState(undefined);
    const [formCategory, setFormCategory] = useState(undefined);
    const [formInstruction, setFormInstruction] = useState(undefined);
    const [formIngredient, setFormIngredient] = useState(undefined);
/* 
    const [categories, setCategories] = useState(); */
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    
    /* const addCategoryItemToList = (event, value) => {
        event.preventDefault();
        setCategories([...categories, value]);
    }; */
    const addIngredientItemToList = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setIngredients([...ingredients, formIngredient]);
            e.target.value="";

        }
    };
    const addInstructionItemToList = (e) => {
        
        if (e.key === 'Enter') {
            e.preventDefault();
            setInstructions([...instructions, formInstruction]);
            e.target.value="";
        }
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        account.login(account.email, 'password');
        
        axios.post(`http://127.0.0.1:3030/recipe`,{
            token: account.token,
            title: formTitle,
            description: formDescription,
            categories: formCategory,
            ingredients: ingredients,
            instruction: instructions,
        })

    };
    return(
        <div className="mt-4">
            <h3>Add Your Recipe</h3>
            <form  onSubmit={handleSubmitForm}>
                <div className="row py-4">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Matnamn" onChange={e => setFormTitle(e.target.value)}/>
                            <label for="floatingInput">Matnamn</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control text-box" placeholder="Beskrivning" id="floatingTextarea2" onChange={e => setFormDescription(e.target.value)} ></textarea>
                            <label for="floatingTextarea2">Beskrivning</label>
                        </div>

                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example"  onChange={e => setFormCategory(e.target.value)}>
                                <option selected>välj matkategori</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Sandwich">Sandwich</option>
                                <option value="Burgers">Burgers</option>
                                <option value="Salad">Salad</option>
                                <option value="Kebab">Kebab</option>
                                <option value="Middle Eastern">Middle Eastern</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Chiken">Chicken</option>
                            </select>
                            <label for="floatingSelect">Kategorier</label>
                        </div>

                        

                        {/* <div className="form-floating input-group mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Ingredienter"  aria-describedby="button-addon2" />
                            <label for="floatingInput">Ingredienter</label>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Lägg till</button>
                        </div> */}

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Ingredienter"  onChange={e => setFormIngredient(e.target.value)} onKeyDown={addIngredientItemToList}/>
                            <label for="floatingInput">Ingredienser</label>
                            <ul className="d-flex list-unstyled flex-wrap">
                                {ingredients.map(item =>{
                                    return(
                                        <li className="p-2 px-3 bg-secondary my-2 mx-1 rounded-pill opacity-50">
                                            {item}
                                        </li>
                                    )
                                }) }
                            </ul>
                        </div>
                        
                        
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Steps"  onChange={e => setFormInstruction(e.target.value)} onKeyDown={addInstructionItemToList}/>
                            <label for="floatingInput">Steps</label>
                            <ul className="d-flex flex-column list-unstyled flex-wrap">
                                <ol>
                                    {instructions.map(item =>{
                                        return(
                                            <li className="p-1 my-2 rounded-pill opacity-50">
                                                {item}
                                            </li>
                                        )
                                    }) }
                                </ol>
                            </ul>
                        </div>
                        

                    
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}