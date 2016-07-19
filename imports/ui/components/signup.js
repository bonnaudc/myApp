//components/signup.js

import React from 'react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, 
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { handleSignUp } from '../modules/signup.js';
import { handleCancel } from '../modules/signup.js';
import { handleComponentMount } from '../modules/signup.js';

const errorMessages = {
    wordsError: "Please only use letters",
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


export default class SignUp extends React.Component {

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
        this.handleCancelButton = this.handleCancelButton.bind(this);

    };


    componentDidMount() {
        handleComponentMount();
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
        handleSignUp(this,data);
    };

    handleCancelButton(data){
        handleCancel();
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
                            name="email"
                            required 
                            validations="isEmail"
                            validationError={emailError}
                            floatingLabelText="Email"
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
                            label="Cancel"
                            secondary={true} 
                            onTouchTap={this.handleCancelButton}
                        />
                    </Formsy.Form>
                </Paper>
            </div>
        )
    }
}
