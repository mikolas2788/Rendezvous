import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util'; 
import configureStore from './store/store'; 

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();  
    const root = document.getElementById("root");

    //test
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    //test

    ReactDOM.render(<h1>Welcome to Rendezvous</h1>, root); 
}); 