import {AppStateType} from "../reducers/rootReducer";
import {createSelector} from "reselect";
import {IPokemonType, ISinglePokemon} from "../../types/pokemonTypes";

export const getPokemonListSelector = (state: AppStateType) => {
    return state.pokemonListReducer
}

export const getPokemonSelector = (state: AppStateType) => {
    return state.pokemonReducer
}

export const getPokemonTypesSelector = (state: AppStateType) => {
    return state.pokemonTypeReducer
}