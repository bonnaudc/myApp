import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-material';

class Login extends React.Component {

    render() {
        return(
            <div>
                <Accounts.ui.LoginForm
                    state={ STATES.SIGN_IN }
                    onSignedInHook={ () => console.log('user signed in') }
                />
            </div>
        );
    }
}

export default Login;
