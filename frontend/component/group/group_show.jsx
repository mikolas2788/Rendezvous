import React from 'react'; 
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {

    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId)
    }
    
    render () {
        <div className='group-show-strip'>
            <div className='group-top'>
                <div className='group-pic'>

                </div>
                <div className='group-info'>
                    <h1>{group.title}</h1>
                    {/* need icons */}
                    <p>{group.location}</p>
                    {/* <p>{group.members.length}</p> */}
                    {/* <p>public status</p> */}
                    {/* creator_id */}
                </div>
            </div>
            <div className='group-mid'>
                <div className='group-tabs'>

                </div>
            </div>
            <div className='group-bottom'>
                <div>
                    
                </div>
            </div>

        </div>
    }


}

export default GroupShow; 