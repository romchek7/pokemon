import {AppStateType} from "../reducers/rootReducer";

export const getPokemonListSelector = (state: AppStateType) => {
    return state.pokemonReducer
}