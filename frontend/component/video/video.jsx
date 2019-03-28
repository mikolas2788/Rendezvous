import React from 'react';
import { Link } from 'react-router-dom';

class Video extends React.Component {

    render () {
        return (
            <div>
                <video src="https://bit.ly/2HHCZAh" 
                autoPlay 
                loop 
                height="500"
                muted>
                </video>
                <h1>Your world, right here</h1>
                <h3>Find and meet new people, try new things, drink lots, live life</h3>
                <Link to={'/signup'}><button>Sign Up</button></Link>
            </div>
        )
    }
}

export default Video; 