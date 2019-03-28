import React from 'react'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './auth/signup_form_container'; 
import LoginFormContainer from './auth/login_form_container'; 
import NavBarContainer from './navbar/nav_bar_container'; 
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 
import Video from './video/video'; 

const App = () => (
    <div>
        <h1>
            Welcome to Rendezvous
        </h1>
        <NavBarContainer /> 
        <Route exact path="/" component={Video}/> 
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
); 

export default App; 