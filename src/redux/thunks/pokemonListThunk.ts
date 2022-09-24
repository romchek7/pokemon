import {Dispatch} from "redux";
import {getPokemonListActionsType, PokemonListActionType} from "../../types/pokemonListTypes";
import {getPokemonAPI, getPokemonsAPI} from "../../api/api";
import {getPokemonActionTypes, PokemonActionTypes} from "../../types/pokemonTypes";

export const fetchPokemonList = (limit: number) => {
    return async (dispatch: Dispatch<PokemonListActionType>) => {
        try {
            dispatch({type: getPokemonListActionsType.FETCH_POKEMON_LIST})

            const response = await getPokemonsAPI(12)

            if (response.data) {
                dispatch({
                    type: getPokemonListActionsType.FETCH_POKEMON_LIST_SUCCESS,
                    payload: response.data.results
                })
            }
        } catch (e) {
            dispatch({
                type: getPokemonListActionsType.FETCH_POKEMON_LIST_ERROR,
                payload: `${e}`
            })
        }
    }
}

export const getPokemon = (url: string) => {
    return async (dispatch: Dispatch<PokemonActionTypes>) => {
        try {
            dispatch({
                type: getPokemonActionTypes.GET_POKEMON
            })

            const response = await getPokemonAPI(url)

            if (response.data) {
                dispatch({
                    type: getPokemonActionTypes.GET_POKEMON_SUCCESS,
                    payload: response.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getPokemonActionTypes.GET_POKEMON_ERROR,
                payload: `${e}`
            })
        }
    }
}