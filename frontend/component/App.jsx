import React from 'react'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './auth/signup_form_container'; 
import LoginFormContainer from './auth/login_form_container'; 
import NavBarContainer from './navbar/nav_bar_container'; 
import Video from './video/video'; 
import MainBody from './main/main'; 
import HomePage from './home/home_page'; 
import Footer from './footer/footer_container'; 
import GroupCreateFormContainer from '../component/group/group_create_form_container'
import GroupShowContainer from '../component/group/group_show_container'
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 

const App = () => (
    <div>
        <NavBarContainer /> 
        {/* <Switch>             */}
            <Route exact path='/groups/new' component={GroupCreateFormContainer}/>
            <ProtectedRoute exact path='/home' component={HomePage} />
            <AuthRoute exact path='/' component={Video}/> 
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        {/* </Switch> */}
            <Route path='groups/:groupId' component={GroupShowContainer}/>
            <Route exact path='/' component={MainBody} />
            <Footer />
    </div>
); 

export default App; 