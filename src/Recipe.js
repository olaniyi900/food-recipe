import React from 'react';

const Recipe = ({ title, calories, image,  ingredients })=>{

    // style for recipe component
    let recipeStyle = {
        maxWidth:"20rem",
        padding: "1rem 1rem",
        margin: "1rem 1rem",
        border: "1px solid green",
        borderRadius: "0.5rem"
    }


    return(

        <div style={recipeStyle}>
            <h3 style={{textAlign:"center"}}>{title}</h3>
            <ol>{ ingredients.map( ingredient =>(
                <li key={ingredients.indexOf(ingredient)}>{ingredient.text}</li>
            ))}</ol>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );

}

export default Recipe;