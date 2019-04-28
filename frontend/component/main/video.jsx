import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {

    render () {
        return (
            <div className='splash-main'>
                <div className='splash-video'>
                    <video src='https://bit.ly/2HHCZAh'
                        autoPlay 
                        loop 
                        muted>
                    </video>
                </div>
                <div className='splash-content'>
                    <h1>Your world, right here</h1>
                    <h3>Meet. Explore. Eat. Dance. Live.</h3>
                    <div className="splash-button-div">
                        <Link className='splash-button' to={'/signup'}>Join Rendezvous</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video; 