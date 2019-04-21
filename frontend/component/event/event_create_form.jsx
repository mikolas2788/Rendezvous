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
    }

    render () {
        return (
            <div className='ec-strip'>
                <div className='ec-strip-left'>
                    <div className='ec-header'>
                        <h1>Create an event</h1>
                        <p>Group's Name goes here</p>
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div className='ec-strip-right'>

                </div>
            </div>
        )
    }

}