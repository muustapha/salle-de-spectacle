import style from './About.module.css'

/* eslint-disable react/prop-types */
const About = ({ adresseSalle, contactSalle, capacite, smac, styles }) => {
  if (!adresseSalle || Object.keys(adresseSalle).length === 0) {
    // Les données de la salle ne sont pas encore disponibles
    return <p>Chargement...</p>;
  }

  const displayStyle = () => {
    let s = "";
    styles.forEach((element) => {
      s += element + " ";
    });
    return s;
  };

  return (
    <>
      <div className={style.div}>
        <h3 className={style.h3}>Adresse</h3>
        <div>
          {adresseSalle.numero ? (
            <p>
              {adresseSalle.numero} {adresseSalle.voie}
            </p>
          ) : (
            <p>{adresseSalle.voie}</p>
          )}
          <div className={style.divComplementAdresse}>
            <p>{adresseSalle.codePostal}</p>
            <p>{adresseSalle.ville}</p>
          </div>
        </div>
      </div>
      {
        contactSalle ? (
            <div className={style.div}>
                <h3 className={style.h3}>Contact</h3>
                <p>Téléphone : {contactSalle[0].telephone} </p> 
            </div>) : <></>
      }
      <div className={style.div}>
        <h3 className={style.h3}>Capacité</h3>
        <p>{capacite} Personnes</p>
      </div>
      <div className={style.div}>
        <h3 className={style.h3}>SMAC</h3>
        <p>{smac ? "Oui" : "Non"}</p>
      </div>
      <div className={style.div}>
        <h3 className={style.h3}>Styles</h3>
        {displayStyle()}
      </div>
    </>
  );
};
export default About;
