import {IPokemonAction, IPokemonState, PokemonActionTypes} from "../../types/pokemonType";

const initialState: IPokemonState = {
    pokemons: [],
    loading: false,
    error: null
}

export const pokemonReducer = (state = initialState, action: IPokemonAction): IPokemonState => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_POKEMONS: {
            return {
                loading: true,
                error: null,
                pokemons: []
            }
        }
        case PokemonActionTypes.FETCH_POKEMONS_SUCCESS: {
            return {
                loading: false,
                error: null,
                pokemons: action.payload
            }
        }
        case PokemonActionTypes.FETCH_POKEMONS_ERROR: {
            return {
                loading: false,
                error: action.payload,
                pokemons: []
            }
        }
        default:
            return state
    }
}