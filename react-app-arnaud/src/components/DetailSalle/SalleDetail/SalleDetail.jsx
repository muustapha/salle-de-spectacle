import styles from "./SalleDetail.module.css";

const SalleDetail = ({nom, adresse, smac, capacite, musicStyles}) => {

    return ( 
        <>
            <h2 className={styles.h2}>{nom}</h2>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    
                    <h3 className={styles.h3}>Adresse :</h3>
                    <p className={styles.adresse}>{adresse.numero} {adresse.voie},</p>
                    <div className={styles.ecart}>
                        <p>{adresse.ville}</p>
                        <p>{adresse.codePostal}</p>
                    </div>
                    <h3 className={styles.h3}>SMAC :</h3>
                    <p className={styles.smac}> {smac ? "OUI" : "NON"}</p>
                    <h3 className={styles.h3}>Capacité :</h3>
                    <p className={styles.capacite}>{capacite} Personnes</p>
                    <h3 className={styles.h3}>Styles :</h3>
                    <p className={styles.styles}>{musicStyles.toString()} </p>
                </div>
            </div>
        </>
    );
}

export default SalleDetail;