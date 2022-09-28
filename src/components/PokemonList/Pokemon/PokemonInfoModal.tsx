import React from "react";
import styles from "../PokemonList.module.css";
import {ISinglePokemon, IStats} from "../../../types/pokemonTypes";

type PokemonInfoProps = {
    pokemon: ISinglePokemon
    isShowInfo: boolean
    onClosePokemonInfo: () => void
}

const PokemonInfoModal: React.FC<PokemonInfoProps> = ({pokemon, isShowInfo, onClosePokemonInfo}) => {
    return (
        <div className={isShowInfo ? styles.pokemonInfoModal : styles.notActive}
             onClick={() => {
                 onClosePokemonInfo()
             }}>
            <div className={styles.infoBlock}>
                <div>
                    <img className={styles.pokemonImg} src={pokemon.sprites.front_default}/>
                </div>
                <p className={styles.name}>{pokemon.name} #{pokemon.id}</p>
                <table className={styles.table}>
                    <tr>
                        <th>Type</th>
                        <td>
                            {pokemon.types.map(type => <p>{type.type.name}</p>)}
                        </td>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'attack' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>Defense</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'defense' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>HP</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'hp' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>SP Attack</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'special-attack' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>SP Defense</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'special-defense' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <td>
                            {pokemon.stats?.map(stat => stat.stat.name === 'speed' ? stat.base_stat : '')}
                        </td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>
                            <p>{pokemon.height}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>
                            <p>{pokemon.weight}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Total moves</th>
                        <td>
                            <p>{pokemon.moves?.length}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default PokemonInfoModal