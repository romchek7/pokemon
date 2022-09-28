import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import styles from "../PokemonList.module.css";
import {IPokemonType} from "../../../types/pokemonTypeTypes";
import {useFormik} from "formik";

type PokemonTypeProps = {
    types: IPokemonType[]
    filters: Map<string, string>
    setFilters:  React.Dispatch<React.SetStateAction<Map<string, string>>>
}

const PokemonTypeForm: React.FC <PokemonTypeProps> = ({types, filters, setFilters}) => {
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const type = e.currentTarget.name
        const checked = e.currentTarget.checked

        if (checked) {
            filters.set(type, type)
            const map = new Map(filters)
            // filtersMap.set(type, type)
            setFilters(map)
        }
        else {
            // filtersMap.delete(type)
            filters.delete(type)
            const map2 = new Map(filters)
            setFilters(map2)
        }
    }


    return (
        <>
            <div className={styles.filterWrapperNames}>
                <p>Pokemon type:</p>
            </div>
            <div className={styles.filterWrapper2}>

                    {types.map(type => <>
                            <div>
                                <input type='checkbox'
                                       id={type.name}
                                       name={type.name}
                                       onChange={handleChange}
                                       className={styles.boxType}/> {type.name}
                            </div>
                        </>
                    )}
                    <button onClick={() => {}}>Filter</button>

            </div>
        </>
    )
}

export default PokemonTypeForm