import React from 'react';
import { withRouter } from 'react-router-dom';

class EditGroupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.group.id, 
            creator_id: this.props.currentUser.id,
            title: this.props.group.title,
            about: this.props.group.about,
            location: this.props.group.location,
            // longitude: '',
            // latitude: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchGroup(this.props.match.params.groupId);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateGroup(this.state).then((payload) => {
            return (
                this.props.history.push(`/groups/${payload.group.id}`)
            );
        });
    }

    handleUpdate(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    render() {
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
                        <h1>Edit your Rendezvous</h1>
                        <h3>We'll help you find the right people to make it happen</h3>
                    </div>
                </div>
                <div className='cg-form-strip'>
                    <form className='cg-form' onSubmit={this.handleSubmit}>
                        <div className='cg-inputs'>
                            {/* <div className='cg-icon'> */}
                            {/* </div> */}
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2JS4HvT' />
                                <p className='cg-step'>Step 1 of 4</p>
                                <label>
                                    What's your Rendezvous Group's hometown?
                                    <input
                                        className='cg-input-box'
                                        onChange={this.handleUpdate('location')}
                                        placeholder={this.state.location}
                                    />
                                </label>
                                {/* must figure out how to extract data to location API */}
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2uE5q9A' />
                                <p className='cg-step'>Step 2 of 4</p>
                                <label>
                                    What will you change your Rendezvous name to?
                                    <input
                                        className='cg-input-box'
                                        onChange={this.handleUpdate('title')}
                                        placeholder={this.state.title}
                                    />
                                </label>
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2UnZEaE' />
                                <p className='cg-step'>Step 3 of 4</p>
                                <label>
                                    Describe who should join, and what your Rendezvous will do.
                                    <textarea
                                        className='cg-input-big-box'
                                        onChange={this.handleUpdate('about')}
                                        placeholder={this.state.about} />
                                </label>
                            </div>
                            <div className='cg-input'>
                                <img className='cg-icon' src='https://bit.ly/2WAG1JQ' />
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
                                    value='Edit Group' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditGroupForm); 