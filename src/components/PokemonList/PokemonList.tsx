import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getPokemonListSelector} from "../../redux/selectors/pokemonListSelectors";
import usePokemonListDispatch from "../../hooks/PokemonListHooks/usePokemonListDispatch";
import styles from "./PokemonList.module.css";

const PokemonList: React.FC = () => {
    const {pokemonList, loading, error} = useSelector(getPokemonListSelector)
    const {fetchPokemonList} = usePokemonListDispatch()

    useEffect(() => {
        fetchPokemonList(12)
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.mainPokemonlist}>
            <div className={styles.pokemonsWrapper}>
                {pokemonList.map(pokemon => <div className={styles.box}>
                    {pokemon.name}
                </div>)}
            </div>
        </div>
    )
}

export default PokemonList