// modules/login.js

import React from 'react';
import { browserHistory } from 'react-router';

export const handleLogin = (component,data) => {

    Meteor.loginWithPassword(data['username'],data['password'],(error) => {
        if (error){
            component.setState({
                displayDialog: true,
                dialogTitle: 'Login error',
                dialogMessage: error.reason,
            });
        } else{

            const { location } = component.props;
            if (location.state && location.state.nextPathname) {
                browserHistory.push(location.state.nextPathname);
            } else {
                browserHistory.push('/');
            }
        }
    });
};

export const handleSignUp =() => {
    browserHistory.push('/signup');
}

