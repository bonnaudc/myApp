//signup.js

import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-material';

class SignUp extends React.Component {

    render() {
        return(
            <div>
                <Accounts.ui.LoginForm state={ STATES.SIGN_UP }/>
            </div>
        );
    }
}

export default SignUp;
