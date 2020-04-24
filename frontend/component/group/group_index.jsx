import React from 'react';
import GroupIndexItem from './group_index_item'; 

class GroupIndex extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleGroups = this.handleGroups.bind(this)
    }

    componentDidMount () {
        window.scrollTo(0, 0)
        this.props.fetchGroups()
    }

    handleChange (event) {
        event.preventDefault()
        const searchValue = event.target.value
        this.setState({ searchValue })
    }

    handleGroups () {
        const searchValue = this.state.searchValue.toLowerCase()
        let filteredGroups = this.props.groups.filter(group => {
            let title = group.title.toLowerCase()
            if (searchValue === "" || title.includes(searchValue)) {
                return true
            } else {
                return false
            }
        });

        return filteredGroups.map(group => {
            return <GroupIndexItem key={group.id} group={group} />
        })

    }
 
    render () {
        let groups = this.handleGroups()

        return (
            <div className='homepage-strip'>
                <div className='homepage-banner'>
                    <h1>Find your next event</h1>
                    <p> 4 events in your groups • 4,639 events near you</p>
                </div>
                <div className='homepage-search-strip'>
                    <div className='homepage-search-filter'>
                        <div className='homepage-search-bar'>
                            <input
                                className='homepage-search-input'
                                type='text'
                                onChange={this.handleChange}
                                placeholder="Search"
                            />
                            <p>
                                within 10 miles of Elmhurst, NY
                            </p>
                        </div>
                        <div className='homepage-filter-tabs'>
                            <button className='homepage-group-button'>Groups</button>
                            <button className='homepage-group-button'>Calendar</button>
                        </div>
                    </div>
                </div>
                <div className='homepage-main'>

                    <div className='homepage-buffer'>
                        <h1>AVAILABLE GROUPS</h1>
                        <div className='homepage-groups-index'>
                            {groups}
                        </div>
                        <div className='homepage-calendar'>
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex; 
