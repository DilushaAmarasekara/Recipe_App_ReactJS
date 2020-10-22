import React from "react";
import './Receipe.css';

const Receipe = ({title,calories,image,ingredients})=>{
    return (
        <div>
            <h1 className="recipe">{title}</h1>
            <p>Calories : {calories}</p>
            <img className="image" src={image} alt={""}/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>

    );
};

export default Receipe;
