import React, {useEffect, useState} from 'react';
import './App.css';
import Receipe from "./Receipe";


const App= () =>{

  const APP_ID="8d7ce6e0";
  const APP_KEY="e19d8b78ddefaa6ace4f66e71c074c63";


  const[receipe,setReceipe]=useState([]);
  const[search,setSearch]=useState("");
  const[query,setQuery]=useState('chicken');

  useEffect(()=>{
     getRecipes();
  },[query]);

  const getRecipes = async ()=>{
      const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setReceipe(data.hits);
  };

  const updateSearch = e =>{
      setSearch(e.target.value);

  }

  const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }


  return(
      <div className="App">
  <form onSubmit={getSearch} className="serch-form">
      <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
      <button type="submit" className="search-button">Search</button>
  </form>
       <div className="recipe">
           {receipe.map( receipe =>(
               <Receipe title={receipe.recipe.label}
                        calories={receipe.recipe.calories}
                        image={receipe.recipe.image}
                        ingredients={receipe.recipe.ingredients}
               />
           ))}

       </div>

      </div>
  );
};

export default App;



