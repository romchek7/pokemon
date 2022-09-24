import {IAction} from "../../types/types";
import {getPokemonActionTypes, IPokemonState} from "../../types/pokemonTypes";

const initialState: IPokemonState = {
    pokemons: [],
    loading: false,
    error: null
}

export const pokemonReducer = (state = initialState, action: IAction): IPokemonState => {
    switch (action.type) {
        case getPokemonActionTypes.GET_POKEMON: {
            return {
                ...state,
                loading: true,
                error: null,
                pokemons: []
            }
        }
        case getPokemonActionTypes.GET_POKEMON_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                pokemons: [...state.pokemons, action.payload]
            }
        }
        case getPokemonActionTypes.GET_POKEMON_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                pokemons: []
            }
        }
        default:
            return state
    }
}