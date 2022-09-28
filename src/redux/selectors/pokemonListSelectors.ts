import {AppStateType} from "../reducers/rootReducer";
import {createSelector} from "reselect";
import {useState} from "react";
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

const pokemonList = (state: AppStateType) => {
    return state.pokemonReducer.pokemons
}

const haveType = (pokemon: ISinglePokemon, types: Map<string, string>) => {
    let flag = false

    pokemon.types.forEach((type: IPokemonType) => {
        if (types.get(type.type.name)) {
            flag = true
        }
    })

    console.log(flag)

    return flag
}

export const getPokemonListByFilters = (filters: Map<string, string>) => {
    return createSelector(pokemonList,
        (pokemons) => {
            if (filters.size > 0) {
                const pokemonsTest = []

                for (const pokemon of pokemons) {
                    if (haveType(pokemon, filters)) {
                        pokemonsTest.push(pokemon)
                    }
                }

                console.log(pokemonsTest)
                return pokemonsTest


                // pokemons.filter(pokemon => {
                //     if (haveType(pokemon, filters)) {
                //         return pokemon
                //     }
                //     else {
                //         return undefined
                //     }
                // })
                console.log(pokemons)
            }
            return pokemons
        })
}