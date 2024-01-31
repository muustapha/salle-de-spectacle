import React from 'react';
import styles from './modifEvent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function ModifEvent({ role }) {
    return (
        role ? <button className={styles.bouton}> <FontAwesomeIcon icon={faPen} /></button> : null
    );
}

export default ModifEvent;