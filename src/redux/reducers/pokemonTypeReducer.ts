import {IAction} from "../../types/types";
import {getPokemonTypesActionType, IPokemonTypeState} from "../../types/pokemonTypeTypes";

const initialState: IPokemonTypeState = {
    types: [],
    loadingTypes: false,
    errorTypes: null
}

const pokemonTypeReducer = (state = initialState, action: IAction): IPokemonTypeState => {
    switch (action.type) {
        case getPokemonTypesActionType.FETCH_POKEMON_TYPE:
            return {
                ...state,
                types: [],
                loadingTypes: true,
                errorTypes: null
            }
        case getPokemonTypesActionType.FETCH_POKEMON_TYPE_SUCCESS:
            return {
                ...state,
                types: action.payload,
                loadingTypes: false,
                errorTypes: null
            }
        case getPokemonTypesActionType.FETCH_POKEMON_TYPE_ERROR:
            return {
                ...state,
                types: [],
                loadingTypes: false,
                errorTypes: action.payload
            }
        default:
            return state
    }
}

export default pokemonTypeReducer