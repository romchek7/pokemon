import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import styles from "../PokemonList.module.css";
import {IPokemonType} from "../../../types/pokemonTypeTypes";
import {useFormik} from "formik";

type PokemonTypeProps = {
    types: IPokemonType[]
    setpokemonByFilterUrl:  React.Dispatch<React.SetStateAction<string>>
    typesInputValue: string
    setTypesInputValue: React.Dispatch<React.SetStateAction<string>>
    setLimit: React.Dispatch<React.SetStateAction<number>>
}

const PokemonTypeForm: React.FC <PokemonTypeProps> = ({types, setpokemonByFilterUrl, typesInputValue, setTypesInputValue, setLimit}) => {
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const type = e.currentTarget.name
        const checked = e.currentTarget.checked

        if (checked) {
            setLimit(12)
            const pokemonType = types.filter(t => t.name === type)
            setpokemonByFilterUrl(pokemonType[0].url)
            setTypesInputValue(type)
        }
        else {
            setpokemonByFilterUrl('')
            setTypesInputValue('')
            setLimit(12)
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
                                       checked={typesInputValue === type.name ? true : false}
                                       onChange={handleChange}
                                       className={styles.boxType}/> {type.name}
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}

export default PokemonTypeForm