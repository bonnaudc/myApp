
import React from 'react';
import { Accounts } from 'meteor/std:accounts-material';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    loginPath: '/login',
});
