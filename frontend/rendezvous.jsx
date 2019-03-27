import React from 'react';
import ReactDOM from 'react-dom';
import { logIn, logOut, signUp } from './util/session_api_util'; 
import configureStore from './store/store'; 

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();  
    const root = document.getElementById("root");

    //test
    window.login = logIn; 
    window.logout = logOut; 
    window.signup = signUp; 
    // window.getState = store.getState; 
    //test

    ReactDOM.render(<h1>Welcome to Rendezvous</h1>, root); 
}); 