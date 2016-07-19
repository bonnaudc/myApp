//login.js

import React from 'react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { handleLogin } from '../modules/login.js';
import { handleSignUp } from '../modules/login.js';

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
    emailError: "Please provide a valid email address",
};


const styles = {
    paperStyle: {
        width: 300,
        margin: 'auto',
        padding: 20,
    },
    switchStyle: {
        marginBottom: 16,
    },
    submitStyle: {
        marginTop: 32,
    },
};



export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            canSubmit: false,
            displayDialog: false,
            dialogMessage:'',
            dialogTitle:'',
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUpButton = this.handleSignUpButton.bind(this);

    };


    componentDidMount() {
        if (Meteor.userId()){
            browserHistory.push('/');
        }
    };

    handleOpen(){
        this.setState({displayDialog: true});
    };

    handleClose(){
        this.setState({displayDialog: false});
    };


    enableButton() {
        this.setState({
            canSubmit: true,
        });
    };

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    };


    handleSubmit(data) {
        handleLogin(this,data);
    };

    handleSignUpButton(data){
        handleSignUp();
    };

    render() {

        let {paperStyle, switchStyle, submitStyle } = styles;
        let { wordsError, numericError, emailError } = errorMessages;

        let actions = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>

                <Dialog
                    title={ this.state.dialogTitle } 
                    actions={actions}
                    modal={false}
                    open={this.state.displayDialog}
                    onRequestClose={this.handleClose}
                >
                    { this.state.dialogMessage }
                </Dialog>

                <Paper style={paperStyle}>
                    <Formsy.Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onValidSubmit={this.handleSubmit}
                        onInvalidSubmit={this.notifyFormError}
                    >
                        <FormsyText
                            name="username"
                            required 
                            validations="isWords"
                            validationError={wordsError}
                            floatingLabelText="Username"
                        />
                        <FormsyText
                            name="password"
                            required 
                            type="password" 
                            validations="isWords"
                            validationError={wordsError}
                            floatingLabelText="Password"
                        />
                        <RaisedButton
                            style={submitStyle}
                            type="submit"
                            label="Submit"
                            disabled={!this.state.canSubmit}
                        />
                        <FlatButton
                            style={submitStyle}
                            label="register"
                            disabled={false}
                            secondary={true} 
                            onTouchTap={this.handleSignUpButton}
                        />
                    </Formsy.Form>
                </Paper>
            </div>
        )
    }
}
