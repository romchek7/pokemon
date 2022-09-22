import axios from 'axios';

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/'
})

export const getPokemonAPI = (limit: number) => {
    return pokemonApi.get(`api/v2/pokemon?limit=${limit}`)
}