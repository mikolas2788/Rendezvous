import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

class EventIndex extends React.Component {

    constructor (props) {
        super (props) 

    }

    render () {

        return (
            <div className='eventindex-main'>
                <h1> Available Events </h1>
                <div className='eventindex-strip'>
                    <Calendar />
    
                </div>
            </div>
        )
    }
}

export default EventIndex