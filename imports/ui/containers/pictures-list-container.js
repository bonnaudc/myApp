//import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Pictures } from '../../api/pictures/pictures.js';
import  {PicturesList}  from '../components/pictures-list.js';

export default PicturesListContainer = createContainer(({ location }) => {
  
 /* const pictures1 = [ 
  	{ id:'1', subjectId:'1', src:'http://semantic-ui.com/images/avatar2/large/kristy.png' },
  	{ id:'2', subjectId:'2', src:'http://semantic-ui.com/images/avatar2/large/elyse.png' },
  	{ id:'3', subjectId:'1', src:'http://semantic-ui.com/images/avatar2/large/elyse.png' },
  	{ id:'4', subjectId:'2', src:'http://semantic-ui.com/images/avatar2/large/elyse.png' },
  	];*/

  const subscription = Meteor.subscribe('pictures');

	/*var pictures = pictures1.filter(function(obj) {
	    return (obj.subjectId === location.query.subject);
	});*/
  var subjectId = location.query.subject;

  const loading = subscription.ready();
  const pictures = Pictures.find(
                    {
                      subjects: {
                        $elemMatch: {
                          id: subjectId
                        }
                      }
                    }
                    ).fetch();

  return { loading, pictures };
}, PicturesList);
