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
import PokemonTypeForm from "./PokemonTypeForm/PokemonTypeForm";
import {IPokemon, IPokemonByFilter} from "../../types/pokemonListTypes";
import {SearchOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';

const PokemonList: React.FC = () => {
    const {pokemonList, loading, error} = useSelector(getPokemonListSelector)
    const {types, loadingTypes, errorTypes} = useSelector(getPokemonTypesSelector)
    const {pokemons, pokemonLoading, pokemonError} = useSelector(getPokemonSelector)

    const {fetchPokemonList, getPokemon, fetchPokemonTypes} = usePokemonListDispatch()

    const [startLimit, setStartLimit] = useState(12)
    const [limit, setLimit] = useState(startLimit)
    const [typesInputValue, setTypesInputValue] = useState('')

    const [pokemonByFilterUrl, setpokemonByFilterUrl] = useState('')

    const myRef = useRef() as MutableRefObject<HTMLDivElement>
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})

    useEffect(() => {
        fetchPokemonList(limit, pokemonByFilterUrl)
    }, [limit, pokemonByFilterUrl])

    useEffect(() => {
        if (types.length === 0) {
            fetchPokemonTypes()
        }
    }, [])

    useEffect(() => {
        if (pokemonList.length > 0) {
            pokemonList.forEach(pokemon => {
                if ((pokemon as IPokemon).name) {
                    getPokemon(pokemon.url)
                } else if ((pokemon as IPokemonByFilter).pokemon.name) {
                    getPokemon(pokemon.pokemon.url)
                } else {
                    getPokemon(pokemon.url)
                }
            })
        }

        if (startLimit < limit) {
            setStartLimit(limit)
        }
    }, [pokemonList])

    const onLoadMore = () => {
        setLimit(limit + 12)

        setTimeout(() => {
            executeScroll()
        }, 1200)
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
                <PokemonTypeForm types={types} setpokemonByFilterUrl={setpokemonByFilterUrl}
                                 typesInputValue={typesInputValue} setTypesInputValue={setTypesInputValue}
                                 setLimit={setLimit}/>
            </div>
            <div className={styles.pokemons}>
                <div className={styles.pokemonsWrapper}>
                    {pokemons.slice(0, limit).sort((a, b) => a.id - b.id)
                        .map(pokemon => <div className={styles.box}>
                            <Pokemon pokemon={pokemon}/>
                        </div>)}
                </div>
                {pokemons.length >= limit ? <div className={styles.loadMore}>
                    <button className={styles.loadMoreBTN} onClick={() => onLoadMore()}>Load more</button>
                </div> : <span><br/><br/><br/></span>}
                <div ref={myRef}></div>
                <Tooltip>
                    <Button type="primary" shape="circle" icon={<SearchOutlined/>}
                            onClick={() => {window.scrollTo({behavior: 'smooth', top: 0})}} className={styles.goToFiltersBtn}/>
                </Tooltip>
            </div>
        </div>
    )
}

export default PokemonList