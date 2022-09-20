export enum PokemonActionTypes {
    FETCH_POKEMONS = 'FETCH_POKEMONS',
    FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
    FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR'
}

export interface IPokemonState {
    pokemons: any[]
    loading: boolean
    error: null | string
}

interface IFetchPokemons {
    type: PokemonActionTypes.FETCH_POKEMONS
}

interface IFetchPokemonsSuccess {
    type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS
    payload: any[]
}

interface IFetchPokemonsError {
    type: PokemonActionTypes.FETCH_POKEMONS_ERROR
    payload: string
}

export type IPokemonAction = IFetchPokemons | IFetchPokemonsSuccess | IFetchPokemonsError