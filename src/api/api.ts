import axios from 'axios';

export const getPokemonsAPI = (limit: number) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
}

export const getPokemonAPI = (url: string) => {
    return axios.get(`${url}`)
}