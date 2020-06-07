import React from 'react'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './auth/signup_form_container'; 
import LoginFormContainer from './auth/login_form_container'; 
import NavBarContainer from './navbar/nav_bar_container'; 
import Video from './main/video'; 
import MainBody from './main/main'; 
import HomePage from './main/home_page'; 
import Footer from './footer/footer_container'; 
import GroupCreateFormContainer from '../component/group/group_create_form_container';
import GroupEditFormContainer from '../component/group/group_edit_form_container';
import GroupShowContainer from "../component/group/group_show_container";
import GroupIndexContainer from '../component/group/group_index_container'; 
import EventCreateFormContainer from '../component/event/event_create_form_container'; 
import {
    Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom'; 

const App = () => (
    <div>
        <NavBarContainer /> 
        <ProtectedRoute exact path='/home' component={HomePage} />
        <AuthRoute exact path='/' component={Video}/> 
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/' component={MainBody} />
        <Switch>
            <ProtectedRoute path="/groups/:groupId/edit" component={GroupEditFormContainer} />
            <ProtectedRoute exact path='/groups/create' component={GroupCreateFormContainer}/>
            <ProtectedRoute exact path="/groups/:groupId/events/create" component={EventCreateFormContainer} />
            <ProtectedRoute path='/groups/:groupId' component={GroupShowContainer}/>
        </Switch>
        <Footer />
    </div>
); 

export default App; 