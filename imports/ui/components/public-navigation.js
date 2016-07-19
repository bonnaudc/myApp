//public-navigation.js

import React from 'react';
import { Link } from 'react-router';
import mui from 'material-ui';
import AppBar from 'material-ui/AppBar';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
    top: 0,
    left:0,
}

class PublicNavigation extends React.Component {

    handleTouchTap() {
        console.log('onTouchTap triggered on the title component');
    }

    render() {

        return (
            <div>
                <AppBar
                    title="My App"
                    style={styles}
                    iconElementRight={
                                <div>
                                    <FlatButton
                                        label="Login"
                                        containerElement={<Link to="/login" />} 
                                   />
                                    <FlatButton
                                        label="Sign up" 
                                         containerElement={<Link to="/signup" />}
                                    />
                                </div>
                            
                            }
                        />
                    </div>
        );

    }
}

PublicNavigation.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default PublicNavigation;
