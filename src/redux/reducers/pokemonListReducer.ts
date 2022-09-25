import {IAction} from "../../types/types";
import {getPokemonListActionsType, IPokemonListState} from "../../types/pokemonListTypes";

const initialState: IPokemonListState = {
    pokemonList: [],
    loading: false,
    error: null
}

export const pokemonListReducer = (state = initialState, action: IAction): IPokemonListState => {
    switch (action.type) {
        case getPokemonListActionsType.FETCH_POKEMON_LIST:
            return {
                ...state,
                loading: true,
                error: null,
                pokemonList: []
            }
        case getPokemonListActionsType.FETCH_POKEMON_LIST_SUCCESS :
            return {
                ...state,
                loading: false,
                error: null,
                pokemonList: action.payload
            }
        case getPokemonListActionsType.FETCH_POKEMON_LIST_ERROR :
            return {
                ...state,
                loading: false,
                error: action.payload,
                pokemonList: []
            }
        default:
            return state
    }
}