import React from 'react';
import { withRouter } from 'react-router-dom';

class EditGroupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            creator_id: '',
            title: '',
            about: '',
            location: ''
        }; 
        if (this.props.group) {
            this.state = {
                id: this.props.group.id, 
                creator_id: this.props.currentUser.id,
                title: this.props.group.title,
                about: this.props.group.about,
                location: this.props.group.location,
            };
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount () { 
        window.scrollTo(0, 0);
        this.props.fetchGroup(this.props.match.params.groupId).then((promise) => {
            this.setState({
                id: promise.group.id,
                creator_id: promise.group.organizer_id, 
                title: promise.group.title,
                about: promise.group.about,
                location: promise.group.location,
            }); 
            console.log(promise);
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateGroup(this.state).then((promise) => {
            return (
                this.props.history.push(`/groups/${promise.group.id}`)
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
            <div className='eg-main-strip'>
                <div className='eg-banner'>
                    <h1 className='eg-banner-text'>{this.state.title}</h1>
                </div>
                <div className='eg-form-strip'>
                    <form className='eg-form' onSubmit={this.handleSubmit}>
                        <div className='eg-inputs'>
                            <h1 className='eg-input-header'>About This Rendezvous Group</h1>
                            <div className='eg-input'>
                                <label>
                                    <h3>Rendezvous Group Name</h3>
                                    <input 
                                        className='eg-input-field'
                                        onChange={this.handleUpdate('title')}
                                        value={this.state.title}
                                    />
                                </label>
                            </div>
                            <div className='eg-input'>
                                <label>
                                    <h3>Rendezvous Group Description</h3>
                                    <p>What is this Meetup's purpose? Who should join? Why?</p>
                                    <textarea
                                        className='eg-input-textarea'
                                        onChange={this.handleUpdate('about')}
                                        value={this.state.about}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='eg-inputs'>
                            <h1 className='eg-input-header'>Location</h1>
                            <div className='eg-input'>
                                <label>
                                    <h3>Zip Code</h3>
                                    <input 
                                        className='eg-input-zipcode'
                                        onChange={this.handleUpdate('location')}
                                        value={this.state.location}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='eg-inputs'>
                            <h1 className='eg-input-header'>Finishing Up</h1>
                            <div className='eg-input'>
                                <label>
                                    <h3>What it means to be a Rendezvous.</h3>
                                    <ul className='eg-rules'>
                                        <li>Real, in person conversations</li>
                                        <li>Open and honest intentions</li>
                                        <li>Always safe and respectful</li>
                                        <li>Put your members first</li>
                                    </ul>
                                </label>
                                    <input
                                        className='eg-submit'
                                        type="submit"
                                        value='Edit Group' 
                                    />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditGroupForm); 