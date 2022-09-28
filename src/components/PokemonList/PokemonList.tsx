import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {
    getPokemonListByFilters,
    getPokemonListSelector,
    getPokemonSelector,
    getPokemonTypesSelector
} from "../../redux/selectors/pokemonListSelectors";
import usePokemonListDispatch from "../../hooks/PokemonListHooks/usePokemonListDispatch";
import styles from "./PokemonList.module.css";
import Pokemon from "./Pokemon/Pokemon";
import PokemonTypeForm from "./PokemonTypeForm/PokemonTypeForm";

const PokemonList: React.FC = () => {
    const {pokemonList, loading, error} = useSelector(getPokemonListSelector)
    const {fetchPokemonList, getPokemon, fetchPokemonTypes} = usePokemonListDispatch()
    const {pokemons, pokemonLoading, pokemonError} = useSelector(getPokemonSelector)
    const {types, loadingTypes, errorTypes} = useSelector(getPokemonTypesSelector)
    const [startLimit, setStartLimit] = useState(12)
    const [limit, setLimit] = useState(startLimit)
    const [filters, setFilters] = useState<Map<string, string>>(new Map())
    // const filtersMap = new Map()
    const myRef = useRef() as MutableRefObject<HTMLDivElement>
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})
    let pokemonsByFilter = useSelector(getPokemonListByFilters(filters))

    console.log(filters)

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
                <PokemonTypeForm types={types}
                                 filters={filters}
                                 setFilters={setFilters}/>
            </div>
            <div className={styles.pokemons}>
                <div className={styles.pokemonsWrapper}>
                    {pokemonsByFilter.sort((a, b) => a.id - b.id)
                        .map(pokemon => <div className={styles.box}>
                        <Pokemon pokemon={pokemon}/>
                    </div>)}
                </div>
                {pokemonsByFilter.length >= 12 ? <div className={styles.loadMore} ref={myRef}>
                    <button className={styles.loadMoreBTN} onClick={() => onLoadMore()}>Load more</button>
                </div> : <span><br/><br/><br/></span>}
            </div>
        </div>
    )
}

export default PokemonList