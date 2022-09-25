import {combineReducers} from "redux";
import {pokemonListReducer} from "./pokemonListReducer";
import {pokemonReducer} from "./pokemonReducer";
import pokemonTypeReducer from "./pokemonTypeReducer";

const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonReducer,
    pokemonTypeReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer