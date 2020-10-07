import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';



const  App = ()=> {

  const APP_ID = process.env.REACT_APP_ID;

  const APP_KEY = process.env.REACT_APP_KEY;

  // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('chicken')

  useEffect( ()=>{

    getRecipe()

  },[ query ]);

  const getRecipe = async ()=>{

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    setRecipes(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }
 

  const getSearch = e =>{

    e.preventDefault();

    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
        <h3>Food App</h3>
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
