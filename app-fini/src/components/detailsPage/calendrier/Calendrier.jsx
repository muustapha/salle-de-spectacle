import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from "./Calendrier.module.css";


const Calendrier = () => {

    const [date, setDate] = useState(new Date());

    return ( 
    <>
        <div className={styles.calendrier}>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start:</span>{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className='bold'>End:</span> {date[1].toDateString()}
          </p>
        ) : <></>}
      </div>
    </> );
}
 
export default Calendrier;