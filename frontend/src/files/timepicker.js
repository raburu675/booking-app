// import {React,useState } from 'react'
// import TimePicker from 'react-time-picker';

// function Timepicker({handleTimeSelect}) {
//     //state to hold the time
//     const [timePopup,setTimePopup] = useState(false)
    
//     //state to hold the time
//     const [value, onChange] = useState('10:00');

//     const [selectedTime, setSelectedTime] = useState('');

//     const handleTimeChange = (e) => {
//         setSelectedTime(e.target.value);
//         handleTimeSelect(e.target.value);
//     };
//   return (
//     <div className='flex flex-col'>
//         <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>Time</label>            
//         <input
//         value={value}
//         readOnly
//         className='py-1 mx-2 border rounded-md outline-none text-center cursor-pointer'
//         />
//         {timePopup && 
//         <TimePicker 
//         onChange={onChange} 
//         value={selectedTime} 
//         className='absolute  mt-14 ml-14 bg-white border border-black rounded-md text-center'
//         />
//         }
//     </div>
//   )
// }
// export default Timepicker;

// import {React,useState} from 'react'
// import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"

// function Timepicker({handleTimeSelect}) {
//     // const [selectedTime, setSelectedTime] = useState('');

//   // const handleTimeChange = (e) => {
//   //   setSelectedTime(e.target.value);
//   //   handleTimeSelect(e.target.value);
//   // };

//   // initialize the value, min and max time
//   const time = (new Date('8/3/2017 10:00 AM'));
//   const minTime = (new Date('8/3/2017 7:00 AM'));
//   const maxTime = (new Date('8/3/2017 4:00 PM'));
//   return (
//     <div className=' relative py-1 mx-2 border rounded-md outline-none text-center cursor-pointer'>
//         <TimePickerComponent 
//         className='h-20 z-40'
//         // selectedTime={selectedTime}  
//         placeholder='select a time'
//         value={time}
//         min={minTime}
//         max={maxTime}
//         step={60}
//          format={'HH:mm'}
//         >
//         </TimePickerComponent>
//     </div>
//   )
// }

// export default Timepicker;