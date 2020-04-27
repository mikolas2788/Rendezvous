import React from 'react';
// import DateTimePicker from 'react-datetime-picker'
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
        this.props.createEvent(this.state).then((promise) => {
            return (
                this.props.history.push(`/groups/${promise.group.id}/events`)
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
            <div className='ce-strip'>
                <div className='ce-form-strip'>
                    <form className='ce-form' onSubmit={this.handleSubmit}>
                        <div className='ce-left'>
                            <div className='ce-header'>
                                <h1>Create an Event</h1>
                                <p>Group Name Goes Here</p>
                            </div>
                            <div className='ce-input'>
                                <h1>Title (required)</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={this.handleUpdate('title')}
                                    value={this.state.title}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Date and Time</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={this.handleUpdate('date')}
                                    value={this.state.date}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Duration</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={this.handleUpdate('time')}
                                    value={this.state.time}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Description</h1>
                                <p>Let your attendees know what to expect, including the agenda, what they need to bring, and how to find the group.</p>
                                <textarea
                                    className='ce-input-big-box'
                                    onChange={this.handleUpdate('description')}
                                    value={this.state.description}
                                />
                            </div>
                            <div className='ce-input'>
                                <h1>Location</h1>
                                <input
                                    className='ce-input-box'
                                    onChange={this.handleUpdate('location')}
                                    value={this.state.location}
                                />
                            </div>
                        </div>
                        <div className='ce-right'>
                            <div className='ce-tips'>
                                <h1>
                                    Tips for a great event
                                </h1>
                                <h3>
                                    Be descriptive
                                </h3>
                                <p>
                                    A good title immediately gives people an idea of what the event is about.
                                </p>
                                <h3>
                                    Get organized
                                </h3>
                                <p>
                                    Describe things in a clear order so it's easy to digest. Start with an overall description of the event and include a basic agenda, before you move into really specific details.
                                </p>
                                <h3>
                                    Add an image
                                </h3>
                                <p>
                                    Upload a photo or image to give members a better feel for the event.
                                </p>
                            </div>
                        </div>
                        <div className='ce-footer'>
                            <div className='ce-footer-left'>

                            </div>
                            <div className='ce-footer-right'>

                            </div>

                        </div>

                    </form>
                </div>
            </div>
        ) 
    }
}

export default withRouter (CreateEventForm); 