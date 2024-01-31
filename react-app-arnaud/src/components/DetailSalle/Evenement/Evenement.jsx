import React from "react";
import styles from "./Evenement.module.css";
import ModifEvent from "../bouttonModifierSupprimer/modifEvent";
import SupprimEvent from "../bouttonModifierSupprimer/supprimeEvent";

const Evenement = ({artiste, prix, style, date }) => {
    let formattedDate = new Date(date).toLocaleDateString('fr-FR', {
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    });
    return ( <>
        <div className={styles.evenement}>
       
        <p className={styles.Artiste}>{artiste}</p>
        <p className={styles.Prix}>{prix}€</p>
        <p className={styles.Style}>{style}</p>
        <p className={styles.date}>{formattedDate}</p>
        <ModifEvent />
        <SupprimEvent />
 </div></>
    );
}

export default Evenement;