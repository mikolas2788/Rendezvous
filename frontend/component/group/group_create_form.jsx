import React from 'react';
import { withRouter } from 'react-router-dom'; 

class CreateGroupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            creator_id: this.props.creatorId, 
            title: '',
            about: '',
            location: '', 
            // longitude: '',
            // latitude: ''
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit (event) {
        event.preventDefault(); 
        this.props.createGroup(this.state);
    }

    handleUpdate(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    render () {
        return (
            <div className='cg-strip'>
                <div className='cg-splash-strip'>
                    <div className='cg-splash'>
                        <img 
                            className='cg-splash-banner'
                            src='https://bit.ly/2UfQMny'
                            />
                    </div>
                    <div className='cg-splash-content'>
                        <h1>Start a new Rendezvous</h1>
                        <h3>We'll help you find the right people to make it happen</h3>
                    </div>
                </div>
                <div className='cg-form-strip'>
                    <form className='cg-form' onSubmit={this.handleSubmit}>
                        <div className='cg-inputs'>
                            {/* <div className='cg-icon'> */}
                            {/* </div> */}
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2JS4HvT'/>   
                                <p className='cg-step'>Step 1 of 4</p>
                                <label>
                                    What's your new Rendezvous Group's hometown?
                                    <input 
                                        className='cg-input-box'
                                        onChange={this.handleUpdate('location')}
                                        placeholder='Search for a city'
                                        value={this.state.location}
                                    />
                                </label>
                                {/* must figure out how to extract data to location API */}
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2uE5q9A'/>   
                                <p className='cg-step'>Step 2 of 4</p>
                                <label>
                                    What will your Rendezvous name be?
                                    <input 
                                        className='cg-input-box'
                                        onChange={this.handleUpdate('title')}
                                        placeholder='example: New York Hiking Rendezvous'
                                        value={this.state.title}
                                    />
                                </label>
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2UnZEaE'/>   
                                <p className='cg-step'>Step 3 of 4</p>
                                <label>
                                    Describe who should join, and what your Rendezvous will do. 
                                    <textarea 
                                        className='cg-input-big-box'
                                        onChange={this.handleUpdate('about')}
                                        placeholder='example: This group is for passionate programmers, we welcome all'
                                        value={this.state.about}/>
                                </label>
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2WAG1JQ'/>   
                                <p className='cg-step'>Step 4 of 4</p>
                                <label>
                                    What it means to be a Rendezvous. 
                                    <ul className='cg-rules'>
                                        <li>Real, in person conversations</li>
                                        <li>Open and honest intentions</li>
                                        <li>Always safe and respectful</li>
                                        <li>Put your members first</li>
                                    </ul>
                                </label>
                                <input 
                                    className='cg-submit'
                                    type="submit"
                                    value='Agree & Continue' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}

export default withRouter (CreateGroupForm); 