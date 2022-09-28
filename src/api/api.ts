import axios from 'axios';

export const getPokemonsAPI = (limit: number) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
}

export const getPokemonAPI = (url: string) => {
    return axios.get(`${url}`)
}

export const getPokemonTypesAPI = () => {
    return axios.get(`https://pokeapi.co/api/v2/type?limit=999`)
}

export const getPokemonsByTypeAPI = (url: string) => {
    return axios.get(`${url}`)
}