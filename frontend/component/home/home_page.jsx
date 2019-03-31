import React from 'react'; 
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render () {

        return (
            <div className='home-page-strip'>
                <div className='home-page-banner'>
                    <h1>Find your next event</h1>
                    <p> 4 events in your groups * 4,639 events near you</p>
                </div>
                <div className='home-page-search-bar'>
                    
                </div>
                <div className='home-page-main'>
                    <div className='home-page-events'>

                    </div>
                    <div className='home-page-calendar'>

                    </div>
                </div>
            </div>
        )
    }
} 

export default HomePage; 