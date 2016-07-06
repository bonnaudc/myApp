//import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//import { Documents } from '../../api/documents/documents.js';
import  {RelativesList}  from '../components/relatives-list.js';

export default RelativesListContainer = createContainer(({ params }) => {
  
  const relatives = [ 
  	{ id:'1', name: 'Kristy', age:'12', img:'http://semantic-ui.com/images/avatar2/large/kristy.png', nbPictures:'10' },
  	{ id:'2', name: 'Chris', age:'5', img:'http://semantic-ui.com/images/avatar2/large/elyse.png', nbPictures:'20' },
  	];
  const loading = false;
  return { loading, relatives };
}, RelativesList);
