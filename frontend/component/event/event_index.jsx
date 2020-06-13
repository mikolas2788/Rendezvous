import React, { useState, useEffect } from 'react'
import EventIndexItem from './event_index_item'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const EventIndex = () => {
    let formattedDate = dateformatter(new Date())
    let today = utils().getToday()
    const [ selectedDay, setSelectedDay ] = useState(today)

    function dateFormatter (selectedDay) {
        return today.month + " " + today.day
    }

    function dateformatter(date) {
        let splitDate = date.toDateString().split(" ")
        let month = date.toLocaleString('default', { month: 'long' })
        let [day, unused, num] = splitDate;
        return day + ", " + month + " " + num
    }

    return (
        <div className='eventindex-container'>
            <div className='eventindex-left'>
                <h1 className="eventindex-date"> { formattedDate } </h1>
                <EventIndexItem />
            </div>
            <div className='eventindex-right'>
                <Calendar 
                    value={selectedDay}
                    onChange={setSelectedDay}
                    colorPrimary={'#00a2c7'}
                />
            </div>
        </div>
    )
}

export default EventIndex