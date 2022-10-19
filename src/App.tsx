import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PokemonList from "./components/PokemonList/PokemonList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path='/' element={<PokemonList/>}/>
            <Route path='/pokemon' element={<PokemonList/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
