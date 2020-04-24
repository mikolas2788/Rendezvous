import React from 'react';

class GroupSearch extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const searchValue = e.target.value
        console.log("searchValue: " + searchValue)
        this.setState({ searchValue })
    }

    render () {
        return (
            <div>
                <div className='homepage-banner'>
                    <h1>Find your next event</h1>
                    <p> 4 events in your groups • 4,639 events near you</p>
                </div>
                <div className='homepage-search-strip'>
                    <div className='homepage-search-filter'>
                        <div className='homepage-search-bar'>
                            <input
                                className='homepage-search-input'
                                onChange={this.handleChange}
                                type='text'
                                placeholder="It's a trap"
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
            </div>
        )
    }
}

export default GroupSearch; 