import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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