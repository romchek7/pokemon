import React, {Dispatch, SetStateAction, useState} from "react";
import styles from "../PokemonList.module.css";
import {IPokemonType} from "../../../types/pokemonTypeTypes";
import {useFormik} from "formik";

type PokemonTypeProps = {
    types: IPokemonType[]
    filters: string[]
    setFilters: Dispatch<SetStateAction<string[]>>
}

const PokemonTypeForm: React.FC <PokemonTypeProps> = ({types, filters, setFilters}) => {
    const addFilter = (type: boolean, typeName: string) => {
        if (type && typeName.length > 0) {
            setFilters([...filters, typeName])
        }
    }

    const addAllFilters = (values: any) => {
        setFilters([])
        addFilter(values.normal, 'normal')
        addFilter(values.fighting, 'fighting')
        addFilter(values.flying, 'flying')
        addFilter(values.poison, 'poison')
        addFilter(values.ground, 'ground')
        addFilter(values.rock, 'rock')
        addFilter(values.bug, 'bug')
        addFilter(values.ghost, 'ghost')
        addFilter(values.steel, 'steel')
        addFilter(values.fire, 'fire')
        addFilter(values.water, 'water')
        addFilter(values.grass, 'grass')
        addFilter(values.electric, 'electric')
        addFilter(values.psychic, 'psychic')
        addFilter(values.ice, 'ice')
        addFilter(values.dragon, 'dragon')
        addFilter(values.dark, 'dark')
        addFilter(values.fairy, 'fairy')
        addFilter(values.unknown, 'unknown')
        addFilter(values.shadow, 'shadow')
    }

    const formik = useFormik({
        initialValues: {
            normal: false,
            fighting: false,
            flying: false,
            poison: false,
            ground: false,
            rock: false,
            bug: false,
            ghost: false,
            steel: false,
            fire: false,
            water: false,
            grass: false,
            electric: false,
            psychic: false,
            ice: false,
            dragon: false,
            dark: false,
            fairy: false,
            unknown: false,
            shadow: false
        },
        onSubmit: values => {
            addAllFilters(values)
        }
    })

    return (
        <>
            <div className={styles.filterWrapperNames}>
                <p>Pokemon type:</p>
            </div>
            <div className={styles.filterWrapper2}>
                <form onSubmit={formik.handleSubmit}>
                    {types.map(type => <>
                            <div>
                                <input type='checkbox'
                                       id={type.name}
                                       name={type.name}
                                       onChange={formik.handleChange}
                                       className={styles.boxType}/> {type.name}
                            </div>
                        </>
                    )}
                    <button type='submit'>Filter</button>
                </form>
            </div>
        </>
    )
}

export default PokemonTypeForm