import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open:false};
        this.handleToggle = this.handleToggle.bind(this);

    }

    handleToggle(){
        this.setState({open: !this.state.open});
    }

    render() {

        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div id="page_container">
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onTitleTouchTap={this.handleToggle}
                    >
                        <Menu>
                            <MenuItem primaryText="Maps" />
                            <MenuItem primaryText="Books" />
                            <MenuItem primaryText="Flights" />
                            <MenuItem primaryText="Apps" />
                        </Menu>
                    </AppBar>
                    <Drawer open={this.state.open}>
                        <AppBar title="My App" />
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                    {this.props.children}

                </div>

            </MuiThemeProvider>
        );
    }
}


App.contextTypes = {
    history: React.PropTypes.object
};

export default App;
