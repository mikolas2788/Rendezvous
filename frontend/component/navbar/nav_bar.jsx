import React from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {

    render () {
        let NavAuth; 
        if (this.props.currentUser) {
            NavAuth = (
                <button 
                    className='navlogout'
                    onClick={this.props.logout}>Log out</button>
            )
        } else {
            NavAuth = (
                <>
                    <Link className='navlogin' to='/login'>Log in</Link>
                    <Link className='navsignup' to='/signup'>Sign up</Link>
                </>
            )
        }
 
        return (
            <>
                <div className='nav-bar'>
                    <div className='nav-logo'>
                        <Link className='logo' to='/'>Rendezvous</Link>
                    </div>
                    <div className="nav-right">
                        <div className='nav-group-create'>
                            <Link className='create-group' to='/doesnt exist yet'>Start a new group</Link>
                        </div>
                        <div className='nav-auth'>{NavAuth}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar; 