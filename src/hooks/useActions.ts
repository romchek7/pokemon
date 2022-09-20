import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PokemonActionCreators from '../store/actionCreators/pokemon'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PokemonActionCreators, dispatch)
}