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
            <div className='ce-strip'>
                <div className='ce-main'>
                    <div className='ce-left'>

                    </div>
                    <div className='ce-right'>

                    </div>
                    <div className='ce-footer'>

                    </div>
                </div>
            </div>
        ) 
    }
}

export default withRouter (CreateEventForm); 