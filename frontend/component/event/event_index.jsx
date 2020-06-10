import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

const EventIndex = () => {
    let formattedDate = dateformatter(new Date())
    const [ selectedDay, setSelectedDay ] = useState(formattedDate)
    
    return (
        <div className='eventindex-container'>
            <div className='eventindex-left'>
                <h1> {formattedDate} </h1>
            </div>
            <div className='eventindex-right'>
                <Calendar 
                    // value={selectedDay}
                    onChange={setSelectedDay}
                    colorPrimary={`#00a2c7`}
                />
            </div>
        </div>
    )
}

function dateformatter(date) {
    let splitDate = date.toDateString().split(" ")
    let month = date.toLocaleString('default', { month: 'long' })
    let [day, unused, num] = splitDate;
    return day + ", " + month + " " + num
}

export default EventIndex