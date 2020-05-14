import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Details from './Details';

const Recipes = () => {
  const APP_ID = "04a74ae3";
  const APP_KEY = "e50670269f96e12325ba25b4d81608a9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    //setSearch('');
  }

  return (
    <div className="recipes-back">
      <Helmet><title>YGBC- Recipes</title></Helmet>
      <div className="recipes-container">
        <h1>Best Recipes Guide</h1>
        <form onSubmit={getSearch} className="r-search-form">
          <input
            className="r-search-bar"
            type="text"
            placeholder="Type an ingredient or the recipe you want..."
            value={search}
            onChange={updateSearch}
          />
          <button className="r-search-button" type="submit">Search</button>
        </form>
        <div className="r-recipes">
          {recipes.map(recipe =>(
            <Details
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipes;
