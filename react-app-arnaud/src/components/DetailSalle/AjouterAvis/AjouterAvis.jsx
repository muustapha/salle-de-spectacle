import React from 'react';
import styles from './AjouterAvis.module.css';

function AjouterAvis({ role }) {
    return (
        !role ? 
        <div className={styles.ajouterAvis}>
            <button className={styles.bouton}>Ajouter un avis</button>
        </div>
        : null
    );
}

export default AjouterAvis;