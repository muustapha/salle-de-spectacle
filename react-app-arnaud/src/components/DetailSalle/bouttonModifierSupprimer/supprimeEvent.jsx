import React from 'react';
import styles from './supprimeEvent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function SupprimEvent({ role }) {
    return (
        role ? <button className={styles.bouton}> <FontAwesomeIcon icon={faTrash} /></button> : null
    );
}

export default SupprimEvent;