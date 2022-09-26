import {AppStateType} from "../reducers/rootReducer";
import {createSelector} from "reselect";
import {useState} from "react";

export const getPokemonListSelector = (state: AppStateType) => {
    return state.pokemonListReducer
}

export const getPokemonSelector = (state: AppStateType) => {
    return state.pokemonReducer
}

export const getPokemonTypesSelector = (state: AppStateType) => {
    return state.pokemonTypeReducer
}

const pokemonList = (state: AppStateType) => {
    return state.pokemonReducer.pokemons
}

export const getPokemonListByFilters = (filters: string[]) => {
    return createSelector(pokemonList,
        (pokemons) => {
            if (filters.length > 0) {
                return pokemons.filter(pokemon => pokemon.id > 3 && pokemon.id < 50)
            }
            return pokemons
        })
}