import React from 'react'; 
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {

    constructor(props) {
        super(props); 

        this.deleteGroup = this.deleteGroup.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
        this.groupButton = this.groupButton.bind(this);
        this.memberCount = this.memberCount.bind(this);
    }

    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId); 
    }

    componentDidUpdate (oldProps) {
        if (this.props.match.params.groupId !== oldProps.match.params.groupId) {
            this.props.fetchGroup(this.props.match.params.groupId); 
        }
    }
    
    deleteGroup (e) {
        e.preventDefault();
        this.props.deleteGroup(this.props.group.id); 
    }

    joinGroup (e) {
        e.preventDefault(); 
        this.props.joinGroup(this.props.group.id); 
    }

    leaveGroup (e) {
        e.preventDefault(); 
        this.props.leaveGroup(this.props.group.id); 
    }
 
    groupButton () {
        let button; 
        if (this.props.currentUser.id === this.props.group.creator_id) {
            button = <button 
                        className='group-button' 
                        onClick={this.deleteGroup}>
                        Delete your group
                    </button>
        } else if (!this.props.group.members.includes(this.props.currentUser.id)) {
            button = <button 
                        className='group-button'
                        onClick={this.joinGroup}>
                        Join this group</button>
        } else if (this.props.group.members.includes(this.props.currentUser.id)) {
            button = <button 
                        className='group-button'
                        onClick={this.leaveGroup}>
                        Leave this group</button>
        } else {
            button = <Link to='/login'>Join this group</Link>
        }
        return button; 
    }

    memberCount () {
        return this.props.group.members.length
    }

    render () {
        if (!this.props.group) {return null;}
        return (
            <div className='group-show-strip'>
                <div className='group-top'>
                    <img className='group-pic' src="" alt=""/>
                    <div className='group-info'>
                        <h1>{this.props.group.title}</h1>
                        {/* need icons */}
                        <p>{this.props.group.location}</p>
                        <p>{ this.memberCount() } members</p>
                        {/* <p>public status</p> */}
                        {/* creator_id */}
                    </div>
                </div>
                <div className='group-mid'>
                    <div className='group-tabs'>
                        <Link className='group-item'>About</Link>
                        <Link className='group-item'>Events</Link>
                        <Link className='group-item'>Members</Link>
                        <Link className='group-item'>Photos</Link>
                        <Link className='group-item'>Discussions</Link>
                        <Link className='group-item'>More</Link>
                    </div>
                        { this.groupButton() }
                </div>
                <div className='group-bottom'>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default GroupShow; 