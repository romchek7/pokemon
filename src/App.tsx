import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/pokemonlist' element={<PokemonList/>}/>
        </Routes>
    </div>
  );
}

export default App;
