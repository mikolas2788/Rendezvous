import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ currentUser, logout }) => {
 
    let FooterAuth;
    if (currentUser) {
        FooterAuth = (
            <button
                className='footer-logout'
                onClick={logout}>Log out</button>
        )
    } else {
        FooterAuth = (
            <>
                <Link className='footer-login' to='/login'>Log in</Link>
                <Link className='footer-signup' to='/signup'>Sign up</Link>
            </>
        )
    }

    let createGroup;
    if (currentUser) {
        createGroup = (
            <Link className='footer-create-group' to='/groups/create'>Start a new group</Link>
        )
    } else {
        createGroup = (
            <Link className='footer-create-group' to='/login'>Start a new group</Link>
        )
    }

    return (
        <>
            <div className='footer-strip'>
                <div className='footer-content'>
                    <div className='footer-top'>
                        <div className='footer-group-create'>
                            {createGroup}
                        </div>
                        <div className='footer-auth'>{FooterAuth}</div>
                    </div>
                    <div className='footer-middle'>
                        <a 
                            className='footer-links' 
                            href='https://www.myronyook.com/'>
                            <i className='fas fa-home'></i> Myron's Portfolio
                        </a>
                        <a  
                            className='footer-links' 
                            href='https://github.com/mikolas2788'>
                            <i className='fab fa-github'></i> Myron's Github
                        </a>
                        <a 
                            className='footer-links' 
                            href='https://www.linkedin.com/in/myron-yook-97368197/'>
                            <i className='fab fa-linkedin'></i> Myron's Linkedin
                        </a>
                        <a 
                            className='footer-links' 
                            href='https://angel.co/myron-yook'>
                            <i className='fab fa-angellist'></i> Myron's AngelList 
                        </a>
                        <a 
                            className='footer-links' 
                            href='https://www.meetup.com/'>
                            <i className='fab fa-meetup'></i> The Real Meetup 
                        </a>
                    </div>
                </div>
                    <div className='footer-bottom'>
                        <p>© 2019 Rendezvous was created solely for educational purposes using Meetup </p>
                    </div>
            </div>
        </>
    )
}

export default Footer; 