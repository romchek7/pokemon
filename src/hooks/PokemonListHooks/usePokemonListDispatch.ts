import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PokemonListThunks from "../../redux/thunks/pokemonListThunk";

const usePokemonListDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PokemonListThunks, dispatch)
}

export default usePokemonListDispatch