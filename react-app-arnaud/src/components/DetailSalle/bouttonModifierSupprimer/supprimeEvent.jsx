import React from 'react';
import styles from './supprimeEvent.module.css';

function SupprimEvent() {
    return (
        <div className={styles.supprimEvent}>
            <button className={styles.bouton}>supprimer évènement</button>
        </div>
    );
}

export default SupprimEvent;