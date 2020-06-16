import React from 'react';
import GroupIndex from '../group/group_index_container'; 
import EventIndex from '../event/event_index_container';

class HomePage extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            searchValue: "",
            onGroups: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleButtons = this.handleButtons.bind(this)
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    handleChange (event) {
        event.preventDefault()
        const searchValue = event.target.value
        this.setState({ searchValue })
    }

    handleButtons (event) {
        event.preventDefault()
        let button = event.target.id
        let groupButton = document.getElementById("group-button")
        let eventButton = document.getElementById("event-button")

        if ( button === groupButton.id ) {
            this.setState({ onGroups: true })
            groupButton.classList = "homepage-button-on"
            eventButton.classList = "homepage-button-off"
        } else if ( button === eventButton.id ) {
            this.setState({ onGroups: false })
            groupButton.classList = "homepage-button-off"
            eventButton.classList = "homepage-button-on"
        }
    }

    render () {
        let searchValue = this.state.searchValue
        let onGroups = this.state.onGroups
        let childComponent = onGroups ? 
            <GroupIndex searchValue={searchValue} /> : 
            <EventIndex searchValue={searchValue} />
        
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
                                    className='homepage-button-on'
                                    id='group-button'
                                    onClick={this.handleButtons}
                                > Groups 
                                </button>
                                <button 
                                    className='homepage-button-off'
                                    id='event-button'
                                    onClick={this.handleButtons}
                                > Calendar 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homepage-main' >
                    { childComponent }
                </div>
            </div>
        )
    }

}
export default HomePage; 