export interface IPokemonType {
    name: string
    url: string
}

export interface IPokemonTypeState {
    types: IPokemonType[]
    loadingTypes: boolean
    errorTypes: string | null
}

export enum getPokemonTypesActionType {
    FETCH_POKEMON_TYPE = 'FETCH_POKEMON_TYPE',
    FETCH_POKEMON_TYPE_SUCCESS = 'FETCH_POKEMON_TYPE_SUCCESS',
    FETCH_POKEMON_TYPE_ERROR = 'FETCH_POKEMON_TYPE_ERROR'
}

interface IFetchPokemonType {
    type: getPokemonTypesActionType.FETCH_POKEMON_TYPE
}

interface IFetchPokemonTypeSuccess {
    type: getPokemonTypesActionType.FETCH_POKEMON_TYPE_SUCCESS
    payload: any[]
}

interface IFetchPokemonTypeError {
    type: getPokemonTypesActionType.FETCH_POKEMON_TYPE_ERROR
    payload: string
}

export type PokemonTypeActionTypes = IFetchPokemonType | IFetchPokemonTypeSuccess | IFetchPokemonTypeError