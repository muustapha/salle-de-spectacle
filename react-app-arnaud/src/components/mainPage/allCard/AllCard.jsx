import style from './AllCard.module.css';
import Card from './card/Card';

const AllCard = () => {
    return ( 
    <>
        <div className={style.div}>
            <Card />
        </div>
    </> );
}
 
export default AllCard;