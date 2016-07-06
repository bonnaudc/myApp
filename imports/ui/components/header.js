import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    
    render() {
        return(
	       
			  <div className="ui  centered  menu">
				  <Link to="/index" className="item">
				    Home
				  </Link>
				  <a className="item">
				    Messages
				  </a>
				  <a className="item">
				    Friends
				  </a>
				  <div className="right menu">
				    <a className="ui item active">
				      Logout
				    </a>
				  </div>
			</div>

        )
    }
}


export default Header;