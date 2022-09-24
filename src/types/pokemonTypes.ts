export interface IPokemonState {
    pokemons: ISinglePokemon[]
    pokemonLoading: boolean
    pokemonError: null | string
}

export interface ISinglePokemon {
    abilities?: any
    base_experience: number
    forms?: any[]
    game_indices?: any[]
    height: number
    held_items?: any[]
    id: number
    is_default?: boolean
    location_area_encounters?: string
    moves?: any[]
    name: string
    order?: number
    past_types?: any[]
    species?: any
    sprites: {
        back_default?: string
        back_female?: null
        back_shiny?: string
        back_shiny_female?: null
        front_default: string
    }
    stats?: IStats[]
    types: IPokemonType[]
    weight: number
}

export interface IPokemonType {
    slot: number
    type: {
        name: string
        url?: string
    }
}

export interface IStats {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export enum getPokemonActionTypes {
    GET_POKEMON = 'GET_POKEMON',
    GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS',
    GET_POKEMON_ERROR = 'GET_POKEMON_ERROR'
}

export interface IGetPokemonActionType {
    type: getPokemonActionTypes.GET_POKEMON
}

export interface IGetPokemonSuccessActionType {
    type: getPokemonActionTypes.GET_POKEMON_SUCCESS
    payload: any[]
}

export interface IGetPokemonErrorActionType {
    type: getPokemonActionTypes.GET_POKEMON_ERROR
    payload: string
}

export type PokemonActionTypes = IGetPokemonActionType | IGetPokemonSuccessActionType | IGetPokemonErrorActionType