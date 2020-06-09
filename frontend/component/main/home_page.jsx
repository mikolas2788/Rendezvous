import React from 'react';
import GroupIndex from '../group/group_index_container'; 
import EventIndex from '../event/event_index';

class HomePage extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            searchValue: "",
            onGroups: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleGroups = this.handleGroups.bind(this)
        this.handleEvents = this.handleEvents.bind(this)

    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    handleChange (event) {
        event.preventDefault()
        const searchValue = event.target.value
        this.setState({ searchValue })
    }

    handleGroups (event) {
        event.preventDefault()
        this.setState({ onGroups: true })
    }

    handleEvents (event) {
        event.preventDefault()
        this.setState({ onGroups: false })
    }

    render () {
        let searchValue = this.state.searchValue; 
        let onGroups = this.state.onGroups; 
        let childComponent = onGroups ? 
            <GroupIndex searchValue={searchValue} /> : 
            "Hello World"
            // <EventIndex searchValue={searchValue} />
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
                            <div className='homepage-selectors'>
                                <button 
                                    className='homepage-group-button'
                                    onClick={this.handleGroups}
                                > Groups 
                                </button>
                                <button 
                                    className='homepage-event-button'
                                    onClick={this.handleEvents}
                                > Calendar 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {childComponent}
            </div>
        )
    }

}
export default HomePage; 