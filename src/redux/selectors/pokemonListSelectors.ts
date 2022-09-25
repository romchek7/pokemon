import {AppStateType} from "../reducers/rootReducer";

export const getPokemonListSelector = (state: AppStateType) => {
    return state.pokemonListReducer
}

export const getPokemonSelector = (state: AppStateType) => {
    return state.pokemonReducer
}

export const getPokemonTypesSelector = (state: AppStateType) => {
    return state.pokemonTypeReducer
}