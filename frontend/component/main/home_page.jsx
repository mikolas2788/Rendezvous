import React from 'react';
// import GroupIndex from '../group/group_index';
import GroupIndexContainer from '../group/group_index_container'; 
import EventIndex from '../event/event_index';
import GroupIndex from '../group/group_index2';

class HomePage extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleChange(event) {
        event.preventDefault()
        const searchValue = event.target.value
        this.setState({ searchValue })
    }

    render () {
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
                <GroupIndex searchValue={this.state.searchValue}/>
            </div>
        )
    }

}
export default HomePage; 