//signup.js

import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-material';

class SignUp extends React.Component {

    signUpHook(){

        const {location} = this.props;

        if (location.state && location.state.nextPathname){
            this.context.router.push(location.state.nextPathname);
        }
        else{
            this.context.router.push ('/');
        }

    }

    render() {
        return(
            <div>
                <p>SignUp</p>
                <Accounts.ui.LoginForm
                    state={ STATES.SIGN_UP }
                    onPostSignUpHook={ () => this.signUpHook() }
                />
            </div>
        );
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.func.isRequired
}
export default SignUp;
