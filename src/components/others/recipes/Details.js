import React from 'react';
import style from './recipe.module.css';

const Details = ({title,calories,image,ingredients}) => {
  return(
    <div className="r-details">
      <h2 className={style.recipe}>{title}</h2>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.round(calories)}</p>
      <img src={image} alt=""/>
      <br/><br/><br/><br/>
    </div>
  );
}
export default Details;
