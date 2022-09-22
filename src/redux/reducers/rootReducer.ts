import {combineReducers} from "redux";
import {pokemonReducer} from "./pokemonListReducer";

const rootReducer = combineReducers({
    pokemonReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer