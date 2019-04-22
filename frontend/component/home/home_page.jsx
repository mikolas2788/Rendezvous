import React from 'react'; 
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

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
                <div className='homepage-main'>
                    <div className='homepage-events'>

                    </div>
                    <div className='homepage-calendar'>

                    </div>
                </div>
            </div>
        )
    }
} 

export default HomePage; 