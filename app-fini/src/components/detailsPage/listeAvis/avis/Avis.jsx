import style from './Avis.module.css'

const Avis = ({ date, note }) => {

  const dateObject = new Date(date);

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("fr-FR", options);

  return (
    <>
      <div className={style.div}>
        <p className={style.p}><strong>{note} / 10</strong></p>
        <p>{formattedDate}</p>
      </div>
    </>
  );
};

export default Avis;
