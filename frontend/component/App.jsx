import React from 'react'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './auth/signup_form_container'; 
import LoginFormContainer from './auth/login_form_container'; 
import NavBarContainer from './navbar/nav_bar_container'; 
import Video from './video/video'; 
import MainBody from './main/main'; 
import Footer from './footer/footer_container'; 
import GroupCreateFormContainer from '../component/group/group_create_form_container'
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 

const App = () => (
    <div>
        {/* <Switch>             */}
            <NavBarContainer /> 
            <Route exact path='/' component={Video}/> 
            <Route exact path='/groups/new' component={GroupCreateFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <Route exact path='/' component={MainBody} />
            <Footer />
        {/* </Switch> */}
    </div>
); 

export default App; 