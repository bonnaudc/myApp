import React from 'react';
import { Link } from 'react-router';

class Relative extends React.Component {

	constructor(props){

		super(props);
	}

    render() {
    	var relative = this.props.relative
    	return (
			<div className="ui card">
			  <div className="ui image">
			    <img src={relative.img}/>
			  </div>
			  <div className="content">
			    <span className="header">{relative.name}</span>
			    <div className="meta">
			      <span className="date">{relative.age} years old</span>
			    </div>
			  </div>
			  <div className="extra content">
			    <Link to={{ pathname:'pictures', query:{ subject: relative.id } }}>
			      <i className="photo icon"></i>
			      {relative.nbPictures} Pictures
			    </Link>
			  </div>
			</div>
        );
    }
}


export default Relative;
