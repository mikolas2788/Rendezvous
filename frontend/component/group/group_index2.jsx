import React from 'react';
import GroupIndexItem from './group_index_container'

class GroupIndex extends React.Component {

    constructor (props) {
        super (props);

        this.handleGroups = this.handleGroups.bind(this);
    }

    componentDidMount () {
        this.props.fetchGroups();
    }

    handleGroups () {
        const searchValue = this.props.searchValue;
        const groups = this.props.groups; 
        const filteredGroups = groups.filter(group => {
            let title = group.title.toLowerCase()
            if ( searchValue === "" || title.includes(searchValue)) {
                return true;
            } else {
                return false; 
            }
        })

        return filteredGroups.map(group => (
            <GroupIndexItem 
                key={group.id} 
                group={group} 
                currentUser={this.props.currentUser} 
            />
        ))
    }

    render () {
        const groups = this.handleGroups();
        return (
            <div className='homepage-main'>
                <div className='homepage-buffer'>
                    <h1>AVAILABLE GROUPS</h1>
                    <div className='homepage-groups-index'>
                        {groups} 
                    </div>
                    {/* <div className='homepage-calendar'>

                    </div> */}
                </div>
            </div>            
        )
    }

}

export default GroupIndex; 