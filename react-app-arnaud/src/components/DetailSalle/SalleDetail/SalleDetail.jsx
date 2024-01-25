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
                    <h4 className={styles.h4}>SMAC :</h4>
                    <p className={styles.smac}> {smac ? "OUI" : "NON"}</p>
                    <h5 className={styles.h5}>Capacité :</h5>
                    <p className={styles.capacite}>{capacite} Personnes</p>
                    <h6 className={styles.h6}>Styles :</h6>
                    <p className={styles.styles}>{musicStyles.toString()} </p>
                </div>
            </div>
        </>
    );
}

export default SalleDetail;