import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import style from './ErreurRedirection.module.css';

const ErreurRedirection = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Erreur 404</h1>
            <p className={style.text}>
                La page que vous demandez n'existe pas ou a été déplacée.
            </p>
            <Link to="/" className={style.bouton}><FontAwesomeIcon icon={faHome} /></Link>
        </div>
    );
}

export default ErreurRedirection;