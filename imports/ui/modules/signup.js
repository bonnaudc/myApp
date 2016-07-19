// modules/signup.js

import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export const handleSignUp = (component,data) => {

    Accounts.createUser(data,(error) => {
        if (error){
            component({
                displayDialog: true,
                dialogTitle: 'Sign up error',
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

export const handleCancel =() => {
    browserHistory.push('/');
}

export const handleComponentMount =() => {
    if (Meteor.userId()){
        browserHistory.push('/');
    }
}

