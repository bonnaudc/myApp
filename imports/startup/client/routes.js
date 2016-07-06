import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import  App  from '../../ui/layouts/app.js';
import  Index   from '../../ui/components/index.js';
import  RelativesListContainer   from '../../ui/containers/relatives-list-container.js';
import  PicturesListContainer   from '../../ui/containers/pictures-list-container.js';

injectTapEventPlugin();
Meteor.startup(() => {
  render(
		<Router  history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute name="index" component={ Index }  />
			<Route path="/index" component={ Index }  />
		  <Route path="relatives-list" component={ RelativesListContainer }  />
		  <Route path="pictures" component={ PicturesListContainer }  />
		</Route>
	    </Router>	
    ,document.getElementById('react-root')
  );
});
