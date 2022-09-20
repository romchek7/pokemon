import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path='/pokemonlist' element={<PokemonList/>}/>
        </Routes>
    </div>
  );
}

export default App;
