import styles from "./Avis.module.css";

function Avis({ date, note }) {
  console.log (date)
  let formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric'
});

    return (
      <>         
      {/* <p className={styles.title}>Avis : </p>  */}
      
        <div className={styles.avis}>                      
                      <p className={styles.note}>Note : {note}/10 </p>           
                    <p className={styles.date}>Date : {formattedDate}</p>
                   
                </div>
            
        </>
    );
}








export default Avis;