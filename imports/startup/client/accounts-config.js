//accounts-config.js

import React from 'react';
import { Accounts } from 'meteor/std:accounts-material';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY', 
})
