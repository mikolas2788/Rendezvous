import React from 'react'; 
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {

    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId); 
    }

    componentDidUpdate (oldProps) {
        if (this.props.match.params.groupId !== oldProps.match.params.groupId) {
            this.props.fetchGroup(this.props.match.params.groupId); 
        }
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
                        {/* <p>{group.members.length}</p> */}
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
                        <button className='group-member-button'>Join this group</button>
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