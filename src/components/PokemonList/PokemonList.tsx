import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchPokemons} from "../../store/actionCreators/pokemon";
import {useActions} from "../../hooks/useActions";

const PokemonList: React.FC = () => {
    const {pokemons, loading, error} = useTypedSelector(state => state.pokemon)

    const {fetchPokemons} = useActions()

    useEffect(() => {
        fetchPokemons()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {pokemons.map(pokemon => <div>{pokemon.name}</div>)}
        </div>
    )
}

export default PokemonList