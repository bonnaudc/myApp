//app.js

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {teal500} from 'material-ui/styles/colors';
import AuthenticatedNavigation from '../components/authenticated-navigation.js'

import PublicNavigation from '../components/public-navigation.js'

const renderNavigation = () => {

    return (Meteor.userId() != null) ? <AuthenticatedNavigation />
        : <PublicNavigation />
    ;
}

class App extends React.Component {


    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        { renderNavigation() }                   
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default App;
