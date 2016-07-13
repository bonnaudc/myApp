import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import  App  from '../../ui/layouts/app.js';
import  Index   from '../../ui/components/index.js';
import  Login  from '../../ui/components/login.js';
import  SignUp  from '../../ui/components/signup.js';

import { Accounts, STATES } from 'meteor/std:accounts-material';


import  RelativesListContainer   from '../../ui/containers/relatives-list-container.js';
import  PicturesListContainer   from '../../ui/containers/pictures-list-container.js';

injectTapEventPlugin();


const requireAuth = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
};


Meteor.startup(() => {
    render(
        <Router  history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute name="index" component={ Index }  />
                <Route path="relatives-list" component={ RelativesListContainer }  onEnter={ requireAuth }  />
                <Route path="pictures" component={ PicturesListContainer }  onEnter={ requireAuth }  />
                <Route path="login" component={ Login } />
                <Route path="signup" component={ Accounts.ui.LoginForm } state={STATES.SIGN_UP} />
            </Route>

        </Router>	
        ,document.getElementById('react-root')
    );
});
