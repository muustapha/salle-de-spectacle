import React from "react";
import styles from "./Evenement.module.css";
import ModifEvent from "../bouttonModifierSupprimer/modifEvent";
import SupprimEvent from "../bouttonModifierSupprimer/supprimeEvent";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';





const Evenement = ({artiste, prix, style, date }) => {

    const { role } = useContext(UserContext);
    let isAdmin = role === 'admin';
    let formattedDate = new Date(date).toLocaleDateString('fr-FR', {
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    });
    return (
        <div className={styles.event}>
            <div className={styles.detailEvent}>
                <div className={styles.detailSalle}></div>
                <p className={styles.Artiste}>{artiste}</p>
                <p className={styles.Prix}>{prix}€</p>
                <p className={styles.Style}>{style}</p>
                <p className={styles.date}>{formattedDate}</p>
            </div>
            <div className={styles.boutonContainer}>
            <ModifEvent role={isAdmin} />
            <SupprimEvent role={isAdmin} />
            </div>
        </div>
    );
}

export default Evenement;