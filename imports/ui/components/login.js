import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-material';

class Login extends React.Component {
    componentDidMount() {

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Accounts.ui.LoginForm />
            </div>
        );
    }
}

export default Login;
