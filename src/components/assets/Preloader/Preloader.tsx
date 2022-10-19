import React from "react";
import styles from "./Preloader.module.css";
import loader from "../../../assets/img/loader.gif";

const Preloader = () => {
    return (
        <div className={styles.main}>
            <img src={loader}/>
        </div>
    )
}

export default Preloader