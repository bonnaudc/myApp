//authenticated-navigation.js

import React from 'react';
import { browserHistory, Link } from 'react-router';
import mui from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class AuthenticatedNavigation extends React.Component {

    handleTouchTap() {
        alert('onTouchTap triggered on the title component');
    }

    render() {

        return (
            <div>
                <AppBar
                    title="My App"
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <FlatButton
                                    label={Meteor.user().username}
                                    icon={<ActionAccountCircle/>} 
                                />
                                }
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            >
                                <MenuItem primaryText="My profile" />
                                <MenuItem
                                    primaryText="Sign out"
                                    onTouchTap={handleLogout}
                                />
                            </IconMenu>
                            }
                        />
                    </div>
        );

    }
}

AuthenticatedNavigation.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default AuthenticatedNavigation;
