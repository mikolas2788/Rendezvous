import React from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {

    render () {
        let NavAuth; 
        if (this.props.currentUser) {
            NavAuth = (
                <div>
                    <button onClick={this.props.logout}>Log out</button>
                </div>
            )
        } else {
            NavAuth = (
                <div>
                    <Link to='/login'>Log in</Link>
                    <br/>
                    <Link to='/signup'>Sign up</Link>
                </div>
            )
        }

        return (
        <>
            <Link to='/'>Logo</Link>
            <br/>
            <Link to='/doesnt exist yet'>Start a new group</Link>
            <br/>
            <div>{NavAuth}</div>
        </>
        )
    }
}

export default NavBar; 