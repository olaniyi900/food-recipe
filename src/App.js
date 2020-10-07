import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';


// This is the main app which hold all the component.
const  App = ()=> {

  // placing the id and api key in an .env file the retrieving it with procees.env
  const APP_ID = process.env.REACT_APP_ID;

  const APP_KEY = process.env.REACT_APP_KEY;

  // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // Setting recipes array  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('chicken')

  useEffect( ()=>{

    getRecipe()

  },[ query ]);

  // Using async and await to pull the data from api 
  const getRecipe = async ()=>{

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    // setting the recipe array from api
    setRecipes(data.hits);
  }


  // get every key stroke from the input 
  const updateSearch = e =>{
    setSearch(e.target.value)
  }
 

  // get the input value fron the input.
  const getSearch = e =>{

    e.preventDefault();

    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
        <h1 className="heading">Food App</h1>
        <form className="search-form" onSubmit={ getSearch }>
          <input className="search-bar" 
          type="text" 
          value={search} onChange={ updateSearch }/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className='recipes'>
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label}

            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
       </div>
    </div>
  );
}

export default App;
