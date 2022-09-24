import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getPokemonListSelector, getPokemonSelector} from "../../redux/selectors/pokemonListSelectors";
import usePokemonListDispatch from "../../hooks/PokemonListHooks/usePokemonListDispatch";
import styles from "./PokemonList.module.css";
import {IPokemonType} from "../../types/pokemonTypes";
import Pokemon from "./Pokemon/Pokemon";

const PokemonList: React.FC = () => {
    const {pokemonList, loading, error} = useSelector(getPokemonListSelector)
    const {fetchPokemonList, getPokemon} = usePokemonListDispatch()
    const {pokemons, loading: loadingPokemon, error: errorPokemon} = useSelector(getPokemonSelector)

    useEffect(() => {
        fetchPokemonList(12)
    }, [])

    useEffect(() => {
        if (pokemonList.length > 0 && pokemons.length === 0) {
            pokemonList.forEach(pokemon => getPokemon(pokemon.url))
        }
    }, [pokemonList])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.mainPokemonlist}>
            <div className={styles.pokemonsWrapper}>
                {pokemonList.map(pokemon => <div className={styles.box}>
                    {
                        pokemons.map(p => p.name === pokemon.name
                            ? <Pokemon pokemon={p}/>
                            : <span></span>)
                        // pokemons.map(p => p.name === pokemon.name
                        //     ? <div>
                        //         <div>
                        //             {p.types.map((t : IPokemonType) => <div>
                        //                 {t.type.name}
                        //             </div>)}
                        //         </div>
                        //     </div>
                        //     : <span></span>)
                    }
                </div>)}
            </div>
        </div>
    )
}

export default PokemonList