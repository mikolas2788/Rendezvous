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
        window.scrollTo(0, 0);
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
        // if (this.props.currentUser.id === this.props.group.creator_id) {
        //     button = <button 
        //                 className='group-button' 
        //                 onClick={this.deleteGroup}>
        //                 Delete your group
        //             </button>
        // } else 
        
        if ((this.props.currentUser) && (!this.props.group.member_ids.includes(this.props.currentUser.id))) {
            button = <button 
                        className='group-button'    
                        onClick={this.joinGroup}>
                        Join this group</button>
        } else if ((this.props.currentUser) && (this.props.group.member_ids.includes(this.props.currentUser.id))) {
            button = <button 
                        className='group-button'
                        onClick={this.leaveGroup}>
                        Leave this group</button>
        } else {
            button = <Link 
                        className='group-link' 
                        to='/login'>
                        Join this group
                    </Link>
        }
        return button; 
    }

    organizer () {
        return this.props.group.organizer_id
    }

    memberCount () {
        return this.props.group.member_ids.length
    }

    memberIconCreator () {
        const members = []; 
        for (let i = 0; i < this.memberCount(); i++) {
            members.push(<img className='organizer-icon' src="https://picsum.photos/50/50/?random" alt="" />);
        }
        return members; 
    }

    render () {
        if (!this.props.group) {return null;}
        return (
            <div className='group-show-strip'>
                <div className='group-top'>
                    <div className='group-buffer'>
                        <img className='group-pic' src='' alt=""/>
                        <div className='group-info'>
                            <h1>{this.props.group.title}</h1>
                            <div>
                                <i className="far fa-compass"></i>
                                <p>{this.props.group.location}</p>
                            </div>
                            <div>
                                <i className="fas fa-users"></i>
                                <p>{ this.memberCount() } members</p>
                            </div>
                            {/* <p>public status</p> */}
                            <div>
                                <i className="fas fa-user-shield"></i>
                                <p>Organized by {this.props.group.organizer_id}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='group-mid'>
                    <div className='group-buffer'>
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
                </div>
                <div className='group-bottom'>
                    <div className='group-buffer'>
                        <div className='group-bottom-left'>
                            <div className='left-content'>
                                <h1>What we're about</h1>
                                {this.props.group.about}
                            </div>
                        </div>
                        <div className='group-bottom-right'>
                            <div className='group-organizer'>
                                <h1>Organizer</h1>
                                <img className='organizer-icon' src="https://picsum.photos/50/50/?random" alt=""/>
                            </div>
                            <div className='group-members'>
                                <h1>Members ({this.memberCount()})</h1>
                                <div className='member-icon'>
                                    {this.memberIconCreator()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupShow; 