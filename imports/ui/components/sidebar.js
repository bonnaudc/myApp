import React from 'react';
import { Link } from 'react-router';

class SideBar extends React.Component {
    
    render() {
        return(
	       
	      <div className="ui vertical menu">
        
	        <Link to="/relatives-list" className="item">Relatives</Link>	          
	        
	      </div>

        )
    }
}


export default SideBar;