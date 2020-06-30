import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createEvent } from '../../action/event_actions'
import moment from 'moment'
import DatePicker from "react-modern-calendar-datepicker";
import { utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css';
import { displayDate } from './event_create_selectors'

/* TODOS
    - Change start date to be tomorrow instead of today to prevent date/time conflicts
    - Set endDate to match with startDate changes
    - Fix Time Picker styling
*/

const EventCreateForm = () => {
    // { year: 2020, month: 6, day: 30 }
    let today = utils().getToday()
    const tomorrow = getTomorrow()
    const creator_id = useSelector(state => state.session.id);
    const [ state, setState ] = useState(defaultState())
    const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()
    console.log(state)

    function defaultState () {
        return {
            creator_id,
            group_id: null,
            title: "",
            startDate: tomorrow,
            startTime: moment(),
            endDate: tomorrow,
            endTime: moment(),
            details: "",
            location: ""
        }
    }

    debugger 
    
    useEffect (() => {
        updateState('group_id', Number(params.groupId))
    }, [params])

    const updateState = (key, value) => {
        setState({...state, [key]: value})
    }

    const updateDate = (key) => {
        return (value) => {
            updateState(key, value)
        }
    }
    
    function getTomorrow () {
        const tomorrow = moment().add(1, 'days')
        return { 
            year: tomorrow.year(), 
            month: tomorrow.month()+1, 
            day: tomorrow.date()
        } 
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const momentedStartDateTime = momentizeDateTime(state.startDate, state.startTime)
        const momentedEndDateTime = momentizeDateTime(state.endDate, state.endTime)
        let formattedEvent = {...state}
        formattedEvent['start_date'] = momentedStartDateTime
        formattedEvent['end_date'] = momentedEndDateTime
        delete formattedEvent['startDate']
        delete formattedEvent['startTime']
        delete formattedEvent['endDate']
        delete formattedEvent['endTime']
        const createdEvent = await dispatch(createEvent(formattedEvent))
        if ( Boolean(createdEvent) ) {
            history.push(`/groups/${createdEvent.group.id}`)
        }
    }

    function momentizeDateTime (date, time) {
        const momentedDateTime = moment(`${date} ${time}`)
            .format('YYYY-MM-DDTHH:mm:ssZ');
        return momentedDateTime
    }

    const startDateInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            value={displayDate(state.startDate)}
            style={{
                minWidth: '250px',
                padding: '16px',
                fontSize: '1.5rem',
                border: '1px solid #a2a2a2',
                borderRadius: '3px',
                backgroundColor: 'white',
                fontFamily: 'sans-serif',
                fontSize: '16px', 
                color: '#2e3e48',
                textAlign: 'center',
                marginRight: '20px'
            }}
        />
    )

    const endDateInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            value={displayDate(state.endDate)}
            style={{
                minWidth: '250px',
                padding: '16px',
                fontSize: '1.5rem',
                border: '1px solid #a2a2a2',
                borderRadius: '3px',
                backgroundColor: 'white',
                fontFamily: 'sans-serif',
                fontSize: '16px', 
                color: '#2e3e48',
                textAlign: 'center',
                marginRight: '20px'
            }}
        />
    )

    return (
        <div className='ce-strip'>
            <div className='ce-form-strip'>
                <form className='ce-form' >
                    <div className='ce-main'>
                        <div className='ce-left'>
                            <div className='ce-header'>
                                <h1>Create an Event</h1>
                                <p>Group Name Goes Here</p>
                            </div>
                            <div className='ce-input'>
                                <h1>Title (required)</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={ ()=> updateState('title', event.target.value)}
                                    value={ state.title }
                                />
                            </div>
                            <div className='ce-input'>
                                <h1> Start Date and Time</h1>
                                <DatePicker 
                                    value={state.startDate}
                                    onChange={updateDate('startDate')}
                                    minimumDate={tomorrow}
                                    renderInput={startDateInput}
                                />
                                <TimePicker 
                                    use12Hours
                                    inputReadOnly
                                    showSecond={false}
                                    minuteStep={15}
                                    allowEmpty={false}
                                    defaultValue={state.startTime}
                                    value={state.startTime}
                                    onChange={(timeValue) => updateState('startTime', moment(timeValue))}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1> End Date and Time</h1>
                                <DatePicker
                                    value={state.startDate}
                                    onChange={updateDate('endDate')}
                                    minimumDate={state.startDate}
                                    renderInput={endDateInput}
                                />
                                <TimePicker 
                                    use12Hours
                                    inputReadOnly
                                    showSecond={false}
                                    minuteStep={15}
                                    allowEmpty={false}
                                    defaultValue={state.endTime}
                                    value={state.endTime}
                                    onChange={(timeValue) => updateState('endTime', moment(timeValue))}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Description</h1>
                                <p>Let your attendees know what to expect, including the agenda, what they need to bring, and how to find the group.</p>
                                <textarea
                                    className='ce-input-big-box'
                                    onChange={ ()=> updateState('details', event.target.value)}
                                    value={state.description}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Location</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={ ()=> updateState('location', event.target.value)}
                                    value={state.location}
                                />
                            </div>
                        </div>
                        <div className='ce-right'>
                            <div className='ce-tips'>
                                <h1>
                                    Tips for a great event
                                    </h1>
                                <p className='ce-tip-header'>
                                    Be descriptive
                                    </p>
                                <p className='ce-tip'>
                                    A good title immediately gives people an idea of what the event is about.
                                    </p>
                                <p className='ce-tip-header'>
                                    Get organized
                                    </p>
                                <p className='ce-tip'>
                                    Describe things in a clear order so it's easy to digest. Start with an overall description of the event and include a basic agenda, before you move into really specific details.
                                    </p>
                                <p className='ce-tip-header'>
                                    Add an image
                                    </p>
                                <p className='ce-tip'>
                                    Upload a photo or image to give members a better feel for the event.
                                    </p>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <div className='ce-footer'>
                <input
                    className='ce-submit'
                    type="submit"
                    value='Publish' 
                    onClick={handleSubmit}
                />

                {/* For Cancel, Preview button features
                    <div className='ce-footer-left'>
                    </div>
                    <div className='ce-footer-right'>
                    </div> */}
            </div>
        </div>
    ) 
}

export default EventCreateForm
