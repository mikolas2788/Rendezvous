import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'; 
import { login, logout, signup } from './util/session_api_util'; 
import Root from './component/root'; 
import * as eventUtil from './action/event_actions'; 

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //test
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.fetchEventUtil = eventUtil; 
    //test
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root); 
}); 