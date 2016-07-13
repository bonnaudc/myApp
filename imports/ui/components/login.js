//login.js

import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-material';

class Login extends React.Component {


    signInHook(){

        const {location} = this.props;

        if (location.state && location.state.nextPathname) {
            this.context.router.push(location.state.nextPathname);
        } else {
            this.context.router.push('/');
        }

    }

    render() {
        return(
            <div>
                <Accounts.ui.LoginForm
                    state={ STATES.SIGN_IN }
                    onSignedInHook={ () => this.signInHook() }
                />
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Login;
