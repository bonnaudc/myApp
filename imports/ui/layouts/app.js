//app.js

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {teal500} from 'material-ui/styles/colors';
import AuthenticatedNavigation from '../components/authenticated-navigation.js'

import PublicNavigation from '../components/public-navigation.js'

class App extends React.Component {

    renderNavigation(hasUser) {
        return hasUser ? <AuthenticatedNavigation />
            : <PublicNavigation />
        ;
    }

    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        { this.renderNavigation(this.props.hasUser) }                   
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
    hasUser: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
};

export default App;
