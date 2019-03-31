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
        
        let createGroup; 
        if (this.props.currentUser) {
            createGroup = (
                <Link className='create-group' to='/groups/new'>Start a new group</Link>
            )
        } else {
            createGroup = (
                <Link className='create-group' to='/login'>Start a new group</Link>
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
                            {createGroup}
                        </div>
                        <div className='nav-auth'>{NavAuth}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar; 