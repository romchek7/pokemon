import {IPokemonAction, PokemonActionTypes} from "../../types/pokemonType";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchPokemons = () => {
    return async (dispatch: Dispatch<IPokemonAction>) => {
        try{
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS
            })

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)

            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
                payload: response.data.results
            })
        }
        catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS,
                payload: 'Error: can\'t get pokemons...'
            })
        }
    }
}