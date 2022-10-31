import React, { useState } from "react";
import axios from "axios";

const Cocktail = () => {
   const [cocktail, setCocktail] = useState("");
   const [ingredients, setIngredients] = useState([]);
   const [isPicked, setIsPicked] = useState(false);

   const options = {
      method: 'GET',
      url: process.env.REACT_APP_COCKTAIL_URL,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
   }; 
   
   const getCocktail = async () => {
      await axios.request(options)
         .then(response => {            
            const { strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15 } = response.data.drinks[0];

            setCocktail(strDrink);

            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15].filter(item => {
               return item !== null
            })

            setIngredients(ingredients);         
         })
         .catch(error => console.log(error));
   }

   return (
      <div className="card">
         <button className="button" onClick={() => {
            getCocktail();
            setIsPicked(true);
         }}>
            <span>Pick the cocktail</span>
         </button>
         <h3 className="content">{cocktail}</h3>
         
         { isPicked && 
            <ul>
               <li>Ingredients: </li>
               {ingredients.map((item,index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>            
         }           
      </div>     
   )
}

export default Cocktail;