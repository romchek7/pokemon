import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {
    getPokemonListSelector,
    getPokemonSelector,
    getPokemonTypesSelector
} from "../../redux/selectors/pokemonListSelectors";
import usePokemonListDispatch from "../../hooks/PokemonListHooks/usePokemonListDispatch";
import styles from "./PokemonList.module.css";
import Pokemon from "./Pokemon/Pokemon";

const PokemonList: React.FC = () => {
    const {pokemonList, loading, error} = useSelector(getPokemonListSelector)
    const {fetchPokemonList, getPokemon, fetchPokemonTypes} = usePokemonListDispatch()
    const {pokemons, pokemonLoading, pokemonError} = useSelector(getPokemonSelector)
    const {types, loadingTypes, errorTypes} = useSelector(getPokemonTypesSelector)
    const [startLimit, setStartLimit] = useState(12)
    const [limit, setLimit] = useState(startLimit)
    const myRef = useRef() as MutableRefObject<HTMLDivElement>
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})

    useEffect(() => {
        fetchPokemonList(limit)
    }, [limit])

    useEffect(() => {
        if (types.length === 0) {
            fetchPokemonTypes()
        }
    }, [])

    useEffect(() => {
        if (pokemonList.length > 0) {
            pokemonList.forEach(pokemon => getPokemon(pokemon.url))
        }

        if (startLimit < limit) {
            if (myRef.current != null) {
                executeScroll()
                setStartLimit(limit)
            }
        }
    }, [pokemonList])

    const onLoadMore = () => {
        setLimit(limit + 12)
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.mainPokemonlist}>
            <div className={styles.filterWrapper}>
                <div className={styles.filterWrapperNames}>
                    <p>Pokemon type:</p>
                </div>
                <div className={styles.filterWrapper2}>
                    {types.map(type => <>
                            <div><input type='checkbox' className={styles.boxType} placeholder={type.name}/> {type.name}</div>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.pokemons}>
                <div className={styles.pokemonsWrapper}>
                    {pokemonList.map(pokemon => <div className={styles.box}>
                        {
                            pokemons.map(p => p.name === pokemon.name
                                ? <Pokemon pokemon={p}/>
                                : <span></span>)
                        }
                    </div>)}
                </div>
                <div className={styles.loadMore} ref={myRef}>
                    <button className={styles.loadMoreBTN} onClick={() => onLoadMore()}>Load more</button>
                </div>
            </div>
        </div>
    )
}

export default PokemonList