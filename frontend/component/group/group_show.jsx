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
                <div className='group-main'>

                </div>
            </div>
            <div className='group-mid'>
            
            </div>
            <div className='group-bottom'>

            </div>

        </div>
    }


}

export default GroupShow; 