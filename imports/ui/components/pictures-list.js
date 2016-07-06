import React from 'react';
//import Relative   from './relative.js';


const renderPicturesList = (pictures) => {
  return pictures.length > 0 ? 
			  <div className="ui cards">
			    {pictures.map((img) => (
			    	<div key={ img._id } className="ui card">
			    	 	<div className="image"><img  src={img.src}/></div>
					    <div className="content">
					      <div className="header">{img.title}</div>
					      	{img.subjects.map((subject) => (
						      	<div className="ui label">{subject.name}</div>
					      	))}
					    </div>
				    </div>

			    ))}
		  	</div>
	:
  
  	<div>No pictures yet.
	</div>;
};

export const PicturesList = ({ loading, pictures }) => {
  return loading ? <p>Loading</p> : renderPicturesList(pictures);
};

PicturesList.propTypes = {
  loading: React.PropTypes.bool,
  pictures: React.PropTypes.array,
};