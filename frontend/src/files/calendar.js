import React, { useEffect,useState } from 'react';
import { Calendar } from 'react-date-range';
import {format} from 'date-fns'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import BookingPage from './bookingPage';


const CalendarComp = ({onDateSelect}) => {
    //have state to gold the calender
    const [open,setOpen] = useState(false)

    //date state
    const [ calendar,setCalendar ] = useState('')

    //useEffect to store the current  date without having to refresh the page
    useEffect(() => {
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
    },[])

    // On date change, store the date in the state and call the onDateSelect callback
    const handleSelect = (date) => {
      const formattedDate = format(date, 'MM/dd/yyyy');
      setCalendar(formattedDate);
      onDateSelect(formattedDate); // Call the callback function with the selected date
    };

  // useEffect to store the current date without having to refresh the page
  useEffect(() => {
    setCalendar(format(new Date(), 'MM/dd/yyyy'));
}, []);

    return(
        <div className='flex flex-col'>
        <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>Check in Date</label>            
        <input
        value={calendar}
        readOnly
        className='py-1 mx-2 border rounded-md outline-none text-center cursor-pointer'
        onClick={ () => setOpen(!open) }
        />

        {open &&
        <Calendar
        date={new Date()}
        onChange={handleSelect}
        className='absolute  mt-14 ml-14 bg-white border border-black rounded-md text-center'
        />
        }
        </div>
    )
}

export default CalendarComp;