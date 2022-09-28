export interface IPokemon {
    name: string
    url: string
}

export interface IPokemonByFilter {
    pokemon: IPokemon
    slot: number
}

export interface IPokemonListState {
    pokemonList: IPokemon[] | IPokemonByFilter[] | any[]
    loading: boolean
    error: null | string
}

export enum getPokemonListActionsType {
    FETCH_POKEMON_LIST = 'FETCH_POKEMON_LIST',
    FETCH_POKEMON_LIST_SUCCESS = 'FETCH_POKEMON_LIST_SUCCESS',
    FETCH_POKEMON_LIST_ERROR = 'FETCH_POKEMON_LIST_ERROR',
}

export interface IFetchPokemonList {
    type: getPokemonListActionsType.FETCH_POKEMON_LIST
}

interface IFetchPokemonListSuccess {
    type: getPokemonListActionsType.FETCH_POKEMON_LIST_SUCCESS
    payload: any[]
}

interface IFetchPokemonListError {
    type: getPokemonListActionsType.FETCH_POKEMON_LIST_ERROR
    payload: string
}

export type PokemonListActionType = IFetchPokemonList | IFetchPokemonListSuccess | IFetchPokemonListError