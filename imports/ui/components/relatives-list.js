import React from 'react';
import Relative   from './relative.js';


const renderRelativesList = (relatives) => {
  return relatives.length > 0 ? 
		  <div className="ui four cards">
		    {relatives.map((rel) => (
		      <Relative key={ rel.id } relative={rel} />
		    ))}
		  </div> 
	:
  <p>No relatives yet.</p>;
};

export const RelativesList = ({ loading, relatives }) => {
  return loading ? <p>Loading</p> : renderRelativesList(relatives);
};

RelativesList.propTypes = {
  loading: React.PropTypes.bool,
  relatives: React.PropTypes.array,
};