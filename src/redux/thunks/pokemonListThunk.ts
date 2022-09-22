import {Dispatch} from "redux";
import {getPokemonListActionsType, PokemonListActionType} from "../../types/pokemonListTypes";
import {getPokemonAPI} from "../../api/api";

export const fetchPokemonList = (limit: number) => async (dispatch: Dispatch<PokemonListActionType>) => {
    try {
        dispatch({type: getPokemonListActionsType.FETCH_POKEMON_LIST})

        const response = await getPokemonAPI(12)

        if (response.data) {
            dispatch({
                type: getPokemonListActionsType.FETCH_POKEMON_LIST_SUCCESS,
                payload: response.data.results
            })
        }
    }
    catch (e) {
        dispatch({
            type: getPokemonListActionsType.FETCH_POKEMON_LIST_ERROR,
            payload: `${e}`
        })
    }
}