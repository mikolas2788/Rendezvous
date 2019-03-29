import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
 
    render() {
        let FooterAuth;
        if (this.props.currentUser) {
            FooterAuth = (
                <button
                    className='footer-logout'
                    onClick={this.props.logout}>Log out</button>
            )
        } else {
            FooterAuth = (
                <>
                    <Link className='footer-login' to='/login'>Log in</Link>
                    <Link className='footer-signup' to='/signup'>Sign up</Link>
                </>
            )
        }

        return (
            <>
                <div className='footer-strip'>
                    <div className='footer-content'>
                        <div className='footer-top'>
                            <div className='footer-group-create'>
                                <Link
                                    className='footer create-link'
                                    to='/doesnt exist yet'>Start a new group
                                </Link>
                            </div>
                            <div className='footer-auth'>{FooterAuth}</div>
                        </div>
                        <div className='footer-middle'>
                            <div className='footer-links'>
                                <a href='https://github.com/mikolas2788'>
                                    <i className='fab fa-github'></i> Myron's Github
                                </a>
                                <a href='#'>
                                    <i className='fab fa-linkedin'></i> Myron's Linkedin
                                </a>
                                <a href='#'>
                                    <i className='fab fa-facebook'></i> Myron's Facebook 
                                </a>
                                <a href='https://www.meetup.com/'>
                                    <i className='fab fa-meetup'></i> The Real Meetup 
                                </a>
                            </div>
                        </div>
                    </div>
                        <div className='footer-bottom'>
                            <p>© 2019 Rendezvous was created solely for educational purposes using Meetup </p>
                        </div>
                </div>
            </>
        )
    }
}

export default Footer; 