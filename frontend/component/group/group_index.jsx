import React from 'react';
import GroupIndexItem from './group_index_item'; 

class GroupIndex extends React.Component {

    componentDidMount () {
        this.props.fetchGroups(); 
    }
 
    render () {
        let groups = this.props.groups.map(group => {
            return <GroupIndexItem key={group.id} group={group} />
        });

        return (
            <div className='homepage-strip'>
                <div className='homepage-banner'>
                    <h1>Find your next event</h1>
                    <p> 4 events in your groups * 4,639 events near you</p>
                </div>
                <div className='homepage-search-strip'>
                    <div className='homepage-search-filter'>
                        {/* <div className='homepage-buffer'> */}
                            <div className='homepage-search-bar'>
                                <input
                                    className='homepage-search-input'
                                    type='text'
                                    placeholder="It's a trap"
                                />
                                within 10 miles of Elmhurst, NY
                            </div>
                            <div className='homepage-filter-tabs'>
                                <button className='homepage-group-button'>Groups</button>
                                <button className='homepage-group-button'>Calendar</button>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className='homepage-main'>
                    {/* <div className='homepage-buffer'> */}
                        <h1>Available Groups</h1>
                        <div className='homepage-groups-index'>
                            {groups}
                        </div>
                        <div className='homepage-calendar'>
                            
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default GroupIndex; 
