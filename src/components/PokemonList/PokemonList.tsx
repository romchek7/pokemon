import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PokemonList: React.FC = () => {
    const {pokemons, loading, error} = useTypedSelector(state => state.pokemon)

    console.log(state)

    return (
        <div>

        </div>
    )
}

export default PokemonList