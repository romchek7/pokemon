import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"

interface ILinkNavigation {
    toPath: string
    text: string
}

const LinkNavigation = (props: ILinkNavigation) => {
    return (
        <Link to={props.toPath}>
            <div className={styles.link}>
                {props.text}
            </div>
        </Link>
    )
}

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <LinkNavigation toPath={'/pokemon'} text='Pokemon'/>
            <LinkNavigation toPath={'/pokemonlist'} text='Pokemon list'/>
        </nav>
    )
}

export default Navigation