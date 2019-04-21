import React from 'react';
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
                                        Date and Time
                                        <input 
                                            className='ec-input-box'
                                            onChange={this.handleUpdate('start_time')}
                                            type="date"
                                            value={this.state.start_time}
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
                                        Duration
                                        <input 
                                            className='ec-input-box'
                                            onChange={this.handleUpdate('end_time')}
                                            type="date"
                                            value={this.state.end_time}
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