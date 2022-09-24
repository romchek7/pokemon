import React, {useEffect, useState} from "react";
import styles from "../PokemonList.module.css";
import {ISinglePokemon} from "../../../types/pokemonTypes";
import PokemonInfoModal from "./PokemonInfoModal";

type PokemonProps = {
    pokemon: ISinglePokemon
}

const Pokemon: React.FC<PokemonProps> = ({pokemon}) => {
    const [isShowInfo, setIsShowInfo] = useState(false)

    const onShowPokemonInfo = () => {
        setIsShowInfo(true)
    }

    const onClosePokemonInfo = () => {
        setIsShowInfo(false)
    }

    return (
        <div className={styles.pokemonInfo}>
            <div>
                <img src={pokemon.sprites.front_default}/>
            </div>
            <p className={styles.name}>{pokemon.name}</p>
            <div className={styles.types}>
                {pokemon.types.map(type =>
                    <p className={type.type.name === 'grass' ? styles.typeGrass
                        : type.type.name === 'poison' ? styles.typePoison :
                            type.type.name === 'fire' ? styles.typeFire :
                                type.type.name === 'water' ? styles.typeWater :
                                    type.type.name === 'flying' ? styles.typeFlying :
                                        type.type.name === 'bug' ? styles.typeBug :
                                            styles.anotherType
                    }>
                {type.type.name}
            </p>)}</div>
            <div className={styles.pokemonInfoShow}>
                <PokemonInfoModal pokemon={pokemon} isShowInfo={isShowInfo} onClosePokemonInfo={onClosePokemonInfo}/>
                <button className={styles.showInfoBTN} onClick={() => {onShowPokemonInfo()}}>Show info</button>
            </div>
        </div>
    )
}

export default Pokemon