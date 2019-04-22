import React from 'react';
import DateTimePicker from 'react-datetime-picker'
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom'; 

class CreateEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            creator_id: this.props.creatorId, 
            title: '',
            start_time: '',
            end_time: '',
            description: '',
            location: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDayClick = this.handleDayClick.bind(this); 
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createEvent(this.state).then((payload) => {
            return (
                this.props.history.push(`/groups/${payload.group.id}/events`)
            );
        });
    }

    handleUpdate(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    handleDayClick(day, { selected }) {
        this.setState({
            start_time: selected ? undefined : day,
        });
    }

    render () {
        return (
            <div className='ec-strip'>
                <div className='ec-strip-left'>
                    <div className='ec-header'>
                        <h1>Create an event</h1>
                        <p>Group's Name goes here</p>
                    </div>
                    <div className='ec-form-strip'>
                        <form className='ec-form' onSubmit={this.handleSubmit}>
                            <div className='ec-inputs'>
                                <div className='ec-input'>
                                    <label>
                                        Title
                                        <input 
                                            className='ec-input-box'
                                            onChange={this.handleUpdate('location')}
                                            type="text"
                                            value={this.state.location}
                                        />
                                    </label>
                                </div>
                                <div className='ec-input'>
                                    <label>
                                        Start
                                        <DayPicker
                                            start_time={this.state.start_time}
                                            onDayClick={this.handleDayClick}
                                        />
                                        <input 
                                            className='ec-input-box'
                                            onChange={this.handleUpdate('start_time')}
                                            type="time"
                                            value={this.state.start_time}
                                        />
                                    </label>
                                </div>
                                <div className='ec-input'>
                                    <label>
                                        End
                                        <DayPicker
                                            end_time={this.state.end_time}
                                            onDayClick={this.handleDayClick}
                                        />
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className='ec-strip-right'>

                </div>
            </div>
        )
    }
}

export default withRouter (CreateEventForm); 