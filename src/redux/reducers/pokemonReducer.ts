import {IAction} from "../../types/types";
import {getPokemonActionTypes, IPokemonState} from "../../types/pokemonTypes";

const initialState: IPokemonState = {
    pokemons: [],
    pokemonLoading: false,
    pokemonError: null
}

export const pokemonReducer = (state = initialState, action: IAction): IPokemonState => {
    switch (action.type) {
        case getPokemonActionTypes.GET_POKEMON: {
            return {
                ...state,
                pokemonLoading: true,
                pokemonError: null,
                pokemons: []
            }
        }
        case getPokemonActionTypes.GET_POKEMON_SUCCESS: {
            return {
                ...state,
                pokemonLoading: false,
                pokemonError: null,
                pokemons: [...state.pokemons, action.payload]
            }
        }
        case getPokemonActionTypes.GET_POKEMON_ERROR: {
            return {
                ...state,
                pokemonLoading: false,
                pokemonError: action.payload,
                pokemons: []
            }
        }
        default:
            return state
    }
}