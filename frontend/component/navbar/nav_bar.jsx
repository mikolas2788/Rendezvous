import React from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {

    render () {
        let NavAuth; 
        if (this.props.currentUser) {
            NavAuth = (
                <button onClick={this.props.logout}>Log out</button>
            )
        } else {
            NavAuth = (
                <>
                    <Link to='/login'>Log in</Link>
                    <Link to='/signup'>Sign up</Link>
                </>
            )
        }
 
        return (
            <>
                <div className='nav-bar'>
                    <div className='nav-left'>
                        <Link to='/'>Logo</Link>
                    </div>
                    <div className='nav-right'>
                            <Link to='/doesnt exist yet'>Start a new group</Link>
                        <div classname='nav-auth'>{NavAuth}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar; 